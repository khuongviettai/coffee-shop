import React from 'react';
import {ScrollView, View} from 'react-native';
import CartItem from '../components/Cart/CartItem';
import {colors} from '../constants/theme';
import {POPULAR} from '../data';
import SubHeader from '../components/Header/SubHeader';
import VoucherCart from '../components/Cart/VoucherCart';
import TotalCart from '../components/Cart/TotalCart';
import CartButton from '../components/Cart/CartButton';

const CartScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.bodyColor}}>
      <SubHeader subTitle="Giỏ hàng" />
      <ScrollView>
        <CartItem list={POPULAR} />
      </ScrollView>
      <View style={{marginBottom: 100}}>
        <VoucherCart />
        <TotalCart />
      </View>
      <CartButton />
    </View>
  );
};

export default CartScreen;
