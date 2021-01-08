import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {theme, images, icons} from '../constants';
import SafeAreaView from 'react-native-safe-area-view';
import {TextInput} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={theme.COLORS.primary} />
      <View style={styles.Container}>
        <View style={{margin: RFValue(20), flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: 'Roboto-Regular',
                color: '#2D2D2D',
              }}>
              Hi, Riley Cooper
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text
                style={{
                  marginTop: RFValue(10),
                  fontSize: RFValue(17),
                  fontFamily: 'Roboto-Bold',
                }}>
                Don't forget to smile today
              </Text>
              <Image
                style={{
                  width: RFValue(19),
                  height: RFValue(19),
                  marginLeft: RFValue(10),
                }}
                source={icons.face}
              />
            </View>
          </View>
          <View style={{alignItems: 'flex-end', flex: 1}}>
            <View
              style={{
                height: RFValue(40),
                width: RFValue(40),
                backgroundColor: theme.COLORS.primary,
                borderRadius: RFValue(10),
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginLeft: RFValue(20),
            marginRight: RFValue(20),
            flexDirection: 'row',
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: RFValue(10),
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignContent: 'center',
              marginRight: 10,
              width: '72%',
            }}>
            <Icon
              style={{
                marginHorizontal: 15,
                color: 'gray',
                alignSelf: 'center',
                fontSize: RFValue(13),
              }}
              type="FontAwesome"
              name="search"
            />
            <TextInput
              style={{
                width: '85%',
                fontSize: RFValue(12),
                fontFamily: 'Roboto-Regular',
                marginRight: RFValue(10),
              }}
              placeholder="Search Service, Subscription, Marketplace"
            />
          </View>
          <View
            style={{
              width: RFValue(50),
              height: RFValue(50),
              backgroundColor: '#2AC17C',
              borderRadius: RFValue(10),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.page}
              style={{width: RFValue(25), height: RFValue(25)}}
            />
          </View>
        </View>
        <View style={{margin: RFValue(20)}}>
          <Text style={{fontSize: RFValue(16), fontFamily: 'Roboto-Bold'}}>
            Our Services
          </Text>
          <View style={{marginTop: RFValue(20)}}>
            <View
              style={{
                width: RFValue(90),
                height: RFValue(120),
                borderRadius: RFValue(20),
                backgroundColor: 'yellow',
              }}></View>
          </View>
        </View>
        <View style={{margin: RFValue(20)}}>
          <Text style={{fontSize: RFValue(16), fontFamily: 'Roboto-Bold'}}>
            Active Subscription
          </Text>
          <View style={{marginTop: RFValue(20)}}>
            <View
              style={{
                width: '100%',
                height: RFValue(90),
                borderRadius: RFValue(20),
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: 'blue',
                  margin: RFValue(15),
                  width: RFValue(60),
                  borderRadius: RFValue(10),
                }}></View>
              <View style={{marginTop: RFValue(12), flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: RFValue(13), fontFamily: 'Roboto-Bold'}}>
                    Company Name
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontWeight: 'bold',
                      marginRight: RFValue(20),
                      color: '#70A12F',
                      fontFamily: 'Roboto-Bold',
                    }}>
                    $40.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: RFValue(10),
                    marginLeft: RFValue(-5),
                    alignItems: 'center',
                  }}>
                  <Icon
                    style={{fontSize: RFValue(15), color: '#707070'}}
                    type="EvilIcons"
                    name="location"
                  />
                  <Text
                    style={{
                      fontSize: RFValue(11),
                      fontFamily: 'Roboto-Regular',
                      color: '#707070',
                    }}>
                    Address of the company
                  </Text>
                  <Icon
                    style={{fontSize: RFValue(15), color: '#707070'}}
                    type="EvilIcons"
                    name="location"
                  />
                  <Text
                    style={{
                      fontSize: RFValue(11),
                      fontFamily: 'Roboto-Regular',
                      color: '#707070',
                    }}>
                    Visa Card
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: RFValue(5),
                    marginLeft: RFValue(-5),
                  }}>
                  <Icon
                    style={{fontSize: RFValue(15), color: '#707070'}}
                    type="EvilIcons"
                    name="location"
                  />
                  <Text
                    style={{
                      fontSize: RFValue(11),
                      fontFamily: 'Roboto-Regular',
                      color: '#707070',
                    }}>
                    120 Bags
                  </Text>
                </View>
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
});
