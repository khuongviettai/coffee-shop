import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes, spacing} from '../../constants/config';
import AddItem from '../../utils/AddItem';

const CardHeight = 220;
const ProductItem = ({list}) => {
  return (
    <ScrollView>
      {list?.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              marginLeft: spacing.l,
              marginBottom: spacing.l,
              marginRight: spacing.l,
            }}>
            <View>
              <View
                style={{
                  backgroundColor: colors.white,
                  borderRadius: sizes.radius,
                  shadowColor: colors.black,
                  shadowRadius: 4,
                  shadowOpacity: 0.1,
                  shadowOffset: {width: 0, height: 2},
                  marginRight: 0,
                }}>
                <TouchableOpacity
                  style={{
                    borderRadius: sizes.radius,
                    overflow: 'hidden',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      borderRadius: sizes.radius,
                      width: 160,
                      height: CardHeight - 60,
                      resizeMode: 'cover',
                    }}
                    source={{uri: item.image}}
                  />

                  <View style={{marginTop: spacing.l}}>
                    <View
                      style={{marginLeft: spacing.l, marginBottom: spacing.s}}>
                      <Text style={{fontSize: 16, color: '#FA4A0C'}}>
                        {item.title}
                      </Text>
                    </View>
                    <View style={{marginLeft: spacing.l}}>
                      <Text style={{fontSize: 14, color: '#8b8989'}}>
                        {item.price.toLocaleString('vi', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={{
                        width: 30,
                        height: 30,
                        marginLeft: 130,
                        marginRight: 0,
                        marginTop: 40,
                      }}>
                      <AddItem />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ProductItem;
