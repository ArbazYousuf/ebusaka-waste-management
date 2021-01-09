import React, {useState, useContext} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {Icon, Input} from 'native-base';
import {icons, theme} from '../constants';
import Header from '../components/header';
import {AppContext} from '../Context/AppProvider';

export default function Profile() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Image source={icons.account} style={{width: 30, height: 30}} /> */}
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
