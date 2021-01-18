import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import {Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {useSelector, useDispatch} from 'react-redux';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {images, theme, FONTS} from '../constants';
import ToastError from '../utils/toastErr';
import {AsyncVerifyOtp} from '../redux/actions/asyncAuth';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 60},
  title: {textAlign: 'center', fontSize: 30},
  //   codeFieldRoot: {marginTop: 20},
  cell: {
    width: RFValue(50),
    height: RFValue(50),
    // lineHeight: 38,
    fontSize: RFValue(20),
    borderWidth: 2,
    // borderColor: theme.COLORS.primary,
    borderRadius: 5,
    textAlign: 'center',
    paddingTop: RFValue(10),
    borderColor: theme.COLORS.lightGray,
  },
  focusCell: {
    borderColor: theme.COLORS.primary,
  },
});

const CELL_COUNT = 4;

const OTP = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const Auth = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  const onProceed = () => {
    if (Auth?.user?.otp == value) {
      let obj = {
        token: Auth?.user?.token,
        nav: navigation,
      };
      dispatch(AsyncVerifyOtp(obj));
    } else {
      ToastError('Invalid OTP');
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
          //   backgroundColor: 'red',
        }}>
        <Image
          resizeMode="contain"
          source={images.sms}
          style={{width: 200, height: 200}}
        />
      </View>
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[FONTS.h1, {paddingBottom: RFValue(5)}]}>Enter OTP</Text>
        <Text
          style={[FONTS.p, {color: theme.COLORS.gray, textAlign: 'center'}]}>
          We have send you OTP via SMS for Mobile Verification
        </Text>
      </View>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: RFValue(20),
        }}>
        <CustomButton onPress={onProceed} color={theme.COLORS.primary}>
          {Auth.isLoading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            'Proceed'
          )}
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default OTP;
