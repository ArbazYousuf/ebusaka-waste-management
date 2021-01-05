import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import {View, Text, Icon, Row, ListItem, Body} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import PhoneInput from 'react-native-phone-number-input';
import {Form, Item, Input, Label, CheckBox} from 'native-base';
import {FONTS, theme} from '../constants';
import CustomTextInput from '../components/CustomTextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomCheckBox from '../components/CustomCheckBox';
export default function Registration({navigation}) {
  const [isVisible, setIsVisible] = useState(true);
  const [passwordIcon, setpasswordIcon] = useState('eye');
  const [isShow, setisShow] = useState(true);
  const [fNameColor, setfNameColor] = useState('grey');
  const [lNameColor, setlNameColor] = useState('grey');
  const [passColor, setpassColor] = useState('grey');
  const [emailColor, setemailColor] = useState('grey');
  const [phoneColor, setphoneColor] = useState('grey');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  //   const phoneInput = useRef < PhoneInput > null;
  const [isShowModal, setisShowModal] = useState(false);
  const phoneInput = useRef(null);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isChecked, setisChecked] = useState(false);

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
  console.warn('value', value);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.backColor}}>
      <StatusBar backgroundColor={theme.COLORS.primary} />
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={FONTS.h2}>Create New Account</Text>
          <Text style={FONTS.p}>Create an account to continue!</Text>
        </View>
        <View style={{flex: 0.9}}>
          <Form>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: RFValue(20),
              }}>
              <CustomTextInput placeholder="First Name" />
              <CustomTextInput placeholder="Last Name" />
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                value={value}
                defaultCode="ZM"
                onChangeText={(text) => {
                  setValue(text);
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
                containerStyle={styles.containerStyle}
                textContainerStyle={styles.textContainerStyle}
              />

              <CustomTextInput placeholder="Email Address" />

              {/* <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  const checkValid = phoneInput.current?.isValidNumber(value);
                  setShowMessage(true);
                  setValid(checkValid ? checkValid : false);
                }}>
                <Text>Check</Text>
              </TouchableOpacity> */}

              <CustomTextInput placeholder="Password" password={isShow} />

              <TouchableOpacity
                onPress={() => setShow(true)}
                style={{
                  borderBottomColor: '#F5FCFF',
                  backgroundColor: '#FFFFFF',
                  borderRadius: RFValue(10),
                  borderBottomWidth: 1,
                  width: RFValue(320),
                  height: RFValue(40),
                  marginBottom: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: RFValue(10),
                }}>
                <Text style={{fontSize: RFValue(11)}}>Date of Birth</Text>
                <Icon name="calendar" type="AntDesign" />
              </TouchableOpacity>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                {/* <ListItem>
                  <CheckBox checked={true} />
                  <Body>
                    <Text>Daily Stand Up</Text>
                  </Body>
                </ListItem> */}
                <TouchableOpacity
                  onPress={() => setisChecked(!isChecked)}
                  style={{paddingLeft: RFValue(10)}}
                  // style={{marginBottom: RFValue(10)}}
                >
                  {/* <CheckBox
                    checked={isChecked}
                    style={
                      {
                        // backgroundColor: theme.COLORS.primary,
                      }
                    }
                    color={theme.COLORS.primary}
                  /> */}
                  <CustomCheckBox isChecked={true} />
                </TouchableOpacity>
                <Text style={[FONTS.p, {textAlign: 'center'}]}>
                  By creating an account, you agree to our Term and Conditions
                </Text>
              </View>
              <CustomButton
                color={theme.COLORS.primary}
                onPress={() => {
                  setisShowModal(true);
                  setTimeout(() => {
                    setisShowModal(false);
                  }, 3000);
                }}>
                Create account
              </CustomButton>
            </View>
          </Form>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              padding: RFValue(15),
              paddingHorizontal: RFValue(30),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[FONTS.p]}>
              Already have an account ?{' '}
              <Text style={[FONTS.p, {color: theme.COLORS.primary}]}>
                Sign in
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            style={{
              backgroundColor: theme.COLORS.primary,
              color: theme.COLORS.primary,
            }}
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </ScrollView>
      {/* <Loader modalVisible={isShowModal} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainerStyle: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: RFValue(10),
    borderBottomWidth: 1,
    // width: RFValue(300),
    height: RFValue(70),
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    // alignSelf: 'center',
  },
  containerStyle: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: RFValue(10),
    borderBottomWidth: 1,
    width: RFValue(320),
    height: RFValue(70),
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
