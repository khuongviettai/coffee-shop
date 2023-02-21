import React from 'react';
import {View} from 'react-native';
import {colors, shadow} from '../constants/theme';
import Icon from './Icon';

const CloseButton = ({style}) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.lightGray,
          padding: 3,
          borderRadius: 20,
        },
        shadow.light,
        style,
      ]}>
      <Icon icon="Close" size={25} />
    </View>
  );
};

export default CloseButton;
