import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from '../components/Icon';
import Favorite from '../views/Favorite';
import HomeScreen from '../views/HomeScreen';
import Search from '../views/Search';
import Profile from '../views/Profile';
import {colors, sizes} from '../constants/theme';
import {Animated} from 'react-native';

const tabs = [
  {
    name: 'Home',
    screen: HomeScreen,
  },
  {
    name: 'Search',
    screen: Search,
  },
  {
    name: 'Favorite',
    screen: Favorite,
  },
  {
    name: 'Profile',
    screen: Profile,
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
