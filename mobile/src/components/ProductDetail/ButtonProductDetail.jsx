import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../constants/theme';

const ButtonProductDetail = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        position: 'absolute',
        height: 90,
        backgroundColor: colors.white,
        bottom: 0,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70%',
          backgroundColor: 'green',
        }}>
        <Text style={{fontSize: 15, color: colors.white, fontWeight: 'bold'}}>
          Mua Ngay
        </Text>
      </View>
      <View
        style={{
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70%',
          backgroundColor: colors.mainColor,
        }}>
        <Text style={{fontSize: 15, color: colors.white, fontWeight: 'bold'}}>
          Thêm vào giỏ
        </Text>
      </View>
    </View>
  );
};

export default ButtonProductDetail;
