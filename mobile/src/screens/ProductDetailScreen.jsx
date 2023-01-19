import React, {useEffect, useState} from 'react';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import {ScrollView, View} from 'react-native';
import instance from '../routes/instance';
import ButtonProductDetail from '../components/ProductDetail/ButtonProductDetail';
import ProductDetailInfo from '../components/ProductDetail/ProductDetailInfo';
import Topping from '../components/ProductDetail/Topping';

const ProductDetailScreen = ({route, navigation}) => {
  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   instance
  //     .get(`/api/products/`)
  //     .then(({data}) => {
  //       setProduct(data);
  //     })
  //     .catch(error => console.log(error));
  // });
  return (
    <View style={{flex: 1}}>
      <ProductDetail route={route} navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <ProductDetailInfo route={route} />
        <Topping route={route} />
      </ScrollView>
      <ButtonProductDetail />
    </View>
  );
};

export default ProductDetailScreen;
