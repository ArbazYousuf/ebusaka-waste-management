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
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {theme, FONTS, SIZES, images, icons} from '../constants';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

export default function ForgotPassword() {
  const [isVisible, setIsVisible] = useState(true);
  const [passwordIcon, setpasswordIcon] = useState('eye');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.backColor}}>
      <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={1}>
        <View
          style={{
            flex: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              borderColor: theme.COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.app_logo}
              resizeMode="contain"
              style={{
                width: RFValue(100),
                height: RFValue(100),
              }}
            />
            <Text
              style={[
                FONTS.h2,
                {paddingTop: RFValue(20), paddingBottom: RFValue(10)},
              ]}>
              Forgot Password?
            </Text>
            <Text
              style={[
                FONTS.p,
                {
                  color: theme.COLORS.gray,
                },
              ]}>
              Enter your email to recover your password
            </Text>

            <Form style={{marginTop: RFValue(20)}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomTextInput
                  onChangeText={(e) => {
                    console.log('e', e);
                  }}
                  placeholder={'Email'}
                />
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <CustomButton
                  color={theme.COLORS.primary}
                  onPress={() => navigation.navigate('Home')}>
                  Reset Password
                </CustomButton>
              </View>
            </Form>

            <TouchableOpacity
              // onPress={() => navigation.navigate('Registration')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: RFValue(20),
              }}>
              <Text style={[FONTS.p, {color: 'grey'}]}>
                Don't Have an Account?{' '}
                <Text style={[FONTS.p, {color: theme.COLORS.primary}]}>
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
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
