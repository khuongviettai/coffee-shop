import React from 'react';
import {View} from 'react-native';
import AccountProfile from '../components/Profile/AccountProfile';
import {colors} from '../constants/theme';
import MainHeader from '../components/Header/MainHeader';

const AccountScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.bodyColor}}>
      {/*<MainHeader title="Tài khoản" />*/}
      <AccountProfile />
    </View>
  );
};

export default AccountScreen;
