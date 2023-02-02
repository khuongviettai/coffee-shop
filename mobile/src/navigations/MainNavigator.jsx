import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import TabDrawer from './TabDrawer';
import ForgotPassword from '../components/Account/ForgotPassword';
import LoginScreen from '../screens/LoginScreen';
import CartScreen from '../screens/CartScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import productDetailScreen from '../screens/ProductDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PromoScreen from '../screens/PromoScreen';
import SearchScreen from '../screens/SearchScreen';
import ProductScreen from '../screens/ProductScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Root"
          component={TabDrawer}
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
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Promo" component={PromoScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfoScreen}
          options={{
            title: 'Thông tin cá nhân',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
