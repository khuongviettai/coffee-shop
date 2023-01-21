import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '../../utils/Icon';
import {View} from 'react-native';
import {spacing} from '../../constants/config';
import {useNavigation} from '@react-navigation/native';

const MainHeader = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: spacing.l,
        marginTop: insets.top,
      }}>
      <Icon icon="Hamburger" onPress={() => navigation.openDrawer()} />
      <Icon
        // style={{width: 25, height: 25}}
        icon="Cart2"
        onPress={() => navigation.navigate('CartScreen')}
      />
    </View>
  );
};

export default MainHeader;
