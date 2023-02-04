import React from 'react';
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

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.bodyColor}}>
      <MainHeader title="V&T Coffee" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeSwiper list={SWIPER} />
        <TitleHeader mainTitle="Gợi ý" secondTitle="cho bạn" />
        <MenuSlider list={Top_Sell} />
        <SectionHeader title="Phổ biến" buttonTitle="More" onPress={() => {}} />
        <PopularList list={POPULAR} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
