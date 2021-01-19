import React, {useState, useEffect} from 'react';
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
import SpecialPickUpModal from '../modals/specialPickupModal';
import {useDispatch, useSelector} from 'react-redux';
import ToastError from '../utils/toastErr';
import {AsyncGetMySpecial} from '../redux/actions/asyncJob';
function SpecialPickUp({navigation, route}) {
  const [openmodal, setopenmodal] = useState(false);
  const [selectedDate, setselectedDate] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AsyncGetMySpecial());
  }, []);

  const onAddNewPickUp = () => {
    if (selectedDate) {
      navigation.navigate('AddSpecialPickUp', {
        date: moment(selectedDate).toISOString(),
      });
    } else {
      ToastError('Select Date First');
    }
  };
  // console.log('selected date', moment(selectedDate).toISOString());
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 0.4}}>
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
          highlightDateNameStyle={{
            color: theme.COLORS.white,
          }}
          // dayContainerStyle={{
          //   backgroundColor: theme.COLORS.primary,
          //   borderRadius: RFValue(8),
          // }}
          // markedDatesStyle={{
          //   width: 5,
          //   // backgroundColor: 'yellow',
          //   borderColor: 'red',
          //   borderWidth: 10,
          // }}
          //   customDatesStyles={{

          //   }}
          //   markedDates={this.state.markedDates}
          //   datesBlacklist={this.datesBlacklistFunc}
          onDateSelected={(date) => setselectedDate(date)}
          useIsoWeekday={false}
        />
        <TouchableOpacity
          onPress={onAddNewPickUp}
          style={{
            backgroundColor: 'white',
            height: RFValue(40),
            padding: RFValue(5),
          }}>
          <Text style={[FONTS.h4, {color: theme.COLORS.lightPrimary}]}>
            + Add New Pickup
          </Text>
        </TouchableOpacity>
      </View>
      {[...Array(10)].map((val, index) => {
        return (
          <View
            style={{
              backgroundColor: '#F2F2F2',
              // padding: 10,
              paddingTop: index > 0 ? -30 : 20,
              flexDirection: 'row',
            }}>
            <View
              style={{
                // paddingTop: RFValue(40),
                paddingRight: RFValue(10),
                justifyContent: 'center',
                alignItems: 'center',
                // height: RFValue(100),
                paddingLeft: RFValue(10),
              }}>
              <Text
                style={[
                  FONTS.h4,
                  {color: 'gray', paddingTop: index > 0 ? 30 : RFValue(30)},
                ]}>
                11:00
              </Text>
              <View
                style={{
                  height: RFValue(60),
                  backgroundColor: '#DEDEDE',
                  width: RFValue(1),
                  // marginTop: index > 0 ? -10 : RFValue(30),
                  marginTop: 2,
                }}></View>
            </View>
            <View
              style={{
                width: RFValue(280),
                borderRadius: RFValue(10),
                height: 100,
                backgroundColor: theme.COLORS.white,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: '98%',
                  alignSelf: 'flex-start',
                  margin: RFValue(2),
                  backgroundColor: theme.COLORS.lightPrimary,
                  width: RFValue(9),
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius: 10,
                }}></View>
              <View style={{paddingHorizontal: RFValue(20)}}>
                <Text style={[FONTS.h4, {paddingTop: RFValue(20)}]}>
                  Household wastes
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'flex-end',
                    paddingBottom: RFValue(10),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="bag"
                      type="SimpleLineIcons"
                      style={{fontSize: RFValue(18), color: theme.COLORS.gray}}
                    />
                    <Text
                      style={[
                        FONTS.p,
                        {
                          fontSize: RFValue(13),
                          color: theme.COLORS.gray,
                          marginRight: RFValue(12),
                        },
                      ]}>
                      120 Bags
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="location"
                      type="EvilIcons"
                      style={{fontSize: RFValue(20), color: theme.COLORS.gray}}
                    />
                    <Text
                      style={[
                        FONTS.p,
                        {fontSize: RFValue(13), color: theme.COLORS.gray},
                      ]}>
                      Pickup Address
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

export default SpecialPickUp;
