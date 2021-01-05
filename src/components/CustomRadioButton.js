import React, {useState} from 'react';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import {theme} from '../constants';

export default function CustomRadioButton({isChecked}) {
  return (
    <View
      style={{
        width: RFValue(15),
        height: RFValue(15),
        borderRadius: RFValue(7),
        borderWidth: RFValue(1),
        borderColor: theme.COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {isChecked && (
        <View
          style={{
            borderRadius: RFValue(5),
            width: RFValue(10),
            height: RFValue(10),
            backgroundColor: theme.COLORS.primary,
          }}></View>
      )}
    </View>
  );
}
