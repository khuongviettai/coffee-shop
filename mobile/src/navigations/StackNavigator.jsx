import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AddressSave from '../components/Profile/Address/AddressSave';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen name="AddressSave" component={AddressSave} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
