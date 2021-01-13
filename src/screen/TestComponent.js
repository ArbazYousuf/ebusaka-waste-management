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
import DestinationSearch from '../components/DestinationSearch';

export default function TestComponent() {
  return (
    // <SafeAreaView style={{flex: 1}}>
    <DestinationSearch />
    // </SafeAreaView>
  );
}
