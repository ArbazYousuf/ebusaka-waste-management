import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';

export default function Splash() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/appLogo.png')}
          resizeMode="contain"
          style={{
            flex: 1,
            width: RFValue(200),
            height: RFValue(200),
          }}
        />
      </View>
    </SafeAreaView>
  );
}
