import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import {images} from '../constants';
import FastImage from 'react-native-fast-image';

export default function OrderComponent({jobinfo}) {
  // console.log('jobinfo', jobinfo);
  return (
    <View style={{marginTop: RFValue(20)}}>
      <View
        style={{
          width: '90%',
          // height: RFValue(90),
          borderRadius: RFValue(7),
          backgroundColor: 'white',
          paddingBottom: RFValue(20),
          flexDirection: 'row',
          // shadowColor: '#000',
          // shadowOffset: {
          //   width: 0,
          //   height: 3,
          // },
          // shadowOpacity: 0.29,
          // shadowRadius: 4.65,

          elevation: 1,
        }}>
        <View
          style={{
            width: RFValue(60),
            borderRadius: RFValue(10),
            margin: RFValue(15),
          }}>
          {jobinfo?.company?.picture ? (
            <FastImage
              source={{uri: jobinfo?.company?.picture}}
              style={{width: undefined, height: undefined, flex: 1}}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={images.emptyImage}
              style={{width: undefined, height: undefined, flex: 1}}
              resizeMode="contain"
            />
          )}
        </View>
        <View style={{marginTop: RFValue(12), flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: RFValue(13), fontFamily: 'Roboto-Bold'}}>
              {jobinfo?.company?.name}
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
                marginRight: RFValue(12),
              }}>
              {jobinfo?.direction?.address ?? 'Location not available'}
            </Text>
            <Icon
              style={{
                fontSize: RFValue(15),
                color: '#707070',
              }}
              type="EvilIcons"
              name="credit-card"
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
              alignItems: 'center',
              // backgroundColor: 'yellow',
            }}>
            <Icon
              style={{
                fontSize: RFValue(15),
                color: '#707070',
                marginRight: RFValue(5),
              }}
              type="SimpleLineIcons"
              name="bag"
            />
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: 'Roboto-Regular',
                color: '#707070',
              }}>
              {jobinfo?.no_of_bags} Bags
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
