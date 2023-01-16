import React, {useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const OnboardingFooter = ({list}) => {
  const [currentSate, setCurrentState] = useState(0);
  const updateCurrentState = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentSate = Math.round(contentOffsetX / windowWidth);
    setCurrentState(currentSate);
  };
  return (
    <View
      style={{
        height: windowHeight * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        {list.map((item, index) => {
          return (
            <View
              style={[
                {
                  height: 2.5,
                  width: 10,
                  backgroundColor: 'gray',
                  marginHorizontal: 3,
                  borderRadius: 2,
                },
                currentSate == index && {
                  backgroundColor: 'white',
                  width: 25,
                },
              ]}
              key={index}></View>
          );
        })}
      </View>
      <View style={{marginBottom: 50}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: 'white',
            }}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>SKIP</Text>
          </TouchableOpacity>
          <View style={{width: 15}} />
          <TouchableOpacity
            style={{
              flex: 1,
              height: 50,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold'}}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnboardingFooter;
