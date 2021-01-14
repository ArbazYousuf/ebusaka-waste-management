import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  StatusBar,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {Form, Item, Input, Label} from 'native-base';
import {FONTS, icons, images, theme} from '../constants';
import CustomTextInput from '../components/CustomTextInput';
import CustomSignIn from '../components/customSignIn';
import LinearGradient from 'react-native-linear-gradient';
import {selectAuth} from '../redux/slices/auth';
import {useSelector, useDispatch} from 'react-redux';

export default function Login({navigation}) {
  const [isVisible, setIsVisible] = useState(true);
  const [passwordIcon, setpasswordIcon] = useState('eye');
  const [showText, setshowText] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector(selectAuth);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  console.warn(state);

  const _keyboardDidShow = () => {
    setshowText(false);
  };

  const _keyboardDidHide = () => {
    setshowText(true);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.backColor}}>
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
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="padding"
          keyboardVerticalOffset={10}>
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
                placeholder="Phone Number"
                inputType="numeric"
                icon="phone"
                iconType="Entypo"
              />
            </View>
          </View>

          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 0.3}}>
            <CustomButton
              onPress={() => navigation.navigate('Home')}
              color={theme.COLORS.primary}>
              Log In
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
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

{
  /* <View
              style={{
                position: 'absolute',
                height: 150,
                width: 180,
                backgroundColor: theme.COLORS.lightPrimary,
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
                left: -5,
              }}></View>
            <View
              style={{
                height: 200,
                width: 300,
                backgroundColor: theme.COLORS.primary,
                // borderBottomLeftRadius: 150,
                // borderBottomRightRadius: 150,
                borderBottomStartRadius: 280,
                borderBottomEndRadius: 280,
                position: 'absolute',
                left: -170,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={[FONTS.h2, {color: 'white'}]}>ebusaka</Text>
            </View> */
}
