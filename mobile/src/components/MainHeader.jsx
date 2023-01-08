import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from './Icon';
import {sizes, spacing} from '../constants/theme';

const MainHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: spacing.l,
        marginTop: insets.top,
      }}>
      <Icon icon="Hamburger" onPress={() => {}} />
      <Icon icon="Notification" onPress={() => {}} />
    </View>
  );
};

export default MainHeader;
