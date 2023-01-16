import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import TabDrawer from './TabDrawer';
import ForgotPassword from '../components/Login/ForgotPassword';
import LoginScreen from '../screens/LoginScreen';
import CartScreen from '../screens/CartScreen';
import OnboardingScreen from '../screens/ OnboardingScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        {/*<Stack.Screen*/}
        {/*  name="LoginScreen"*/}
        {/*  component={LoginScreen}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="ForgotPassword"*/}
        {/*  component={ForgotPassword}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="CartScreen"*/}
        {/*  component={CartScreen}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
