import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from './CustomButton';
import {theme} from '../constants';

export default function CustomTextInput({
  placeholder,
  password,
  onChangeText,
  cWidth,
  inputType,
  icon,
  iconType,
  iconColor,
  activeColor,
  onFocus,
  onBlur,
  cBorderRadius,
  cIconPadding,
  defaultValue,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [passwordIcon, setpasswordIcon] = useState('eye');
  const [isShow, setisShow] = useState(true);

  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: cBorderRadius ? RFValue(cBorderRadius) : RFValue(10),
        borderWidth: 1,
        width: cWidth ? RFValue(cWidth) : RFValue(320),
        height: RFValue(50),
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: activeColor ? activeColor : theme.COLORS.lightGray,
        paddingLeft: cIconPadding ? RFValue(cIconPadding) : RFValue(2),
      }}>
      {icon && (
        <Icon
          name={icon}
          type={iconType}
          style={{color: activeColor ? activeColor : iconColor}}
        />
      )}
      <TextInput
        style={{
          height: 45,
          marginLeft: 16,
          borderBottomColor: '#FFFFFF',
          flex: 1,
        }}
        placeholder={placeholder}
        placeholderTextColor={
          activeColor ? activeColor : theme.COLORS.lightGray
        }
        secureTextEntry={password ? true : false}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        keyboardType={inputType}
        onFocus={onFocus}
        onBlur={onBlur}
        defaultValue={defaultValue}
        {...props}
      />
      {password && (
        <Icon
          name={passwordIcon}
          type="Entypo"
          style={{color: 'grey', padding: 10, fontSize: 20}}
          onPress={() => {
            if (passwordIcon == 'eye') {
              setpasswordIcon('eye-with-line');
              setisShow(false);
            } else {
              setpasswordIcon('eye');
              setisShow(true);
            }
          }}
        />
      )}
    </View>
  );
}
