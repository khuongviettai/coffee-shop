import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import MainHeader from '../components/Header/MainHeader';
import TitleHeader from '../components/Header/TitleHeader';
import MenuSlider from '../components/Home/MenuSlider';
import {Top_Sell, POPULAR} from '../data';
import SectionHeader from '../components/Header/SectionHeader';
import PopularList from '../components/Home/PopularList';
import {colors} from '../constants/theme';
import HomeSwiper from '../components/Home/HomeSwiper';
import {SWIPER} from '../data/swiper';
import instance from '../instance/instance';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance
      .get('/api/products')
      .then(({data}) => {
        setProducts(data);
      })
      .catch(error => console.log(error));
  }, []);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.bodyColor}}>
      <MainHeader title="V&T Coffee" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeSwiper list={SWIPER} />
        <TitleHeader mainTitle="Gợi ý" secondTitle="cho bạn" />
        <MenuSlider list={Top_Sell} />
        {POPULAR.length > 0 ? (
          <SectionHeader
            title="Phổ biến"
            // buttonTitle="More"
            // onPress={() => {
            //   navigation.navigate('ProductNavigator');
            // }}
          />
        ) : null}

        <PopularList list={products} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
