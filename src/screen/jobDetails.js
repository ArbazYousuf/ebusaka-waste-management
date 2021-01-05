import React, {useState, useContext} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  ScrollView,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import CollectionCard from '../components/CollectionCard';
import {FONTS, images, theme} from '../constants';
import Switch from '../components/switch';
import {CustomTab} from './profile';
import Header from '../components/header';
import {AppContext} from '../Context/AppProvider';

const data = [
  {id: 0, name: "Today's Collection", obj: [1, 2, 3, 4, 5]},
  {id: 1, name: 'Next Collection', obj: [1, 2, 3, 4, 5]},
  {id: 2, name: 'Pending Collection', obj: [1, 2, 3, 4, 5], length: 34},
];

export default function Calender({navigation}) {
  // const [isOnline, setisOnline] = useState(false);
  const {isOnline, setisOnline} = useContext(AppContext);
  const [selected, setselected] = useState(null);
  //   console.warn('selected', selected);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        navigation={navigation}
        isOnline={isOnline}
        setisOnline={setisOnline}
        name={'Job Details'}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ScrollView indicatorStyle={false} showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              width: RFValue(350),
              backgroundColor: 'white',
              borderRadius: RFValue(10),
              marginVertical: RFValue(20),
            }}>
            <View
              style={{
                borderBottomWidth: RFValue(1),
                borderBottomColor: '#F2F2F2',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: RFValue(15),
                  flex: 1,
                }}>
                <Icon
                  name="timer"
                  type="MaterialIcons"
                  style={{
                    color: theme.COLORS.primary,
                    fontSize: RFValue(15),
                  }}
                />
                <Text
                  style={{
                    marginHorizontal: RFValue(5),
                    fontFamily: 'Poppins-Regular',
                    color: theme.COLORS.primary,
                    fontSize: RFValue(12),
                    marginTop: -1,
                  }}>
                  Aug 28, 2020
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                  marginRight: RFValue(15),
                }}>
                <View
                  style={{
                    width: RFValue(75),
                    height: RFValue(28),
                    backgroundColor: theme.COLORS.lightPrimary,
                    borderRadius: RFValue(5),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      theme.FONTS.p,
                      {color: theme.COLORS.primary, fontSize: RFValue(12)},
                    ]}>
                    Collected
                  </Text>
                </View>
              </View>
            </View>
            <View style={{margin: RFValue(15), flexDirection: 'row'}}>
              <View>
                <View
                  style={{
                    width: RFValue(35),
                    height: RFValue(35),
                    backgroundColor: theme.COLORS.secondary,
                    borderRadius: RFValue(50),
                  }}></View>
              </View>
              <View style={{marginHorizontal: RFValue(10)}}>
                <Text style={[theme.FONTS.p, {fontSize: RFValue(14)}]}>
                  Adam Miller
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: RFValue(5),
                  }}>
                  <Icon
                    style={{
                      fontSize: RFValue(20),
                      marginLeft: RFValue(-4),
                    }}
                    name="location"
                    type="EvilIcons"
                  />
                  <Text
                    style={[
                      theme.FONTS.p,
                      {
                        fontSize: RFValue(13),
                        color: '#777D82',
                        width: RFValue(170),
                        marginTop: RFValue(-3),
                      },
                    ]}>
                    32 Fulton Court Sanford NC 27330
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderTopWidth: RFValue(1),
                borderTopColor: '#F2F2F2',
                flex: 1,
              }}>
              <View
                style={{
                  margin: RFValue(15),
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="trash-o"
                    type="FontAwesome"
                    style={{fontSize: RFValue(20), color: '#909090'}}
                  />
                  <Text
                    style={[
                      theme.FONTS.p,
                      {
                        fontSize: RFValue(13),
                        marginHorizontal: RFValue(10),
                      },
                    ]}>
                    90Kg
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <View
                    style={{
                      backgroundColor: theme.COLORS.primary,
                      width: RFValue(100),
                      height: RFValue(30),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: RFValue(10),
                    }}>
                    <Text
                      style={[
                        theme.FONTS.p,
                        {color: 'white', fontSize: RFValue(12)},
                      ]}>
                      Collect Now
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 0.9,
                }}>
                <View
                  style={{
                    padding: RFValue(20),
                  }}>
                  <Text style={[FONTS.h4]}>Notes</Text>
                  <Text style={[FONTS.p]}>
                    Lorem ipsum dolor sit amet, consectetur adipisc elit. Nullam
                    ac vestibulum erat. Cras vulputate auctor lectus at
                    consequat. Lorem ipsum dolor sit amet, consectetur adipisc
                    consequat. Lorem ipsum dolor sit amet, consectetur adipisc
                    consequat. consequat.
                  </Text>
                  <View
                    style={{
                      borderBottomColor: '#F2F2F2',
                      // width: '100%',
                      // height: '100%',
                      paddingTop: RFValue(30),
                      //   marginTop: RFValue(30),
                      //   marginBottom: RFValue(30),
                      // borderWidth: RFValue(0.6),
                      borderBottomWidth: RFValue(1),
                      //   backgroundColor: 'yellow',
                    }}></View>
                </View>
                <View style={{flex: 0.2}}>
                  <Image
                    source={images.demoMap}
                    style={{alignSelf: 'center'}}
                  />
                  <View
                    style={{
                      // flex: 0.8,
                      //   backgroundColor: 'red',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      padding: RFValue(5),
                    }}>
                    <CustomButton
                      onPress={() => navigation.navigate('Map')}
                      size="sm"
                      color={theme.COLORS.primary}
                      cWidth={130}>
                      Start
                    </CustomButton>
                    <CustomButton
                      cWidth={130}
                      size="sm"
                      invisisble={true}
                      color={theme.COLORS.primary}>
                      Cancel
                    </CustomButton>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
