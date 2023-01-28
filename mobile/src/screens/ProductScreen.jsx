import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import MenuProduct from '../components/Product/MenuProduct';
import MainHeader from '../components/Header/MainHeader';
import {Top_Sell} from '../data';
import ProductItem from '../components/Product/ProductItem';
import instance from '../instance/instance';
import ProductOption from '../components/Product/ProductOption';

const ProductScreen = () => {
  const [isOpen, setIsOpen] = useState(true);
  const bottomSheetRef = useRef(null);
  const snapPoints = ['80%'];
  const [products, setProducts] = useState([]);

  const handleSnapPress = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  const handleClosePress = () => bottomSheetRef.current.close();
  // const handlePresentPress = () => bottomSheetRef.current.present();
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuProduct list={Top_Sell} />
        <ProductItem list={products} handleSnapPress={handleSnapPress} />
      </ScrollView>
      <ProductOption
        snapPoints={snapPoints}
        bottomSheetRef={bottomSheetRef}
        handleClosePress={handleClosePress}
      />
    </View>
  );
};

export default ProductScreen;
