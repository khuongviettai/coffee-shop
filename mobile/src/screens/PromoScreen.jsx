import React from 'react';
import {View} from 'react-native';
import PromoItem from '../components/Promo/PromoItem';
import {UUDAI} from '../data/uudai';
import MainHeader from '../components/Header/MainHeader';

const PromoScreen = () => {
  return (
    <View>
      <MainHeader title="Ưu đãi" />
      <PromoItem list={UUDAI} />
    </View>
  );
};

export default PromoScreen;
