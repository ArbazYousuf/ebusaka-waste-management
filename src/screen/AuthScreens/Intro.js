import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Theme from '../../Theme';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../../components/button';
export default function Intro({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Container}>
        <View style={styles.logoContainer}>
          <View
            style={{
              flex: 0.9,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderColor: Theme.primaryColor,
                borderWidth: 2,
                borderRadius: 50,
                width: 100,
                height: 100,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                LOGO
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomTextContainer}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: RFValue(22),
                  color: 'white',
                  fontWeight: '600',
                  paddingBottom: RFValue(20),
                  paddingTop: RFValue(10),
                }}>
                Welcome To Ebusaka
              </Text>
              <Text
                style={{
                  fontSize: RFValue(15),
                  color: 'white',
                  fontWeight: '600',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Be ready to experience the best professional waste collection
                services at your place.
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  paddingTop: RFValue(10),
                }}>
                <CustomButton
                  onPress={() => navigation.navigate('Registration')}
                  size="sm"
                  color="#20b2aa"
                  invisisble={true}>
                  REGISTER
                </CustomButton>
                <CustomButton
                  size="sm"
                  color="#20b2aa"
                  invisisble={true}
                  onPress={() => navigation.navigate('Login')}>
                  SIGN IN
                </CustomButton>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  logoContainer: {
    flex: 4,
  },
  bottomTextContainer: {
    flex: 2,
    backgroundColor: Theme.primaryColor,
    height: RFValue(200),
  },
});
