import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import Header from '../components/header';
import CustomTextInput from '../components/CustomTextInput';
import {FONTS, theme} from '../constants';

export default function AddVehicle({navigation}) {
  const [isOnline, setisOnline] = useState(false);
  let inputWidth = 340;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F6FA'}}>
      <Header
        navigation={navigation}
        isOnline={isOnline}
        setisOnline={setisOnline}
        name={'Add Vehicle'}
      />
      <ScrollView>
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={10}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: RFValue(10),
            }}>
            <Text
              style={[
                FONTS.p,
                {
                  color: '#BEC2CE',
                  alignSelf: 'flex-start',
                  padding: 5,
                  marginLeft: RFValue(10),
                },
              ]}>
              Vehicle Brand
            </Text>
            <CustomTextInput cWidth={inputWidth} />
            <Text
              style={[
                FONTS.p,
                {
                  color: '#BEC2CE',
                  alignSelf: 'flex-start',
                  padding: 5,
                  marginLeft: RFValue(5),
                },
              ]}>
              Model
            </Text>
            <CustomTextInput cWidth={inputWidth} />
            <Text
              style={[
                FONTS.p,
                {
                  color: '#BEC2CE',
                  alignSelf: 'flex-start',
                  padding: 5,
                  marginLeft: RFValue(5),
                },
              ]}>
              Year
            </Text>
            <CustomTextInput cWidth={inputWidth} />
            <Text
              style={[
                FONTS.p,
                {
                  color: '#BEC2CE',
                  alignSelf: 'flex-start',
                  padding: 5,
                  marginLeft: RFValue(5),
                },
              ]}>
              License plate
            </Text>
            <CustomTextInput cWidth={inputWidth} />
            <Text
              style={[
                FONTS.p,
                {
                  color: '#BEC2CE',
                  alignSelf: 'flex-start',
                  padding: 5,
                  marginLeft: RFValue(5),
                },
              ]}>
              Color
            </Text>
            <CustomTextInput cWidth={inputWidth} />
            <Text
              style={[
                FONTS.p,
                {
                  color: '#BEC2CE',
                  alignSelf: 'flex-start',
                  padding: 5,
                  marginLeft: RFValue(5),
                },
              ]}>
              Truck type
            </Text>
            <CustomTextInput cWidth={inputWidth} />
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // height: RFValue(50),
            paddingTop: RFValue(20),
          }}>
          <CustomButton size="lg" color={theme.COLORS.primary}>
            Complete
          </CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
