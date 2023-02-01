import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();
const TabDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Trang chủ" component={TabNavigator} />
      <Drawer.Screen name="Đăng Nhập" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

export default TabDrawer;
