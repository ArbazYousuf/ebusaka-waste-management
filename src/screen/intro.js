import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {FONTS, images, theme} from '../constants';

export default function Intro({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={images.map}
          style={{width: RFValue(300), height: RFValue(300)}}
        />
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: RFValue(20),
        }}>
        <Text
          style={[FONTS.h1, {textAlign: 'center', marginBottom: RFValue(15)}]}>
          Enable Your Location
        </Text>
        <Text style={[FONTS.p, {textAlign: 'center'}]}>
          Choose your location to start find the request around you.
        </Text>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: RFValue(20),
        }}>
        <CustomButton
          color={theme.COLORS.primary}
          size="lg"
          onPress={() => navigation.navigate('Registration')}>
          SIGN UP
        </CustomButton>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[FONTS.p, {marginTop: RFValue(20)}]}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
