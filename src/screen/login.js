import React, {useState, useEffect, useContext} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {View, Text, Icon, Row, Toast} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {FONTS, icons, images, theme} from '../constants';
import CustomTextInput from '../components/CustomTextInput';
import CustomSignIn from '../components/customSignIn';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import {AsyncLogin} from '../redux/actions/asyncAuth';
import ToastError from '../utils/toastErr';
import {AppContext} from '../Context/AppProvider';

export default function Login({navigation}) {
  const [isVisible, setIsVisible] = useState(true);
  const [passwordIcon, setpasswordIcon] = useState('eye');
  const [showText, setshowText] = useState(true);
  const [phone, setphone] = useState(null);
  const [onActive, setOnActive] = useState(false);

  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.Auth);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setshowText(false);
  };

  const _keyboardDidHide = () => {
    setshowText(true);
  };
  console.warn('---statee----', Auth);

  const onSubmitLogin = () => {
    // navigation.navigate('Home');

    console.warn('---statee----login', Auth);

    let reg = /^[0]?[+92]\d{12}$/;
    if (phone) {
      if (reg.test(phone)) {
        let obj = {
          phone,
          nav: navigation,
        };
        dispatch(AsyncLogin(obj));
      } else {
        ToastError('Invalid Number');
      }
    } else {
      ToastError('Please Input Number');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.backColor}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="height"
        keyboardVerticalOffset={-100}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        {/* <StatusBar backgroundColor={theme.COLORS.primary} /> */}
        <View
          style={{
            flex: 0.2,
            borderColor: theme.COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'yellow',
            marginBottom: RFValue(20),
          }}>
          <Image
            source={images.login_header}
            resizeMode="contain"
            style={{
              // flex: 1,
              height: RFValue(340),
              width: RFValue(340),
              // marginTop: RFValue(-20),
              // alignSelf: 'flex-start',
              // marginRight: RFValue(60),
            }}
          />
        </View>

        <View style={{flex: 0.8}}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 0.2}}>
            <Text style={[FONTS.h1, {}]}>Welcome Back</Text>
            <Text style={[FONTS.p]}>Please Login to Continue</Text>
          </View>
          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
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

          <View
            style={{
              flex: 0.2,
              // justifyContent: 'space-around',
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
                // height: 40,
                // backgroundColor: 'red',
              }}></View>
            <Text style={[FONTS.p, {color: theme.COLORS.lightGray}]}>
              Or With Mobile Number
            </Text>

            <View
              style={{
                borderColor: theme.COLORS.lightGray,
                borderWidth: 1,
                height: 0,
                width: RFValue(80),
                // height: 40,
                // backgroundColor: 'red',
              }}
            />
          </View>

          <View
            style={{
              flex: 0.1,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: RFValue(5),
            }}>
            <View>
              <Text
                style={[
                  FONTS.h4,
                  {color: theme.COLORS.gray, paddingBottom: RFValue(10)},
                ]}>
                Phone Number
              </Text>
              <CustomTextInput
                defaultValue="+"
                placeholder="Phone Number"
                inputType="numeric"
                icon="phone"
                iconType="Entypo"
                iconColor={theme.COLORS.lightGray}
                onChangeText={(text) => setphone(text)}
                onFocus={() => {
                  setOnActive(true);
                }}
                onBlur={() => {
                  setOnActive(false);
                }}
                activeColor={onActive ? theme.COLORS.primary : null}
              />
            </View>
          </View>

          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 0.3}}>
            <CustomButton onPress={onSubmitLogin} color={theme.COLORS.primary}>
              {Auth.isLoading ? (
                <ActivityIndicator color="white" size="small" />
              ) : (
                'Log In'
              )}
            </CustomButton>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registration')}
            style={{justifyContent: 'center', alignItems: 'center', flex: 0.1}}>
            <Text>
              Don't Have an Account?
              <Text style={[FONTS.p, {color: theme.COLORS.primary}]}>
                {' '}
                Signup
              </Text>
            </Text>
          </TouchableOpacity>
          {/* {showText ? (
              <View style={{flex: 0.1}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Registration')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={[FONTS.p, {color: 'grey'}]}>
                    Don't Have an Account?{' '}
                    <Text style={[FONTS.p, {color: theme.COLORS.primary}]}>
                      Sign Up
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null} */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
