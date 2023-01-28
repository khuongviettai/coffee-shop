import React from 'react';
import {View} from 'react-native';
import PromoItem from '../components/Promo/PromoItem';
import {UUDAI} from '../data/uudai';
import SubHeader from '../components/Header/SubHeader';

const PromoScreen = () => {
  return (
    <View>
      <SubHeader subTitle="Ưu đãi" />
      <PromoItem list={UUDAI} />
    </View>
  );
};

export default PromoScreen;
