import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {FONTS, theme} from '../constants';
function SpecialPickUp() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <CalendarStrip
          scrollable
          calendarAnimation={{type: 'sequence', duration: 30}}
          daySelectionAnimation={{
            type: 'background',
            duration: 300,
            highlightColor: theme.COLORS.primary,
          }}
          style={{height: 100, paddingBottom: 10}}
          calendarHeaderStyle={{
            color: 'black',
            alignSelf: 'flex-start',
            padding: RFValue(5),
            fontFamily: 'Roboto-Bold',
            fontSize: RFValue(18),
          }}
          calendarColor={theme.COLORS.white}
          dateNumberStyle={{color: 'black'}}
          dateNameStyle={{color: 'black'}}
          iconContainer={{flex: 0.1}}
          highlightDateNumberStyle={{
            color: theme.COLORS.white,
          }}
          markedDatesStyle={{
            width: 5,
            backgroundColor: 'yellow',
            borderColor: 'red',
            borderWidth: 10,
          }}
          //   customDatesStyles={{

          //   }}
          //   markedDates={this.state.markedDates}
          //   datesBlacklist={this.datesBlacklistFunc}
          //   onDateSelected={this.onDateSelected}
          useIsoWeekday={false}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            height: RFValue(40),
            padding: RFValue(5),
          }}>
          <Text style={[FONTS.h4, {color: theme.COLORS.primary}]}>
            + Add New Pickup
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SpecialPickUp;
