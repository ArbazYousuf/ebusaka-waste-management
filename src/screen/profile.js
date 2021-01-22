import React, {useState, useContext} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon, Input} from 'native-base';
import {FONTS, icons, theme} from '../constants';
import Header from '../components/header';
import {AppContext} from '../Context/AppProvider';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const ShowMenu = ({icon, name, nav}) => {
  console.warn(icon, name);
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
        <View
          style={{
            width: RFValue(45),
            height: RFValue(45),
            backgroundColor: '#F5F5F5',
            borderRadius: RFValue(22),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={icon}
            style={{width: RFValue(20), height: RFValue(20)}}
          />
        </View>
        <Text style={[FONTS.h4, {paddingLeft: RFValue(15)}]}>{name}</Text>
      </View>
      {/* <View style={{}}> */}
      <Icon name="right" type="AntDesign" />
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default function Profile({navigation}) {
  const Auth = useSelector(({Auth}) => Auth);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
          colors={['#31604F', '#447345', '#4E7E40', '#57873B', '#57873B']}
          style={{flex: 1}}>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
        </LinearGradient>
        {/* <StatusBar backgroundColor={theme.COLORS.primary} /> */}
        <View style={{height: RFValue(180)}}>
          <LinearGradient
            start={{x: 0, y: 0.1}}
            end={{x: 0, y: 1}}
            colors={['#31604F', '#447345', '#4E7E40', '#57873B', '#57873B']}
            style={{flex: 1}}>
            <View style={{flex: 0.3}} />
            <View
              style={{
                flexDirection: 'row',
                flex: 0.5,
                padding: RFValue(20),
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}></View>
                <View style={{padding: RFValue(10)}}>
                  <Text style={[FONTS.h4, {color: theme.COLORS.white}]}>
                    {Auth?.user?.fullname}
                  </Text>
                  <Text style={[FONTS.p, {color: theme.COLORS.white}]}>
                    {Auth?.user?.email}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditProfile')}
                style={{padding: RFValue(10), paddingTop: RFValue(15)}}>
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{color: theme.COLORS.white}}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: theme.COLORS.white,
            height: RFValue(60),
            width: RFValue(350),
            top: RFValue(140),
            borderRadius: RFValue(10),
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: RFValue(10),
          }}>
          <View
            style={{
              backgroundColor: '#359636',
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              // flexDirection: 'row',
            }}>
            <Image source={icons.chat} style={{width: 20, height: 20}} />
          </View>
          <View style={{paddingTop: RFValue(5)}}>
            <Text style={[FONTS.h4]}>Chat – messenger chat with admin</Text>
          </View>
          <View style={{paddingTop: RFValue(5)}}>
            <Icon name="right" type="AntDesign" style={{color: '#359636'}} />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            padding: RFValue(20),
            marginTop: RFValue(20),
          }}>
          <View
            style={{
              borderRadius: RFValue(10),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
              backgroundColor: 'white',
              height: RFValue(300),
              justifyContent: 'center',
            }}>
            {[
              ...Array(
                {icon: icons.account, name: 'Account'},
                {icon: icons.payment, name: 'Payment'},
                {icon: icons.notification, name: 'Notifications'},
                {icon: icons.privacy, name: 'Privacy & Policy'},
              ),
            ].map((val) => {
              return <ShowMenu {...val} />;
            })}
          </View>
          <View
            style={{
              borderRadius: RFValue(10),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
              backgroundColor: 'white',
              // flex: 1,
              marginTop: 20,
              height: RFValue(300),
              justifyContent: 'center',
            }}>
            {[
              ...Array(
                {icon: icons.terms, name: 'Terms and conditions'},
                {icon: icons.faq, name: 'FAQ'},
                {icon: icons.refer, name: 'Refer your friend'},
                {icon: icons.privacy, name: 'Privacy & Policy'},
              ),
            ].map((val) => {
              return <ShowMenu {...val} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// export const CustomTab = (text, value) => (
//   <View
//     style={{
//       flexDirection: 'row',
//       alignItems: 'center',
//     }}>
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         paddingVertical: 10,
//         borderBottomWidth: RFValue(1),
//         borderBottomColor: '#F2F2F2',
//       }}>
//       <Text style={[theme.FONTS.p, {fontSize: RFValue(17)}]}>{text}</Text>
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <Text
//           style={[
//             theme.FONTS.p,
//             {
//               fontSize: RFValue(17),
//               color: '#BEC2CE',
//               marginRight: RFValue(10),
//             },
//           ]}>
//           {value}
//         </Text>

//         <Icon
//           name="right"
//           type="AntDesign"
//           style={{
//             color: '#8A8A8F',
//             fontSize: RFValue(15),
//             paddingRight: RFValue(20),
//           }}
//         />
//       </View>
//     </View>
//   </View>
// );
// export default function Profile({navigation}) {
//   const {isOnline, setisOnline} = useContext(AppContext);
//   const [isEdit, setisEdit] = useState(false);

//   const container = () => (
//     <View
//       style={{
//         marginTop: RFValue(10),
//         width: '100%',
//         backgroundColor: 'white',
//         paddingLeft: RFValue(20),
//       }}>
//       {CustomTab('Username', 'Martha Banks')}
//       {CustomTab('Phone number', '584-490-9153')}
//       {CustomTab('Email', 'freeslab88@gmail.com')}
//       {CustomTab('Gender', 'Female')}
//       {CustomTab('Birthday', 'April 16, 1988')}
//     </View>
//   );

//   const setisEditFunc = () => {
//     if (!isEdit) {
//       setisEdit(true);
//       return;
//     } else {
//       setisEdit(false);
//       return;
//     }
//   };
//   const EditCancel = () => {};

//   const ViewProfile = () => (
//     <View>
//       <View
//         style={{
//           width: '100%',
//           backgroundColor: theme.COLORS.primary,
//           alignItems: 'center',
//           paddingBottom: 20,
//         }}>
//         <View
//           style={{
//             width: RFValue(100),
//             height: RFValue(100),
//             backgroundColor: theme.COLORS.secondary,
//             borderRadius: RFValue(50),
//           }}></View>
//         {/* <View
//           style={{
//             backgroundColor: 'red',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}> */}
//         <Text
//           style={[
//             theme.FONTS.p,
//             {fontSize: RFValue(20), color: 'white', paddingTop: RFValue(20)},
//           ]}>
//           Martha Banks
//         </Text>
//         <Text
//           style={[
//             theme.FONTS.p,
//             {fontSize: RFValue(15), color: 'white', paddingTop: RFValue(5)},
//           ]}>
//           Gold Member
//         </Text>
//       </View>
//       {/* </View> */}
//       <View>
//         <Text
//           style={{
//             fontFamily: 'SFUIDisplay-Semibold',
//             fontSize: RFValue(15),
//             color: '#BEC2CE',
//             marginTop: RFValue(20),
//             marginLeft: RFValue(20),
//           }}>
//           INFORMATIONS
//         </Text>
//         {container()}
//       </View>
//     </View>
//   );

//   const EditProfile = () => (
//     <View>
//       <View
//         style={{
//           width: '100%',
//           backgroundColor: theme.COLORS.primary,
//           alignItems: 'center',
//           paddingBottom: 20,
//           flexDirection: 'row',
//         }}>
//         <View style={{flex: 1, alignItems: 'center'}}>
//           <View
//             style={{
//               width: RFValue(100),
//               height: RFValue(100),
//               backgroundColor: theme.COLORS.secondary,
//               borderRadius: RFValue(50),
//             }}></View>
//           <Text
//             style={[
//               theme.FONTS.p,
//               {fontSize: RFValue(15), color: 'white', marginTop: RFValue(10)},
//             ]}>
//             Edit photo
//           </Text>
//         </View>
//         <View style={{flex: 2}}>
//           <Input
//             style={[
//               theme.FONTS.p,
//               {
//                 borderBottomColor: '#EFEFF4',
//                 borderBottomWidth: RFValue(1),
//                 marginLeft: RFValue(20),
//                 color: 'white',
//                 fontSize: RFValue('17'),
//               },
//             ]}
//             value={'Martha Banks'}
//             placeholder={'First name'}
//           />
//           <Input
//             style={{
//               borderBottomColor: 'white',
//               borderBottomColor: '#EFEFF4',
//               borderBottomWidth: RFValue(1),
//               marginLeft: RFValue(20),
//               color: 'white',
//               fontSize: RFValue('17'),
//             }}
//             placeholderTextColor="#BEC2CE"
//             value={''}
//             placeholder={'Last name'}
//           />
//           {/* <Text
//             style={[theme.FONTS.p, {fontSize: RFValue(20), color: 'white'}]}>
//             Martha Banks
//           </Text> */}
//           {/* <Text
//             style={[
//               theme.FONTS.p,
//               {fontSize: RFValue(15), color: 'white', marginTop: RFValue(5)},
//             ]}>
//             Gold Member
//           </Text> */}
//         </View>
//       </View>
//       <View>{container()}</View>
//     </View>
//   );
//   return (
//     <SafeAreaView>
//       <Header
//         navigation={navigation}
//         isOnline={isOnline}
//         setisOnline={setisOnline}
//         name={''}
//         edit={true}
//         isEdit={isEdit}
//         setisEdit={setisEditFunc}
//         EditCancel={EditCancel}
//       />
//       {isEdit ? EditProfile() : ViewProfile()}
//     </SafeAreaView>
//   );
// }
