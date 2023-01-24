import React from 'react';
import {Text, View} from 'react-native';
import {spacing} from '../../constants/theme';

const ProductDetailInfo = ({route}) => {
  const {product} = route.params;
  return (
    <View>
      <View style={{marginLeft: spacing.l, marginTop: spacing.s}}>
        <Text style={{fontSize: 25, fontWeight: '500'}}>{product.title}</Text>
        <Text style={{fontSize: 14, color: '#8b8989', marginTop: spacing.s}}>
          {product.price.toLocaleString('vi', {
            style: 'currency',
            currency: 'VND',
          })}
        </Text>
        <Text style={{marginTop: spacing.s, marginRight: spacing.l}}>
          {product.description}
        </Text>
      </View>
    </View>
  );
};

export default ProductDetailInfo;
