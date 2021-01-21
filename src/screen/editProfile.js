import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {FONTS, icons, images, theme} from '../constants';
import {useSelector} from 'react-redux';

const ShowDetails = ({title, value, onChangeText, isEdit}) => {
  return (
    <TouchableOpacity
      style={{
        margin: RFValue(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[FONTS.p, {paddingLeft: RFValue(15)}]}>{title}</Text>
      </View>
      {isEdit ? (
        <TextInput
          style={{
            height: 40,
            // height: 45,
            // marginLeft: 16,
            // borderBottomColor: '#FFFFFF',
            // flex: 1,
            borderRadius: RFValue(10),
            backgroundColor: 'white',
            width: RFValue(200),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          // placeholder={title}
          value={value}
          // defaultValue={value}
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
        />
      ) : (
        <Text>{value}</Text>
      )}
    </TouchableOpacity>
  );
};

export default function EditProfile() {
  const Auth = useSelector((state) => state.Auth);
  const [isEdit, setisEdit] = useState(false);
  const [name, setname] = useState(Auth?.user?.fullname);
  const [email, setemail] = useState(Auth?.user?.email);
  const [phone, setphone] = useState(Auth?.user?.phone);
  const [address, setaddress] = useState(Auth?.user?.address);

  const handleEdit = () => {
    if (isEdit) {
      let obj = {
        data: {
          phone: `+${phone}`,
          fullname: name,
          email,
          address,
        },
      };
      console.warn('obj', obj);
    } else {
      setisEdit(!isEdit);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.ashWhite}}>
      <StatusBar backgroundColor={theme.COLORS.white} barStyle="dark-content" />
      {/* <Text>testing</Text> */}
      <View
        style={{
          //   backgroundColor: 'red',
          flex: 0.2,
          justifyContent: 'center',
          padding: RFValue(10),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={[FONTS.h3]}> {Auth?.user?.fullname}</Text>
            <Text>{Auth?.user?.email}</Text>
          </View>

          <View
            style={{
              width: RFValue(50),
              height: RFValue(50),
              borderRadius: RFValue(25),
            }}>
            <Image
              source={images.emptyImage}
              style={{width: undefined, height: undefined, flex: 1}}
              resizeMode="contain"
            />
          </View>
          {/* <View
            style={{
              backgroundColor: 'yellow',
              width: RFValue(50),
              height: RFValue(50),
              borderRadius: RFValue(25),
            }}></View> */}
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: 'yellow',
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          padding: RFValue(10),
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: RFValue(350),
            height: RFValue(320),
            borderRadius: RFValue(10),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: RFValue(20),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="user" type="FontAwesome" />
              <Text
                style={[
                  FONTS.h3,
                  {padding: RFValue(5), paddingHorizontal: RFValue(19)},
                ]}>
                Personal Information
              </Text>
            </View>
            <TouchableOpacity onPress={handleEdit}>
              <Text
                style={[
                  FONTS.p,
                  {color: theme.COLORS.primary, padding: RFValue(10)},
                ]}>
                {isEdit ? 'Submit' : 'Edit'}
              </Text>
            </TouchableOpacity>
          </View>

          <ShowDetails
            title="Full Name"
            value={Auth.user?.fullname}
            onChangeText={(text) => setname(text)}
            isEdit={isEdit}
            value={name}
          />
          <ShowDetails
            title="Email Address"
            value={Auth.user?.email}
            onChangeText={(text) => setemail(text)}
            isEdit={isEdit}
            value={email}
          />
          <ShowDetails
            title="Mobile No"
            value={Auth.user?.phone}
            onChangeText={(text) => setphone(text)}
            isEdit={isEdit}
            value={phone}
          />
          <ShowDetails
            title="Home Address"
            value={Auth.user?.address}
            onChangeText={(text) => setaddress(text)}
            isEdit={isEdit}
            value={address}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
            width: RFValue(340),
            height: RFValue(60),
            borderRadius: RFValue(10),
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', paddingLeft: RFValue(10)}}>
              <Icon name="lock" type="FontAwesome" />
              <Text
                style={[
                  FONTS.h3,
                  {paddingHorizontal: RFValue(15), alignSelf: 'center'},
                ]}>
                Password Change
              </Text>
            </View>
            <TouchableOpacity
              style={{paddingHorizontal: RFValue(10)}}
              onPress={() => setisEdit(!isEdit)}>
              <Text>{isEdit ? 'Submit' : 'Edit'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
