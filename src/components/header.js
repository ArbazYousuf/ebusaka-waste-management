import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Text, TouchableOpacity} from 'react-native';
import {theme} from '../constants';
import {Body, Left, Right, Icon} from 'native-base';
import Switch from './switch';
export default function Header({
  isOnline,
  setisOnline,
  navigation,
  name,
  edit,
  isEdit,
  setisEdit,
  EditCancel,
}) {
  console.log(navigation);
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: theme.COLORS.primary,
        flexDirection: 'row',
        padding: RFValue(20),
      }}>
      <View style={{flex: 0.3}}>
        {isEdit ? (
          <TouchableOpacity onPress={() => EditCancel()}>
            <Text
              style={{
                fontFamily: 'SFUIDisplay-Medium',
                fontSize: RFValue(17),
                color: 'white',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" type="AntDesign" style={{color: 'white'}} />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[theme.FONTS.p, {fontSize: RFValue(17), color: 'white'}]}>
          {name}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          flex: 0.3,
          alignItems: 'flex-end',
          justifyContent: 'center',
          // backgroundColor: 'yellow',
        }}>
        {edit ? (
          <TouchableOpacity onPress={setisEdit}>
            <Text
              style={{
                fontFamily: 'SFUIDisplay-Medium',
                fontSize: RFValue(17),
                color: 'white',
              }}>
              {isEdit ? 'Done' : 'Edit'}
            </Text>
          </TouchableOpacity>
        ) : (
          <Switch isOnline={isOnline} setisOnline={setisOnline} />
        )}
      </TouchableOpacity>
    </View>
  );
}
