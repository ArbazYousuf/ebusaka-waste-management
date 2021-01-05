import React from 'react';
import {View, Text, Icon} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import {theme} from '../constants';

export default function CollectionCard({ContainerStyle}) {
  return (
    <View style={ContainerStyle}>
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
      </View>
    </View>
  );
}
