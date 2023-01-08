import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import FavoriteButton from './FavoriteButton';

const Card_Width = sizes.width - 80;
const Card_Height = 200;
const Card_Width_Spacing = Card_Width + spacing.l;
const TopSell = ({list}) => {
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={Card_Width_Spacing}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: spacing.l,
              marginRight: index === list.length - 1 ? spacing.l : 0,
            }}>
            <View
              style={{
                width: Card_Width,
                height: Card_Height,
                shadowColor: colors.black,
                shadowRadius: 4,
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 2},
                marginVertical: 5,
              }}>
              <FavoriteButton
                style={{
                  position: 'absolute',
                  top: spacing.m,
                  right: spacing.m,
                  zIndex: 1,
                }}
              />
              <View
                style={{
                  width: Card_Width,
                  height: Card_Height,
                  borderRadius: sizes.radius,
                  overflow: 'hidden',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: Card_Width,
                    height: Card_Height,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View
                style={{position: 'absolute', top: Card_Height - 40, left: 18}}>
                <Text
                  style={{
                    fontSize: sizes.h3,
                    fontWeight: '300',
                    color: colors.mainColor,
                  }}>
                  {item.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default TopSell;
