import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors, sizes, spacing} from '../../constants/config';
import Icon from '../../utils/Icon';

const CartItem = ({list}) => {
  return (
    <View style={{flex: 1}}>
      {list.map((item, index) => {
        return (
          <View style={{height: '20%'}} key={index}>
            <View
              style={{
                marginLeft: spacing.l,
                marginRight: spacing.l,
                backgroundColor: 'white',
                height: '90%',
                borderRadius: sizes.radius,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: spacing.m,
                  flexDirection: 'row',
                  height: '100%',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: '30%',
                    height: '80%',
                    borderRadius: 12,
                    marginLeft: spacing.m,
                  }}
                  resizeMode="stretch"
                />

                <View style={{marginLeft: spacing.l}}>
                  <Text style={{marginBottom: spacing.s}}>{item.title}</Text>
                  <Text>{item.price}</Text>
                </View>
                <View>
                  <Icon style={{width: 20, height: 20}} icon="Plus" />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CartItem;
