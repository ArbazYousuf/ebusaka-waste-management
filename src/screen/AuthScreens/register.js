import React, {useState, useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../../components/button';
import PhoneInput from 'react-native-phone-number-input';
import {Form, Item, Input, Label} from 'native-base';
import Theme from '../../Theme';
import Loader from '../../components/loader';
import {ScrollView} from 'react-native-gesture-handler';

export default function Registration({navigation}) {
  const [isVisible, setIsVisible] = useState(true);
  const [passwordIcon, setpasswordIcon] = useState('eye');
  const [isShow, setisShow] = useState(true);
  const [fNameColor, setfNameColor] = useState('grey');
  const [lNameColor, setlNameColor] = useState('grey');
  const [passColor, setpassColor] = useState('grey');
  const [emailColor, setemailColor] = useState('grey');
  const [phoneColor, setphoneColor] = useState('grey');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  //   const phoneInput = useRef < PhoneInput > null;
  const [isShowModal, setisShowModal] = useState(false);
  const phoneInput = useRef(null);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
          {/* <Text style={styles.text}>LOGO</Text> */}
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
                <Label style={{color: fNameColor}}>First Name</Label>
                <Input
                  onFocus={() => setfNameColor(Theme.primaryColor)}
                  onBlur={() => setfNameColor('grey')}
                />
              </Item>
              <Text></Text>

              <Item
                floatingLabel
                style={{paddingBottom: RFValue(8), borderColor: 'grey'}}>
                <Label style={{color: lNameColor}}>Last Name</Label>
                <Input
                  onFocus={() => setlNameColor(Theme.primaryColor)}
                  onBlur={() => setlNameColor('grey')}
                />
              </Item>
              <Text></Text>
              {/* 
              <Item
                floatingLabel
                style={{paddingBottom: RFValue(8), borderColor: 'grey'}}>
                <Label style={{color: phoneColor}}>Phone Number</Label>
                <Input
                  onFocus={() => setphoneColor(Theme.primaryColor)}
                  onBlur={() => setphoneColor('grey')}
                />
              </Item> */}

              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="DM"
                onChangeText={(text) => {
                  setValue(text);
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
                // withDarkTheme
                withShadow
                // autoFocus
              />
              {/* <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  const checkValid = phoneInput.current?.isValidNumber(value);
                  setShowMessage(true);
                  setValid(checkValid ? checkValid : false);
                }}>
                <Text>Check</Text>
              </TouchableOpacity> */}
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
            {/* <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row-reverse',
                alignSelf: 'flex-end',
                padding: RFValue(15),
              }}>
              <Text style={{fontWeight: 'bold', color: 'grey'}}>
                Forgot Password?
              </Text>
            </View> */}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <CustomButton
                color={Theme.primaryColor}
                onPress={() => {
                  setisShowModal(true);
                  setTimeout(() => {
                    setisShowModal(false);
                  }, 3000);
                }}>
                Register
              </CustomButton>
            </View>
          </Form>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              padding: RFValue(15),
              paddingHorizontal: RFValue(30),
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              flexDirection: 'column',
            }}>
            <Text style={{fontWeight: 'bold', color: 'grey'}}>
              Already have an account ?
            </Text>
            <Text style={{fontWeight: 'bold', color: Theme.primaryColor}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Loader modalVisible={isShowModal} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
