import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';
import {View} from 'react-native';

const Drawer = createDrawerNavigator();
const TabDrawer = () => {
  const [user] = useState();
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Drawer.Screen name="Trang chủ" component={TabNavigator} />
          </>
        ) : (
          <>
            <Drawer.Screen name="Trang chủ" component={TabNavigator} />
            <Drawer.Screen name="Đăng Nhập" component={LoginScreen} />
          </>
        )}
      </Drawer.Navigator>
    </View>
  );
};

export default TabDrawer;
