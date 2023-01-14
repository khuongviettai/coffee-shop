import React from 'react';
import {View} from 'react-native';
import {colors, shadow} from '../constants/config';
import Icon from './Icon';

const AddItem = () => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.mainColor,
          padding: 3,
          borderRadius: 20,
        },
        shadow.light,
      ]}>
      <Icon icon="Plus" size={25} />
    </View>
  );
};

export default AddItem;
