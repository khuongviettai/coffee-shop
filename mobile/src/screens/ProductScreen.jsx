import React from 'react';
import {View} from 'react-native';
import MenuProduct from '../components/Product/MenuProduct';
import MainHeader from '../components/Header/MainHeader';
import {POPULAR, Top_Sell} from '../data';
import ProductItem from '../components/Product/ProductItem';

const ProductScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MainHeader />
      <MenuProduct list={Top_Sell} />
      <ProductItem list={POPULAR} />
    </View>
  );
};

export default ProductScreen;
