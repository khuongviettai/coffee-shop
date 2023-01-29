import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {colors, spacing} from '../../constants/theme';
import Icon from '../../utils/Icon';

const windowWidth = Dimensions.get('window').width;
const ProductDetailButton = () => {
  return (
    <View
      style={{
        flex: 1,
        width: windowWidth,
        position: 'absolute',
        height: 100,
        backgroundColor: colors.white,
        bottom: 0,
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderColor: colors.lightGray,
      }}>
      <View
        style={{
          width: '40%',
          justifyContent: 'center',
          height: '70%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: spacing.l,
          }}>
          <TouchableOpacity>
            <Icon
              icon="Minus"
              style={{
                width: 22,
                height: 22,
                backgroundColor: colors.mainColor,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, marginLeft: 8, marginRight: 8}}>5</Text>
          <TouchableOpacity>
            <Icon
              icon="Plus"
              style={{
                width: 22,
                height: 22,
                backgroundColor: colors.mainColor,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          top: 12,
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
          backgroundColor: colors.mainColor,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 15, color: colors.white, fontWeight: 'bold'}}>
          Thêm vào giỏ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailButton;
