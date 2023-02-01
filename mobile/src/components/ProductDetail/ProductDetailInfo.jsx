import React from 'react';
import {Text, View} from 'react-native';
import {colors, spacing} from '../../constants/theme';

const ProductDetailInfo = ({route}) => {
  const {product} = route.params;
  return (
    <View
      style={{
        backgroundColor: colors.white,
        marginTop: spacing.m,
        marginBottom: 200,
      }}>
      <View>
        <View style={{marginLeft: spacing.l, marginTop: spacing.m}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Size
          </Text>
          <Text style={{fontSize: 14, marginTop: 2, color: colors.gray}}>
            Chọn 1 loại size
          </Text>
        </View>
        {product.size.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                marginLeft: spacing.l,
                marginVertical: spacing.l,
              }}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ProductDetailInfo;
