import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import {FONTS, icons, images, theme} from '../constants';
import {useSelector} from 'react-redux';
import {AsyncUserUpdate} from '../redux/actions/asyncAuth';
import {useDispatch} from 'react-redux';
import {unwrapResult} from '@reduxjs/toolkit';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {API_URL} from '../services/api-call';

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
  const [isOpen, setisOpen] = useState(false);
  const [imageUrl, setimageUrl] = useState('');
  const [image, setimage] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEdit) {
      let obj = {
        data: {
          phone: `+${phone}`,
          fullname: name,
          email,
          address,
        },
        token: Auth?.token,
      };
      console.warn('obj', obj);
      dispatch(AsyncUserUpdate(obj))
        .then(unwrapResult)
        .then((res) => {
          if (res.success) {
            setisEdit(false);
          }
        });
    } else {
      setisEdit(!isEdit);
    }
  };

  const imageSaver = (response) => {
    if (response.didCancel) {
    } else if (response.error) {
      ToastError('ImagePicker Error: ' + response.error);
    } else if (response.customButton) {
      ToastError('User tapped custom button: ' + response.customButton);
      alert(response.customButton);
    } else {
      // let source = response;
      // You can also display the image using data:
      let source = {uri: 'data:image/jpeg;base64,' + response.data};

      let path = response.uri;
      if (Platform.OS === 'ios') {
        path = '~' + path.substring(path.indexOf('/Documents'));
      }
      if (!response.fileName) response.fileName = path.split('/').pop();

      setimageUrl(source);
      setimage(response);
      handleUploadPhoto(response);
    }
  };

  const launchCamera = (cond) => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    // if (cond == 'camera') {
    //   ImagePicker.launchCamera(options, (response) => imageSaver(response));
    // } else {
    launchImageLibrary(options, (response) => imageSaver(response));

    // }
  };

  const createFormData = (photo, body) => {
    const data = new FormData();
    data.append('file', {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });

    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });
    return data;
  };

  const handleUploadPhoto = (image) => {
    setisLoading(true);
    fetch(`${API_URL}/upload/file`, {
      method: 'POST',
      body: createFormData(image, {userId: '123'}),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          let obj = {
            data: {
              picture: `${API_URL}/upload/${response?.url}`,
            },
            token: Auth.token,
          };
          dispatch(AsyncUserUpdate(obj));
          setisLoading(false);
        } else {
          setisLoading(false);
          ToastError('Failed');
        }
      })
      .catch((error) => {
        setisLoading(false);
        ToastError(error);
      });
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setisOpen(true));
    Keyboard.addListener('keyboardDidHide', () => setisOpen(false));

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', () => setisOpen(true));
      Keyboard.removeListener('keyboardDidHide', () => setisOpen(false));
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.ashWhite}}>
      <StatusBar backgroundColor={theme.COLORS.white} barStyle="dark-content" />
      {/* <Text>testing</Text> */}
      <KeyboardAvoidingView style={{flex: 1}}>
        <View
          style={{
            // backgroundColor: 'red',
            flex: 0.2,
            justifyContent: 'center',
            padding: RFValue(10),
            // alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={[FONTS.h3]}> {Auth?.user?.fullname}</Text>
              <Text>{Auth?.user?.email}</Text>
            </View>
            <TouchableOpacity
              onPress={launchCamera}
              style={{padding: RFValue(5)}}>
              <View
                style={{
                  width: RFValue(80),
                  height: RFValue(80),
                  borderRadius: RFValue(50),
                  // backgroundColor: 'red',
                  borderColor: theme.COLORS.primary,
                  borderWidth: 2,
                }}>
                {isLoading ? (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      // backgroundColor: 'red',
                      flex: 1,
                    }}>
                    <ActivityIndicator color={theme.COLORS.primary} size={20} />
                  </View>
                ) : (
                  <>
                    <Image
                      source={
                        Auth.user.picture
                          ? {uri: Auth.user.picture}
                          : images.emptyImage
                      }
                      style={{
                        width: undefined,
                        height: undefined,
                        flex: 1,
                        borderRadius: RFValue(50),
                      }}
                      resizeMode="cover"
                    />
                    <Icon
                      style={{
                        fontSize: RFValue(14),
                        marginRight: RFValue(4),
                        position: 'absolute',
                        bottom: RFValue(2),
                        alignSelf: 'center',
                      }}
                      name="upload"
                      type="AntDesign"
                    />
                  </>
                )}
              </View>
              {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  
                  alignSelf: 'center',
                  // position: 'absolute',
                  marginTop: RFValue(5),
                  // backgroundColor: 'yellow',
                  // width: RFValue(55),
                  // height: RFValue(20),
                  borderRadius: RFValue(5),
                  borderBottomRightRadius: RFValue(50),
                  borderBottomLeftRadius: RFValue(50),
                }}>
             
                <Text style={{fontSize: 14, fontFamily: 'Roboto-Bold'}}>
                  Upload Image
                </Text>
              </View> */}
            </TouchableOpacity>
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
        {!isOpen && (
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
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
