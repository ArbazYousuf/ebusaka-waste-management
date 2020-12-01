import React, {useState} from 'react';
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
export default function Login({navigation}) {
  const [isVisible, setIsVisible] = useState(true);
  const [passwordIcon, setpasswordIcon] = useState('eye');
  const [isShow, setisShow] = useState(true);
  const [nameColor, setnameColor] = useState('grey');
  const [passColor, setpassColor] = useState('grey');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderColor: Theme.primaryColor,
              // borderWidth: 2,
              borderRadius: 50,
              width: RFValue(120),
              height: RFValue(120),
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/appLogo.png')}
              resizeMode="contain"
              style={{
                flex: 1,
                width: undefined,
                height: undefined,
              }}
            />

            {/* <Text style={{textAlign: 'center', alignSelf: 'center'}}>LOGO</Text> */}
          </View>
        </View>
        <View>
          <Form>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: RFValue(20),
              }}>
              <Item
                floatingLabel
                style={{paddingBottom: RFValue(8), borderColor: 'grey'}}>
                <Label style={{color: nameColor}}>Email Address/Phone</Label>
                <Input
                  onFocus={() => setnameColor(Theme.primaryColor)}
                  onBlur={() => setnameColor('grey')}
                />
              </Item>
              <Text></Text>

              <Item
                floatingLabel
                last
                style={{
                  paddingBottom: RFValue(8),
                  borderColor: 'grey',
                }}>
                <Label style={{color: passColor}}>Password</Label>

                <Input
                  secureTextEntry={isShow}
                  onFocus={() => setpassColor(Theme.primaryColor)}
                  onBlur={() => setpassColor('grey')}
                />
                <Icon
                  name={passwordIcon}
                  type="Entypo"
                  style={{color: 'grey'}}
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
              </Item>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row-reverse',
                alignSelf: 'flex-end',
                padding: RFValue(15),
              }}>
              <Text style={{fontWeight: 'bold', color: 'grey'}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <CustomButton color={Theme.primaryColor}>Login</CustomButton>
            </View>
          </Form>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registration')}
            style={{
              padding: RFValue(15),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: 'grey'}}>
              New User ?{' '}
              <Text style={{fontWeight: 'bold', color: Theme.primaryColor}}>
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
