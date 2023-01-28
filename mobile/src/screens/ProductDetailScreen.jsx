import React from 'react';
import {View} from 'react-native';
import ProductDetailImage from '../components/ProductDetail/ProductDetailImage';
import ProductDetailInfo from '../components/ProductDetail/ProductDetailInfo';

const ProductDetailScreen = ({route}) => {
  return (
    <View style={{backgroundColor: '#f5f5f5'}}>
      <ProductDetailImage route={route} />
      <ProductDetailInfo route={route} />
    </View>
  );
};

export default ProductDetailScreen;
