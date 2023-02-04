import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import ForgotPassword from '../components/Account/ForgotPassword';
import LoginScreen from '../screens/LoginScreen';
import CartScreen from '../screens/CartScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import productDetailScreen from '../screens/ProductDetailScreen';
import PromoScreen from '../screens/PromoScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigator from './TabNavigator';
import AddressSave from '../components/Profile/Address/AddressSave';
import AddressHome from '../components/Profile/Address/AddressHome';
import PersonalInfo from '../components/Profile/PersonalInfo';
const Stack = createStackNavigator();

const MainNavigator = () => {
  const [firstAppOnboarding, setFirstAppOnboarding] = useState(null);
  const getData = async () => {
    try {
      const storeData = await AsyncStorage.getItem('firstAppOnboarding');
      if (storeData == null) {
        setFirstAppOnboarding(true);
      } else {
        setFirstAppOnboarding(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        {firstAppOnboarding && (
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />
        )}

        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: 'Giỏi hàng',
            headerBackTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={productDetailScreen}
          options={{
            title: null,
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
            title: null,
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{
            title: 'Thông tin cá nhân',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen name="Promo" component={PromoScreen} />
        <Stack.Screen
          name="AddressSave"
          component={AddressSave}
          options={{
            headerShown: true,
            title: null,
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="AddressHome"
          component={AddressHome}
          options={{
            headerShown: true,
            title: 'Thêm địa chỉ mới',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
