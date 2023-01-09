import React from 'react';
import {View, StyleSheet} from 'react-native';
import MainHeader from '../components/Header/MainHeader';
import TitleHeader from '../components/Header/TitleHeader';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fbfbfb'}}>
      <MainHeader />
      <TitleHeader mainTitle="Gợi ý" secondTitle="cho bạn" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
