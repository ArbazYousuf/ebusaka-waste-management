import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {theme} from '../constants';

export default function CustomCheckBox({
  isChecked,
  cWidth,
  cHeight,
  cRadius,
  cLogoSize,
}) {
  return (
    <View
      style={{
        borderRadius: cRadius,
        width: cWidth,
        height: cHeight,
        borderColor: theme.COLORS.primary,
        borderWidth: RFValue(3),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isChecked ? theme.COLORS.primary : null,
      }}>
      {isChecked && (
        <Icon
          name="check"
          type="FontAwesome"
          style={{fontSize: cLogoSize, color: theme.COLORS.white}}
        />
      )}
    </View>
  );
}
