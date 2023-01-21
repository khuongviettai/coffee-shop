import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../../utils/Icon';
import {spacing} from '../../constants/config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
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
      <FlatList
        horizontal
        pagingEnabled
        data={product.image}
        // contentContainerStyle={{height: windowHeight * 0.75}}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <Image source={item} style={{width: windowWidth, height: 410}} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductDetail;
