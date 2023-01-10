import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated} from 'react-native';
import Icon from '../utils/Icon';
import {colors, sizes} from '../constants/theme';

import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductScreen from '../screens/ProductScreen';
import PromoScreen from '../screens/PromoScreen';

const tabs = [
  {
    name: 'Home',
    screen: HomeScreen,
  },
  {
    name: 'Coffee',
    screen: ProductScreen,
  },
  {
    name: 'Search',
    screen: SearchScreen,
  },
  {
    name: 'Gift',
    screen: PromoScreen,
  },
  {
    name: 'Profile',
    screen: LoginScreen,
  },
];
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        {tabs.map(({name, screen}, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      icon={name}
                      size={40}
                      style={{
                        tintColor: focused ? colors.mainColor : colors.gray,
                      }}
                    />
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
