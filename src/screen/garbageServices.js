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
import {FONTS, theme} from '../constants';
import Subscription from './subscription';
import SpecialPickUp from './specialPickUp';
import {ScrollView} from 'react-native-gesture-handler';

const GarbageServices = ({onChange, navigation, route}) => {
  const [active, setactive] = useState('sub');
  const [sub, setsub] = useState(true);
  const [special, setspecial] = useState(false);

  //   onChange = () => {
  //     return active;
  //   };

  const activeStyle = {
    paddingBottom: RFValue(5),
    fontFamily: 'Roboto-Bold',
    fontSize: RFValue(15),
    color: theme.COLORS.primary,
  };

  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
      <View
        style={{
          overflow: 'hidden',
          paddingBottom: 5,
          justifyContent: 'center',
        }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View
          style={{
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 5,
            paddingTop: RFValue(20),
            height: RFValue(120),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingTop: RFValue(15),
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="left"
                type="AntDesign"
                style={{fontSize: RFValue(18), paddingLeft: RFValue(10)}}
              />
            </TouchableOpacity>
            <Text
              style={[
                {
                  paddingHorizontal: RFValue(5),
                  fontFamily: 'Roboto-Bold',
                  fontSize: RFValue(25),
                },
              ]}>
              Garbage Services
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              flex: 1,
              paddingHorizontal: RFValue(20),
            }}>
            <TouchableOpacity
              onPress={() => {
                setspecial(false);
                setsub(true);
              }}
              style={{paddingHorizontal: RFValue(5), alignItems: 'center'}}>
              <Text
                style={[
                  sub
                    ? activeStyle
                    : {
                        paddingBottom: RFValue(5),
                        fontFamily: 'Roboto-Medium',
                      },
                ]}>
                Subscription
              </Text>
              {sub && (
                <View
                  style={{
                    borderBottomColor: theme.COLORS.primary,
                    borderBottomWidth: 2,
                    backgroundColor: theme.COLORS.primary,
                    width: RFValue(70),
                  }}></View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setspecial(true);
                setsub(false);
              }}
              style={{paddingHorizontal: RFValue(5), alignItems: 'center'}}>
              <Text
                style={[
                  special
                    ? activeStyle
                    : {paddingBottom: RFValue(5), fontFamily: 'Roboto-Medium'},
                ]}>
                Special Pickup
              </Text>
              {special && (
                <View
                  style={{
                    borderBottomColor: theme.COLORS.primary,
                    borderBottomWidth: 2,
                    backgroundColor: theme.COLORS.primary,
                    width: RFValue(70),
                  }}></View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {sub && <Subscription navigation={navigation} route={route} />}
      {special && <SpecialPickUp navigation={navigation} route={route} />}
    </ScrollView>
  );
};

export default GarbageServices;
