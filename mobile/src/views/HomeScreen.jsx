import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopSell from "../components/TopSell";
import {Top_Sell} from "../data";

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fbfbfb'}}>
      <MainHeader />
      <ScreenHeader mainTitle="Gợi ý" secondTitle="cho bạn" />
        <ScrollView showsVerticalScrollIndicator={false}>
            <TopSell list={Top_Sell} />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
