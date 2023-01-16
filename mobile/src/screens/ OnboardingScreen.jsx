import React from 'react';
import {View} from 'react-native';
import {ONBOARDING} from '../data/onboarding';
import Onboarding from '../components/ Onboarding/Onboarding';
import OnboardingFooter from '../components/ Onboarding/OnboardingFooter';
import {colors} from '../constants/config';

const OnboardingScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.lightGray}}>
      <Onboarding list={ONBOARDING} />
      <OnboardingFooter list={ONBOARDING} />
    </View>
  );
};

export default OnboardingScreen;
