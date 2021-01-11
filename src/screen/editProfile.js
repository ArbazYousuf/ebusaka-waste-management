import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {FONTS, icons, theme} from '../constants';

const ShowDetails = ({title, value}) => {
  return (
    <TouchableOpacity
      style={{
        margin: RFValue(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[FONTS.p, {paddingLeft: RFValue(15)}]}>{title}</Text>
      </View>

      <Text>{value}</Text>
    </TouchableOpacity>
  );
};

export default function EditProfile() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.ashWhite}}>
      <StatusBar backgroundColor={theme.COLORS.white} barStyle="dark-content" />
      {/* <Text>testing</Text> */}
      <View
        style={{
          //   backgroundColor: 'red',
          flex: 0.2,
          justifyContent: 'center',
          padding: RFValue(10),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={[FONTS.h3]}>Lennon Austin</Text>
            <Text>admin@demo.com</Text>
          </View>
          <View
            style={{
              backgroundColor: 'yellow',
              width: RFValue(50),
              height: RFValue(50),
              borderRadius: RFValue(25),
            }}></View>
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: 'yellow',
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          padding: RFValue(10),
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: RFValue(350),
            height: RFValue(250),
            borderRadius: RFValue(20),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: RFValue(20),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="user" type="FontAwesome" />
              <Text
                style={[
                  FONTS.h3,
                  {padding: RFValue(5), paddingHorizontal: RFValue(19)},
                ]}>
                Personal Information
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={[
                  FONTS.p,
                  {color: theme.COLORS.primary, padding: RFValue(10)},
                ]}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>

          {[
            ...Array(
              {
                title: 'Full Name',
                value: 'Lennon Austin',
              },
              {
                title: 'Email Address',
                value: 'admin@demo.com',
              },
              {
                title: 'Mobile No',
                value: '+923154693818',
              },
              {
                title: 'Home Address',
                value: '+923154693818',
              },
            ),
          ].map((val) => {
            return <ShowDetails {...val} />;
          })}
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: 'green',
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
            width: RFValue(340),
            height: RFValue(60),
            borderRadius: RFValue(20),
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   padding: RFValue(10),
            }}>
            <View style={{flexDirection: 'row', paddingLeft: RFValue(10)}}>
              <Icon name="lock" type="FontAwesome" />
              <Text
                style={[
                  FONTS.h3,
                  {paddingHorizontal: RFValue(15), alignSelf: 'center'},
                ]}>
                Password Change
              </Text>
            </View>
            <TouchableOpacity style={{paddingHorizontal: RFValue(10)}}>
              <Text> Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
