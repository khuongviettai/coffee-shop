import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';
import Icon from '../../utils/Icon';

const CartItem = ({list}) => {
  return (
    <View>
      {list.map((item, index) => {
        return (
          <View
            style={{
              height: 120,
              // elevation: 15,
              backgroundColor: 'white',
              marginVertical: spacing.s,
              marginHorizontal: spacing.l,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: sizes.radius,
            }}
            key={index}>
            <Image
              source={item.image[0]}
              style={{width: 100, height: 100, borderRadius: sizes.radius}}
            />
            <View
              style={{
                flex: 1,
                marginLeft: spacing.m,
                paddingVertical: 20,
                height: 100,
              }}>
              <Text>{item.title}</Text>
              <Text style={{marginVertical: 8}}>{item.price}</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Icon
                  icon="Trash"
                  style={{
                    marginLeft: 45,
                    marginBottom: 38,
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Icon
                    icon="Plus"
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: colors.mainColor,
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
                <Text style={{fontSize: 25, marginLeft: 8, marginRight: 8}}>
                  5
                </Text>
                <TouchableOpacity>
                  <Icon
                    icon="Minus"
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: colors.mainColor,
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CartItem;
