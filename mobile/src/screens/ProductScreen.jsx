import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MenuProduct from '../components/Product/MenuProduct';
import MainHeader from '../components/Header/MainHeader';
import {Top_Sell} from '../data';
import ProductItem from '../components/Product/ProductItem';
import instance from '../routes/instance';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance
      .get('/api/products')
      .then(({data}) => {
        setProducts(data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <View style={{flex: 1}}>
      <MainHeader />
      <MenuProduct list={Top_Sell} />
      <ProductItem list={products} />
    </View>
  );
};

export default ProductScreen;
