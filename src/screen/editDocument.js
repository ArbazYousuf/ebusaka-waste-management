import React, {useState, useContext} from 'react';
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
import {FlatList} from 'react-native-gesture-handler';
import {FONTS, icons, theme} from '../constants';
import CustomTextInput from '../components/CustomTextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import {AppContext} from '../Context/AppProvider';

function Card() {
  return (
    <View
      style={{
        flex: 1,
        margin: RFValue(7),
        // width: '100%',
        backgroundColor: theme.COLORS.white,
        // height: RFValue(300),
        borderRadius: RFValue(10),
        marginBottom: RFValue(20),
        flexDirection: 'row',
        // justifyContent: 'space-around',
      }}>
      <View
        style={{
          flex: 0.3,
          paddingLeft: RFValue(10),
          //   padding: RFValue(10),
          //   justifyContent: 'center',
          //   borderRadius: RFValue(50),
        }}>
        <View style={{}}>
          <Image
            resizeMode="contain"
            source={icons.avatar}
            style={{
              width: RFValue(100),
              height: RFValue(160),
            }}
          />
        </View>
      </View>
      <View style={{flex: 0.6, justifyContent: 'center', padding: RFValue(10)}}>
        <View
          style={{
            backgroundColor: '#F1F2F6',
            width: RFValue(230),
            height: 200,
            borderRadius: 20,
          }}></View>
        <View style={{height: RFValue(50), justifyContent: 'center'}}>
          <Text
            style={[
              FONTS.h3,
              {alignSelf: 'flex-start', color: theme.COLORS.primary},
            ]}>
            Update photo
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function EditDocument({navigation}) {
  const {isOnline, setisOnline} = useContext(AppContext);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  let inputWidth = 340;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        navigation={navigation}
        isOnline={isOnline}
        setisOnline={setisOnline}
        name={'Document Management'}
      />
      <ScrollView style={{marginTop: RFValue(20)}}>
        {/* <FlatList
          data={[1, 2]}
          renderItem={() => {
            return <Card />;
          }}
        /> */}
        <Card />
        <View style={{alignItems: 'center'}}>
          <Text
            style={[
              FONTS.p,
              {
                color: '#BEC2CE',
                alignSelf: 'flex-start',
                padding: 10,
                marginLeft: RFValue(10),
              },
            ]}>
            Card Number
          </Text>
          <CustomTextInput cWidth={inputWidth} placeholder="1234 567 890" />

          <Text
            style={[
              FONTS.p,
              {
                color: '#BEC2CE',
                alignSelf: 'flex-start',
                padding: 10,
                marginLeft: RFValue(10),
              },
            ]}>
            Expiration Date
          </Text>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{
              borderBottomColor: '#F5FCFF',
              backgroundColor: '#FFFFFF',
              borderRadius: RFValue(10),
              borderBottomWidth: 1,
              width: RFValue(340),
              height: RFValue(40),
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: RFValue(10),
            }}>
            <Text style={{fontSize: RFValue(11)}}>MM/DD/YYYY</Text>
            {/* <Icon name="calendar" type="AntDesign" /> */}
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
