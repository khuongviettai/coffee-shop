import React from 'react';
import {Text, View} from 'react-native';

const PromotionDetail = ({route}) => {
  const {promotion} = route.params;
  return (
    <View>
      <Text>{promotion.title}</Text>
    </View>
  );
};

export default PromotionDetail;
