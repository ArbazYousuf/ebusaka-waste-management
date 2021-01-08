import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'native-base';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../constants';

function Feed() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle={'default'} />
      <View
        style={{
          backgroundColor: 'white',
          padding: RFValue(20),
        }}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: RFValue(18), fontWeight: 'bold'}}>
            Blogging Feeds
          </Text>
          <Icon type="Ionicons" name="md-options" />
        </View>
        <View style={{flexDirection: 'row', paddingTop: RFValue(15)}}>
          <TouchableOpacity>
            <Text
              style={[theme.FONTS.p, {color: 'gray', fontSize: RFValue(15)}]}>
              Write Something Here
            </Text>
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: RFValue(70),
          backgroundColor: 'white',
          marginTop: RFValue(5),
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderRadius: RFValue(100),
            width: RFValue(50),
            height: RFValue(50),
            borderColor: theme.COLORS.primary,
            borderWidth: 2,
            marginLeft: RFValue(10),
          }}></View>
      </View>
      <View style={{backgroundColor: 'white', marginTop: RFValue(5)}}>
        <View style={{margin: RFValue(20)}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: RFValue(30),
                width: RFValue(30),
                borderRadius: RFValue(50),
                backgroundColor: 'green',
              }}></View>
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text
                  style={[
                    theme.FONTS.h4,
                    {marginLeft: RFValue(10), fontSize: RFValue(14)},
                  ]}>
                  Abiodun Adeniyi
                </Text>
                <Text
                  style={[
                    theme.FONTS.p,
                    {marginLeft: RFValue(10), fontSize: RFValue(13)},
                  ]}>
                  Posted a photo
                </Text>
              </View>
              <Text
                style={[
                  theme.FONTS.p,
                  {marginLeft: RFValue(10), fontSize: RFValue(10)},
                ]}>
                2 hrs ago
              </Text>
            </View>
          </View>
          <View style={{marginTop: RFValue(10)}}>
            <Text
              style={[
                theme.FONTS.p,
                {color: '#6E6D6D', fontSize: RFValue(12)},
              ]}>
              So guys there will be an audition of DID season 5 at Ikeja
              Starting from 23 Aug. See you all
            </Text>
            <View
              style={{
                height: RFValue(160),
                borderRadius: RFValue(10),
                backgroundColor: 'yellow',
                marginTop: RFValue(10),
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: RFValue(5),
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  style={{fontSize: RFValue(12), color: '#E68D49'}}
                  name="thumbs-up"
                  type="FontAwesome5"
                />
                <Text
                  style={[
                    theme.FONTS.p,
                    {
                      color: '#E68D49',
                      fontSize: RFValue(10),
                      marginLeft: RFValue(5),
                    },
                  ]}>
                  140 Voted Helpful
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    theme.FONTS.p,
                    {
                      color: '#33E0A1',
                      fontSize: RFValue(10),
                      marginRight: RFValue(10),
                    },
                  ]}>
                  140 Discuss
                </Text>
                <Text
                  style={[
                    theme.FONTS.p,
                    {color: '#4D639F', fontSize: RFValue(10)},
                  ]}>
                  140 Share
                </Text>
              </View>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#F5F5F5',
                flexDirection: 'row',
                marginTop: RFValue(15),
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  padding: RFValue(10),
                }}>
                <Icon
                  style={{fontSize: RFValue(15), color: '#AAAAAA'}}
                  name="thumbs-up"
                  type="FontAwesome5"
                />
                <Text
                  style={[
                    theme.FONTS.p,
                    {
                      color: '#AAAAAA',
                      fontSize: RFValue(12),
                      marginLeft: RFValue(10),
                    },
                  ]}>
                  Helpful
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  padding: RFValue(10),
                }}>
                <Icon
                  style={{fontSize: RFValue(15), color: '#AAAAAA'}}
                  name="thumbs-up"
                  type="FontAwesome5"
                />
                <Text
                  style={[
                    theme.FONTS.p,
                    {
                      color: '#AAAAAA',
                      fontSize: RFValue(12),
                      marginLeft: RFValue(10),
                    },
                  ]}>
                  Discuss
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  padding: RFValue(10),
                }}>
                <Icon
                  style={{fontSize: RFValue(15), color: '#AAAAAA'}}
                  name="thumbs-up"
                  type="FontAwesome5"
                />
                <Text
                  style={[
                    theme.FONTS.p,
                    {
                      color: '#AAAAAA',
                      fontSize: RFValue(12),
                      marginLeft: RFValue(10),
                    },
                  ]}>
                  Share
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: RFValue(10)}}>
              <View
                style={{
                  height: RFValue(30),
                  width: RFValue(30),
                  borderRadius: RFValue(50),
                  backgroundColor: 'green',
                  marginRight: RFValue(10),
                }}></View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: '#F5F5F5',
                  borderRadius: 50,
                  flexDirection: 'row',
                  paddingHorizontal: RFValue(10),
                  alignItems: 'center',
                }}>
                <TextInput
                  placeholder="Write a Comment"
                  placeholderTextColor="#A7A2A2"
                  style={{flex: 1}}
                />
                <Icon
                  style={{
                    fontSize: RFValue(15),
                    color: '#AAAAAA',
                    marginRight: RFValue(5),
                  }}
                  name="thumbs-up"
                  type="FontAwesome5"
                />
                <Icon
                  style={{fontSize: RFValue(15), color: '#AAAAAA'}}
                  name="thumbs-up"
                  type="FontAwesome5"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Feed;
