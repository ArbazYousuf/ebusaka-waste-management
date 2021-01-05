import React, {useState, useContext} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'native-base';
import {theme, icons} from '../constants';
import Header from '../components/header';
import {AppContext} from '../Context/AppProvider';
export default function User({navigation}) {
  let {car, notification, language, terms, contact, docs} = icons;
  const {isOnline, setisOnline} = useContext(AppContext);

  const container = () => (
    <View
      style={{
        marginTop: RFValue(20),
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: RFValue(20),
      }}>
      {tab('Vehicle Management', 'Vehicle', car)}
      {tab('Document Management', 'Document', docs)}
      {tab('Language', '', language)}
    </View>
  );

  const container2 = () => (
    <View
      style={{
        marginTop: RFValue(20),
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: RFValue(20),
      }}>
      {tab('Notifications', '', notification)}
      {tab('Terms & Privacy Policy', '', terms)}
      {tab('Contact us', '', contact)}
    </View>
  );

  const tab = (text, route, icon) => (
    <TouchableOpacity
      onPress={route ? () => navigation.navigate(route) : () => {}}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image source={icon} style={{width: RFValue(20), height: RFValue(20)}} />
      {/* <Icon
        name="right"
        type="AntDesign"
        style={{color: '#8A8A8F', fontSize: RFValue(15)}}
      /> */}
      <View
        style={{
          flex: 1,
          marginLeft: RFValue(20),
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingVertical: 10,
          borderBottomWidth: RFValue(1),
          borderBottomColor: '#F2F2F2',
        }}>
        <Text style={[theme.FONTS.p, {fontSize: RFValue(17)}]}>{text}</Text>
        <Icon
          name="right"
          type="AntDesign"
          style={{color: '#8A8A8F', fontSize: RFValue(15)}}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Header
        navigation={navigation}
        isOnline={isOnline}
        setisOnline={setisOnline}
        name={'Profile'}
      />
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{
            marginTop: RFValue(20),
            height: RFValue(100),
            width: '100%',
            backgroundColor: 'white',
            padding: RFValue(20),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: RFValue(70),
              height: RFValue(70),
              backgroundColor: theme.COLORS.secondary,
              borderRadius: RFValue(50),
            }}></View>
          <View style={{marginLeft: RFValue(20)}}>
            <Text
              style={[
                theme.FONTS.p,
                {fontSize: RFValue(20), paddingTop: RFValue(2)},
              ]}>
              Martha Banks
            </Text>
            <Text
              style={[
                theme.FONTS.p,
                {fontSize: RFValue(15), color: '#8A8A8F'},
              ]}>
              Driver
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Icon
              name="right"
              type="AntDesign"
              style={{color: '#8A8A8F', fontSize: RFValue(15)}}
            />
          </View>
        </TouchableOpacity>
        {container([])}
        {container2()}
      </View>
    </SafeAreaView>
  );
}
