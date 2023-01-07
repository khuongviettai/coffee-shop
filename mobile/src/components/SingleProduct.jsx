import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import leftChevron from '../../assets/icon/left-chevron.png';
import maple from '../../assets/image/maple.png';
import benches from '../../assets/image/benches.png';
import tree from '../../assets/image/tree.png';

const images = [maple, benches, tree];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default SingleProduct = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <StatusBar barStyle={'light-content'} />
      <View style={{width: '100%', height: '35%'}}>
        <HeaderProduct />
      </View>
    </View>
  );
};

const HeaderProduct = () => {
  const [imgActive, setImgActive] = useState(0);
  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{width: windowWidth, height: windowHeight * 0.25}}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={{
            width: windowWidth,
            height: windowHeight * 0.25,
          }}>
          {images.map((item, index) => (
            <Image
              key={item}
              resizeMode="stretch"
              style={{
                width: windowWidth,
                height: windowHeight * 0.25,
              }}
              source={maple}
            />
          ))}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotActive: {
    margin: 3,
    color: '#FA4A0C',
  },
  dot: {
    margin: 3,
    color: '#C4C4C4',
  },
});
