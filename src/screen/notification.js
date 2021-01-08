import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import {theme} from '../constants';

function Notification() {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          padding: RFValue(20),
        }}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: RFValue(18), fontWeight: 'bold'}}>
            Notification
          </Text>
        </View>
      </View>
      <Text style={[theme.FONTS.h3, {margin: RFValue(20)}]}>Today</Text>
      <View
        style={{
          backgroundColor: 'white',
          padding: RFValue(10),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderRadius: RFValue(100),
            width: RFValue(50),
            height: RFValue(50),
            backgroundColor: theme.COLORS.primary,
            borderWidth: 2,
            marginLeft: RFValue(10),
          }}></View>
        <View style={{marginLeft: RFValue(10), width: RFValue(225)}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <Text style={{fontFamily: 'Roboto-Bold', fontSize: RFValue(13)}}>
              Your garbage{' '}
            </Text>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: RFValue(13)}}>
              has been collected by{' '}
            </Text>
            <Text style={{fontFamily: 'Roboto-Bold', fontSize: RFValue(13)}}>
              John{' '}
            </Text>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: RFValue(13)}}>
              of{' '}
            </Text>
            <Text style={{fontFamily: 'Roboto-Bold', fontSize: RFValue(13)}}>
              Clean care solution{' '}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: RFValue(11),
              color: '#707070',
            }}>
            02 hours Ago
          </Text>
        </View>
        <Icon
          style={{fontSize: RFValue(20), color: '#707070', marginLeft: 10}}
          name="options"
          type="SimpleLineIcons"
        />
      </View>
    </SafeAreaView>
  );
}

export default Notification;
