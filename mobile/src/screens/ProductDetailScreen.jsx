import React, {useRef} from 'react';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import {Animated, ScrollView, View} from 'react-native';
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
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1}}>
      <Animated.ScrollView
        style={{flex: 1}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <Animated.View>
          <ProductDetail route={route} navigation={navigation} />
        </Animated.View>
        <ProductDetailInfo route={route} />
        <Topping route={route} />
      </Animated.ScrollView>
      <ButtonProductDetail />
    </View>
  );
};

export default ProductDetailScreen;
