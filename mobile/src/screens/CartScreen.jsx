import React from 'react';
import {View} from 'react-native';
import CartItem from '../components/Cart/CartItem';
import {colors} from '../constants/theme';
import {POPULAR} from '../data';
import MainHeader from '../components/Header/MainHeader';

const CartScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.bodyColor}}>
      <MainHeader />
      <CartItem list={POPULAR} />
    </View>
  );
};

export default CartScreen;
