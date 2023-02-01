import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ProfileHeader from '../Header/ProfileHeader';
import MainHeader from '../Header/MainHeader';
import {colors, spacing} from '../../constants/theme';
import Icon from '../../utils/Icon';
import {useNavigation} from '@react-navigation/native';

const AccountProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <MainHeader />
      <ProfileHeader title="Tài khoản" />
      <View
        style={{
          height: '25%',
          marginLeft: spacing.l,
          marginRight: spacing.l,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: '25%',
            alignItems: 'center',
          }}>
          <Icon icon="Profile" />
          <Text style={{marginLeft: 12}}>Thông tin cá nhân</Text>
          <Icon icon="Next" style={{marginLeft: 120, width: 20, height: 20}} />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            width: '90%',
            marginLeft: spacing.s,
            borderBottomWidth: 1,
            borderColor: colors.lightGray,
          }}></View>
        {/*<TouchableOpacity*/}
        {/*  style={{*/}
        {/*    flexDirection: 'row',*/}
        {/*    height: '25%',*/}
        {/*    alignItems: 'center',*/}
        {/*  }}>*/}
        {/*  <Icon icon="Profile" />*/}
        {/*  <Text style={{marginLeft: 12}}>Lịch sử mua hàng</Text>*/}
        {/*  <Icon icon="Next" style={{marginLeft: 120, width: 20, height: 20}} />*/}
        {/*</TouchableOpacity>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    justifyContent: 'center',*/}
        {/*    width: '90%',*/}
        {/*    marginLeft: spacing.s,*/}
        {/*    borderBottomWidth: 1,*/}
        {/*    borderColor: colors.lightGray,*/}
        {/*  }}></View>*/}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: '25%',
            alignItems: 'center',
          }}>
          <Icon icon="Profile" />
          <Text style={{marginLeft: 12}}>Thông tin cá nhân</Text>
          <Icon icon="Next" style={{marginLeft: 120, width: 20, height: 20}} />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            width: '90%',
            marginLeft: spacing.s,
            borderBottomWidth: 1,
            borderColor: colors.lightGray,
          }}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: '25%',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Login')}>
          <Icon icon="Profile" />
          <Text style={{marginLeft: 12}}>Đăng nhập</Text>
          <Icon
            icon="Next"
            style={{width: 20, height: 20, position: 'absolute', right: 42}}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            width: '90%',
            marginLeft: spacing.s,
            borderBottomWidth: 1,
            borderColor: colors.lightGray,
          }}></View>
      </View>
    </View>
  );
};

export default AccountProfile;
