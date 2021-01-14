import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import DestinationSearch from '../components/DestinationSearch';
import {FONTS, theme} from '../constants';
import OrderComponent from '../components/OrderComponent';

export default function OrderHistory({navigation}) {
  const [active, setactive] = useState('sub');
  const [activeSub, setactiveSub] = useState(true);
  const [pastSub, setpastSub] = useState(false);

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
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 0.2,
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
              Order History
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
                setactiveSub(true);
                setpastSub(false);
              }}
              style={{paddingHorizontal: RFValue(5), alignItems: 'center'}}>
              <Text
                style={[
                  activeSub
                    ? activeStyle
                    : {
                        paddingBottom: RFValue(5),
                        fontFamily: 'Roboto-Medium',
                      },
                ]}>
                Avtive Subscription
              </Text>
              {activeSub && (
                <View
                  style={{
                    borderBottomColor: theme.COLORS.primary,
                    borderBottomWidth: 2,
                    backgroundColor: theme.COLORS.primary,
                    width: RFValue(100),
                    alignSelf: 'center',
                  }}></View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setactiveSub(false);
                setpastSub(true);
              }}
              style={{paddingHorizontal: RFValue(5), alignItems: 'center'}}>
              <Text
                style={[
                  pastSub
                    ? activeStyle
                    : {paddingBottom: RFValue(5), fontFamily: 'Roboto-Medium'},
                ]}>
                Past Subscription
              </Text>
              {pastSub && (
                <View
                  style={{
                    alignSelf: 'center',
                    borderBottomColor: theme.COLORS.primary,
                    borderBottomWidth: 2,
                    backgroundColor: theme.COLORS.primary,
                    width: RFValue(100),
                  }}></View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: theme.COLORS.backColor}}>
        <FlatList
          data={[1, 2, 3, 5]}
          renderItem={() => (
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <OrderComponent />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
