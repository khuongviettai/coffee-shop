import React from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/theme';
import Icon from '../../utils/Icon';

const ProductOption = ({
  snapPoints,
  bottomSheetRef,
  handleClosePress,
  route,
}) => {
  return (
    <BottomSheet
      index={-1}
      backgroundStyle={{backgroundColor: colors.bodyColor}}
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      handleComponent={null}
      enablePanDownToClose={true}>
      <BottomSheetView>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
            backgroundColor: colors.white,
            paddingHorizontal: 30,
          }}>
          <View style={{width: 30, height: 30}}></View>
          <Text>hello</Text>
          <TouchableOpacity onPress={handleClosePress}>
            <Icon
              icon="Close"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: colors.white,
            height: '100%',
          }}></View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default ProductOption;
