import React from 'react';
import {View} from 'react-native';
import AccountProfile from '../components/Profile/AccountProfile';
import {colors} from '../constants/config';

const ProfileScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.bodyColor}}>
      <AccountProfile />
    </View>
  );
};

export default ProfileScreen;
