import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../../components/button';

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import Theme from '../../Theme';

export default function ForgotPassword() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: Theme.primaryColor}}>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: RFValue(20), fontWeight: 'bold', color: 'white'}}>
            Verify Email
          </Text>
          <Text
            style={{
              fontSize: RFValue(16),
              color: 'white',
              textAlign: 'center',
              padding: RFValue(10),
            }}>
            Please enter your email address to reset your password
          </Text>
        </View>
        <View
          style={{
            flex: 0.6,
            // backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Form
            style={{
              paddingBottom: RFValue(20),
            }}>
            <Item
              inlineLabel
              style={{
                borderWidth: 15,
                width: RFValue(250),
              }}>
              <Input />
            </Item>
          </Form>

          <CustomButton invisisble={true} color={Theme.primaryColor}>
            Reset
          </CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
