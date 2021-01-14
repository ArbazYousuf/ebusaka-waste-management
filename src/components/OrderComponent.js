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

export default function OrderComponent() {
  return (
    <View style={{marginTop: RFValue(20)}}>
      <View
        style={{
          width: '90%',
          height: RFValue(90),
          borderRadius: RFValue(7),
          backgroundColor: 'white',
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 4,
        }}>
        <View
          style={{
            backgroundColor: 'blue',
            margin: RFValue(15),
            width: RFValue(60),
            borderRadius: RFValue(10),
          }}></View>
        <View style={{marginTop: RFValue(12), flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: RFValue(13), fontFamily: 'Roboto-Bold'}}>
              Company Name
            </Text>
            <Text
              style={{
                fontSize: RFValue(13),
                fontWeight: 'bold',
                marginRight: RFValue(20),
                color: '#70A12F',
                fontFamily: 'Roboto-Bold',
              }}>
              $40.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: RFValue(10),
              marginLeft: RFValue(-5),
              alignItems: 'center',
            }}>
            <Icon
              style={{fontSize: RFValue(15), color: '#707070'}}
              type="EvilIcons"
              name="location"
            />
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: 'Roboto-Regular',
                color: '#707070',
              }}>
              Address of the company
            </Text>
            <Icon
              style={{fontSize: RFValue(15), color: '#707070'}}
              type="EvilIcons"
              name="location"
            />
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: 'Roboto-Regular',
                color: '#707070',
              }}>
              Visa Card
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: RFValue(5),
              marginLeft: RFValue(-5),
            }}>
            <Icon
              style={{fontSize: RFValue(15), color: '#707070'}}
              type="EvilIcons"
              name="location"
            />
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: 'Roboto-Regular',
                color: '#707070',
              }}>
              120 Bags
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
