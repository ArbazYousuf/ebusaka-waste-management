import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';

import {Form, Item, Input, Label} from 'native-base';
import {FONTS, icons, images, theme} from '../constants';
import CustomTextInput from '../components/CustomTextInput';
import CustomSignIn from '../components/customSignIn';
export default function Login({navigation}) {
  const [isVisible, setIsVisible] = useState(true);
  const [passwordIcon, setpasswordIcon] = useState('eye');
  const [showText, setshowText] = useState(true);

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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.backColor}}>
      {/* <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={1}> */}

      <View
        style={{
          flex: 0.2,
          borderColor: theme.COLORS.primary,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'yellow',
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
        <View></View>
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

      {/* </KeyboardAvoidingView> */}
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
