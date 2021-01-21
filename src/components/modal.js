import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {FONTS, icons, theme} from '../constants';

export default function CustomModal({
  mainHeading,
  subHeading,
  buttonText,
  handleModal,
  visible,
}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal
        transparent={true}
        visible={visible}
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
        }}>
        <TouchableOpacity
          onPress={() => this.setState({isOpenModal: !this.state.isOpenModal})}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '80%',
              height: RFValue(250),
              padding: RFValue(5),
              borderRadius: RFValue(20),
              padding: RFValue(10),
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={icons.correct}
                style={{width: RFValue(50), height: RFValue(50)}}
              />
              <Text
                style={[
                  FONTS.h3,
                  {padding: 10, alignSelf: 'center', textAlign: 'center'},
                ]}>
                {/* Job successfully posted */}
                {mainHeading}
              </Text>
              <Text style={[FONTS.p, {padding: 10, paddingBottom: 40}]}>
                {/* We will notify the relevant authorities */}
                {subHeading}
              </Text>
              <CustomButton
                color={theme.COLORS.primary}
                cWidth={100}
                onPress={handleModal}>
                {/* Continue */}
                {buttonText}
              </CustomButton>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}
