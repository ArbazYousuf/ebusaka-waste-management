import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {View, Text, Icon, Row, ListItem, Body} from 'native-base';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import PhoneInput from 'react-native-phone-number-input';
import {Form, Item, Input, Label, CheckBox} from 'native-base';
import {FONTS, icons, images, theme} from '../constants';
import CustomTextInput from '../components/CustomTextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomSignIn from '../components/customSignIn';
import {useSelector, useDispatch} from 'react-redux';
import ToastError from '../utils/toastErr';
import {AsyncRegister} from '../redux/actions/asyncAuth';
import moment from 'moment';

export default function Registration({navigation}) {
  const [nonActiveColor, setactiveColor] = useState(theme.COLORS.lightGray);
  const [phone, setphone] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [dateSelected, setdateSelected] = useState(false);

  const [onActive, setOnActive] = useState({
    name: false,
    email: false,
    phone: false,
    dob: false,
  });
  const [isShowModal, setisShowModal] = useState(false);
  const phoneInput = useRef(null);
  const [date, setDate] = useState(new Date(1598051730000));
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.Auth);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  console.warn('state----', Auth);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setdateSelected(true);
  };

  const onFocus = () => {
    setOnActive((prev) => {
      return {...prev, phone: true};
    });
  };

  const onSubmitRegister = () => {
    // navigation.navigate('Home');
    const isValid = phoneInput.current.isValidNumber(phone);
    const countryCode = phoneInput.current.getCallingCode();

    console.log('countryCode', countryCode);

    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //email

    if (reg.test(email) && isValid) {
      let obj = {
        data: {
          phone: `+${countryCode}${phone}`,
          fullname: name,
          email,
          dob: moment(date).format('MM/DD/YYYY'),
        },
        nav: {
          ...navigation,
        },
      };
      console.warn('pass');
      dispatch(AsyncRegister(obj));
    } else {
      if (!reg.test(email)) {
        ToastError('Invalid Email');
      } else if (!isValid) {
        ToastError('Invalid Number');
      }
    }

    if (phone) {
      if (reg.test(phone)) {
        dispatch(AsyncLogin({phone}));
      } else {
        ToastError('Invalid Number');
      }
    } else {
      ToastError('Please Input Number');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.backColor}}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View
            style={{
              flex: 0.4,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'yellow',
            }}>
            <Image
              resizeMode="cover"
              source={images.register_header}
              style={{width: RFPercentage(60), height: RFValue(200)}}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={[FONTS.h2]}>Getting Started</Text>
              <Text style={[FONTS.p]}>Create an Account to Continue</Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.8,
              justifyContent: 'flex-start',
              alignItems: 'center',
              // backgroundColor: 'red',
              marginTop: RFPercentage(5),
            }}>
            <Form>
              <View>
                <Text
                  style={[
                    FONTS.h4,
                    {
                      color: onActive.name
                        ? theme.COLORS.primary
                        : nonActiveColor,

                      nonActiveColor,
                      paddingBottom: RFValue(5),
                    },
                  ]}>
                  Full Name
                </Text>

                <CustomTextInput
                  placeholder="Full Name"
                  inputType="default"
                  icon="user"
                  iconType="Entypo"
                  iconColor={theme.COLORS.lightGray}
                  onChangeText={(text) => setname(text)}
                  onFocus={() =>
                    setOnActive((prev) => {
                      return {...prev, name: true};
                    })
                  }
                  onBlur={() =>
                    setOnActive((prev) => {
                      return {...prev, name: false};
                    })
                  }
                  activeColor={onActive.name ? theme.COLORS.primary : null}
                />
              </View>
              {/* ----------- */}
              <View>
                <Text
                  style={[
                    FONTS.h4,
                    {
                      color: onActive.email
                        ? theme.COLORS.primary
                        : nonActiveColor,
                      paddingBottom: RFValue(5),
                    },
                  ]}>
                  Email
                </Text>

                <CustomTextInput
                  placeholder="Please Write Here"
                  inputType="default"
                  icon="email"
                  iconType="MaterialIcons"
                  iconColor={theme.COLORS.lightGray}
                  onChangeText={(text) => setemail(text)}
                  onFocus={() =>
                    setOnActive((prev) => {
                      return {...prev, email: true};
                    })
                  }
                  onBlur={() =>
                    setOnActive((prev) => {
                      return {...prev, email: false};
                    })
                  }
                  activeColor={onActive.email ? theme.COLORS.primary : null}
                />
              </View>

              {/* ----------- */}
              <View>
                <Text
                  style={[
                    FONTS.h4,
                    {
                      color: onActive.phone
                        ? theme.COLORS.primary
                        : nonActiveColor,
                      paddingBottom: RFValue(5),
                    },
                  ]}>
                  Phone Number
                </Text>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={phone}
                  value={phone}
                  defaultCode="ZM"
                  textInputProps={{
                    onFocus: () => {
                      setOnActive((prev) => {
                        return {...prev, phone: true};
                      });
                    },
                    onBlur: () => {
                      setOnActive((prev) => {
                        return {...prev, phone: false};
                      });
                    },
                  }}
                  onChangeText={(text) => {
                    setphone(text);
                  }}
                  textInputStyle={{
                    fontSize: 16,
                    color: '#000000',
                    flex: 1,
                    height: 40,
                  }}
                  onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                  }}
                  containerStyle={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: RFValue(10),
                    borderWidth: 1,
                    borderColor: onActive.phone
                      ? theme.COLORS.primary
                      : theme.COLORS.lightGray,
                    width: RFValue(320),
                    height: RFValue(50),
                    marginBottom: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  textContainerStyle={styles.textContainerStyle}
                />
              </View>

              {/* ----------- */}
              <View>
                <Text
                  style={[
                    FONTS.h4,
                    {
                      color: show ? theme.COLORS.primary : nonActiveColor,
                      paddingBottom: RFValue(5),
                    },
                  ]}>
                  Date of Birth
                </Text>
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  style={{
                    borderColor: show
                      ? theme.COLORS.primary
                      : theme.COLORS.lightGray,
                    backgroundColor: '#FFFFFF',
                    borderRadius: RFValue(10),
                    borderWidth: 1,
                    width: RFValue(320),
                    height: RFValue(50),
                    marginBottom: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: RFValue(10),
                  }}>
                  <Icon
                    name="calendar"
                    type="AntDesign"
                    style={{
                      color: show ? theme.COLORS.primary : nonActiveColor,
                    }}
                  />

                  <Text
                    style={{
                      fontSize: RFValue(11),
                      color: show ? theme.COLORS.primary : nonActiveColor,
                      paddingLeft: RFValue(10),
                    }}>
                    {dateSelected
                      ? moment(date).format('MMMM Do YYYY')
                      : 'Date of Birth'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <CustomButton
                  color={theme.COLORS.primary}
                  onPress={onSubmitRegister}>
                  Get Started
                </CustomButton>
              </View>
            </Form>
            {/* -----------Form Tag End----------- */}

            {show && (
              <DateTimePicker
                style={{
                  backgroundColor: theme.COLORS.primary,
                  color: theme.COLORS.primary,
                }}
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </KeyboardAvoidingView>
        <View style={{flex: 0.2}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingTop: RFValue(20),
              alignItems: 'center',
              paddingBottom: RFValue(10),
            }}>
            <View
              style={{
                borderColor: theme.COLORS.lightGray,
                borderWidth: 1,
                height: 0,
                width: RFValue(80),
              }}></View>
            <Text style={[FONTS.p, {color: theme.COLORS.lightGray}]}>
              Or With Social Account
            </Text>

            <View
              style={{
                borderColor: theme.COLORS.lightGray,
                borderWidth: 1,
                height: 0,
                width: RFValue(80),
              }}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <CustomSignIn
              invisisble={true}
              icon={icons.google}
              color={theme.COLORS.black}>
              Login with Google
            </CustomSignIn>
            <CustomSignIn
              icon={icons.fb}
              invisisble={true}
              color={theme.COLORS.black}>
              Login with Facebook
            </CustomSignIn>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: RFValue(100),
            }}>
            <Text>
              Have an Account?
              <Text style={[FONTS.p, {color: theme.COLORS.primary}]}>
                {' '}
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainerStyle: {
    height: 40,
    backgroundColor: theme.COLORS.white,
  },
  containerStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: RFValue(10),
    borderWidth: 1,
    borderColor: theme.COLORS.lightGray,
    width: RFValue(320),
    height: RFValue(50),
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
