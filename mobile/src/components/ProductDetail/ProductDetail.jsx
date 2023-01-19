import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from '../../utils/Icon';
import {spacing} from '../../constants/config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ProductDetail = ({route, navigation: {goBack}}) => {
  const insets = useSafeAreaInsets();
  const {product} = route.params;

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: spacing.s,
          zIndex: 1,
          marginTop: insets.top,
        }}
        onPress={() => {
          goBack();
        }}>
        <Icon icon="Back" style={{width: 50, height: 50}} />
      </TouchableOpacity>
      <View>
        <Image
          source={product.image[0]}
          style={{width: '100%', height: 410}}
          resizeMode={'stretch'}
        />
      </View>
    </View>
  );
};

export default ProductDetail;
