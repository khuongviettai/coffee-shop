import React, {useRef} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import ProductDetailImage from '../components/ProductDetail/ProductDetailImage';
import ProductDetailInfo from '../components/ProductDetail/ProductDetailInfo';
import {colors} from '../constants/theme';
import ProductDetailButton from '../components/ProductDetail/ProductDetailButton';

const ProductDetailScreen = ({route}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={{backgroundColor: colors.bodyColor, flex: 1}}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        decelerationRate="normal"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <Animated.View
          style={{
            height: 520,
            width: '100%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-520, 0, 520, 520 + 1],
                  outputRange: [-520 / 2, 0, 520 * 0.75, 520 * 0.75],
                }),
              },
              // {
              //   scale: scrollY.interpolate({
              //     inputRange: [-520, 0, 520, 520 + 1],
              //     outputRange: [2, 1, 0.5, 0.5],
              //   }),
              // },
            ],
          }}>
          <ProductDetailImage route={route} scrollY={scrollY} />
        </Animated.View>

        <ProductDetailInfo route={route} />
      </Animated.ScrollView>

      <ProductDetailButton />
    </View>
  );
};

export default ProductDetailScreen;
