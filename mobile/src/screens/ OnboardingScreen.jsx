import React, {useRef, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {ONBOARDING} from '../data/onboarding';
import Onboarding from '../components/ Onboarding/Onboarding';
import OnboardingFooter from '../components/ Onboarding/OnboardingFooter';
import {colors} from '../constants/config';

const windowWidth = Dimensions.get('window').width;
const OnboardingScreen = () => {
  const [currentSate, setCurrentState] = useState(0);
  const ref = useRef(null);
  const updateCurrentState = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentSate = Math.round(contentOffsetX / windowWidth);
    setCurrentState(currentSate);
  };
  const nextSlider = () => {
    const nextSliderState = currentSate + 1;
    if (nextSliderState != ONBOARDING.length) {
      const offset = nextSliderState * windowWidth;
      ref?.current?.scrollToOffset({offset});
      setCurrentState(nextSliderState);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.lightGray}}>
      <Onboarding
        list={ONBOARDING}
        updateCurrentState={updateCurrentState}
        ref={ref}
      />
      <OnboardingFooter
        list={ONBOARDING}
        currentSate={currentSate}
        nextSlider={nextSlider}
      />
    </View>
  );
};

export default OnboardingScreen;
