import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {sizes, spacing} from '../constants/theme';

const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={{paddingHorizontal: spacing.l, paddingVertical: spacing.l}}>
      <Text style={{fontSize: sizes.title, fontWeight: 'bold'}}>
        {mainTitle}
      </Text>
      <Text style={{fontSize: sizes.title}}>{secondTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScreenHeader;
