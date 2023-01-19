import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {spacing} from '../../constants/config';

const Topping = ({route}) => {
  const {product} = route.params;
  return (
    <View style={{marginLeft: spacing.m, marginTop: spacing.l}}>
      {product.topping.map((item, index) => {
        return (
          <View key={index} style={{flexDirection: 'row'}}>
            <CheckBox
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
              onTintColor="#FA4A0C"
              onCheckColor="#fff"
              onFillColor="#FA4A0C"
            />
            <Text style={{marginTop: 6, marginLeft: spacing.l}}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Topping;
