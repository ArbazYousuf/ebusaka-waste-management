import React, {useState, useContext} from 'react';
import {Image, TouchableOpacity, ScrollView} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import Header from '../components/header';
import {FlatList} from 'react-native-gesture-handler';
import {icons, theme} from '../constants';
import {AppContext} from '../Context/AppProvider';

function Card() {
  return (
    <View
      style={{
        // width: '100%',
        backgroundColor: theme.COLORS.white,
        height: RFValue(200),
        borderRadius: RFValue(10),
        marginBottom: RFValue(20),
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 0.3,
          padding: RFValue(10),
          borderRadius: RFValue(50),
          justifyContent: 'center',
        }}>
        <View>
          <Image
            resizeMode="contain"
            source={icons.avatar}
            style={{width: RFValue(100), height: RFValue(160)}}
          />
          <Text>Identification cards</Text>
        </View>
      </View>
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <View
          style={{
            backgroundColor: '#F1F2F6',
            width: RFValue(230),
            // height: 150,
            borderRadius: 20,
            justifyContent: 'center',
            padding: RFValue(10),
          }}>
          <Text>test user</Text>
          <Text>22 33 44</Text>
          <Text>city</Text>
        </View>
      </View>
    </View>
  );
}

export default function Document({navigation}) {
  const {isOnline, setisOnline} = useContext(AppContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        navigation={navigation}
        isOnline={isOnline}
        setisOnline={setisOnline}
        name={'Document'}
      />
      <ScrollView style={{marginTop: RFValue(20)}}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={() => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('EditDocument')}>
                <Card />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
