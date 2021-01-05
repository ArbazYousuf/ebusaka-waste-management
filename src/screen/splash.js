import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, Animated, Easing} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import {images} from '../constants';

export default function Splash() {
  const [animatedValue, setanimatedValue] = useState(new Animated.Value(0));

  // useEffect(() => {
  //   Animated.loop(
  //     // Animation consists of a sequence of steps
  //     Animated.sequence([
  //       // start rotation in one direction (only half the time is needed)
  //       Animated.timing(animatedValue, {
  //         toValue: 1.0,
  //         duration: 150,
  //         easing: Easing.linear,
  //         useNativeDriver: true,
  //       }),
  //       // rotate in other direction, to minimum value (= twice the duration of above)
  //       Animated.timing(animatedValue, {
  //         toValue: -1.0,
  //         duration: 300,
  //         easing: Easing.linear,
  //         useNativeDriver: true,
  //       }),
  //       // return to begin position
  //       Animated.timing(animatedValue, {
  //         toValue: 0.0,
  //         duration: 150,
  //         easing: Easing.linear,
  //         useNativeDriver: true,
  //       }),
  //     ]),
  //   ).start();
  // }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Image
          source={require('../assets/appLogo.png')}
          resizeMode="contain"
          style={{
            flex: 1,
            width: RFValue(200),
            height: RFValue(200),
            transform: [
              {
                rotate: animatedValue.interpolate({
                  inputRange: [-1, 1],
                  outputRange: ['-0.1rad', '0.1rad'],
                }),
              },
            ],
          }}
        />
      </View> */}
      <Image
        source={images.splash}
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}
      />
    </SafeAreaView>
  );
}
