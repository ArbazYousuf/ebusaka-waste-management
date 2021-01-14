import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {theme, FONTS, icons} from '../constants';
import CustomTextInput from '../components/CustomTextInput';
import DropDownPicker from 'react-native-custom-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

function AddSpecialPickUp({navigation}) {
  const [nonActiveColor, setactiveColor] = useState(theme.COLORS.lightGray);
  const [wasteType, setwasteType] = useState('');
  const [onActive, setOnActive] = useState({
    name: false,
    bag: false,
  });
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [activeList, setactiveList] = useState({
    wasteType: false,
    company: false,
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const activeTextStyle = {
    marginBottom: RFValue(4),
    color: theme.COLORS.primary,
  };
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            overflow: 'hidden',
            paddingBottom: 5,
            //   justifyContent: 'center',
          }}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View
            style={{
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5,
              // paddingTop: RFValue(20),
              height: RFValue(80),
              alignItems: 'center',
              justifyContent: 'center',
              // flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{flex: 0.4, justifyContent: 'center'}}>
                <Icon
                  name="cross"
                  type="Entypo"
                  style={{fontSize: RFValue(18), paddingLeft: RFValue(10)}}
                />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  style={[
                    {
                      fontFamily: 'Roboto-Bold',
                      fontSize: RFValue(25),
                    },
                  ]}>
                  Special Pickup
                </Text>
              </View>
              <View style={{flex: 0.4}} />
            </View>
          </View>
        </View>

        <View style={{height: 400, justifyContent: 'center'}}>
          <View style={{padding: RFValue(10)}}>
            <Text style={[FONTS.h3, {}]}>Personal Information</Text>
          </View>
          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,

              elevation: 9,
              backgroundColor: theme.COLORS.white,
              width: RFValue(350),
              height: RFValue(280),
              borderRadius: 10,
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <View style={{padding: RFValue(20)}}>
              <Text
                style={[
                  FONTS.h4,
                  {
                    color: onActive.name
                      ? theme.COLORS.primary
                      : nonActiveColor,
                    paddingBottom: RFValue(5),
                  },
                ]}>
                Full Name*
              </Text>
              <CustomTextInput
                placeholder="Please Write Here"
                inputType="default"
                icon="user"
                iconType="FontAwesome"
                iconColor={theme.COLORS.lightGray}
                cBorderRadius={5}
                cIconPadding={10}
                cWidth={320}
                onFocus={() =>
                  setOnActive((prev) => {
                    return {...prev, name: true};
                  })
                }
                onBlur={() =>
                  setOnActive((prev) => {
                    return {...prev, name: false};
                  })
                }
                activeColor={onActive.name ? theme.COLORS.primary : null}
              />
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  // backgroundColor: 'yellow',
                  width: RFValue(350),
                  height: RFValue(50),
                  alignItems: 'center',
                  marginTop: RFValue(-20),
                }}>
                <View>
                  <Text>Address*</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Map')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Icon
                    name="location-pin"
                    type="Entypo"
                    style={{fontSize: RFValue(20), color: theme.COLORS.primary}}
                  />
                  <Text
                    style={[
                      FONTS.h4,
                      {color: theme.COLORS.primary, textAlign: 'center'},
                    ]}>
                    Set Location On Map
                  </Text>
                  <Icon
                    name="right"
                    type="AntDesign"
                    style={{
                      fontSize: RFValue(15),
                      color: theme.COLORS.primary,
                      textAlign: 'center',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: RFValue(100),
                  backgroundColor: theme.COLORS.primary,
                  margin: RFValue(5),
                  borderRadius: RFValue(5),
                }}></View>
            </View>
          </View>
        </View>
        <View style={{height: 550}}>
          <View style={{padding: RFValue(10)}}>
            <Text style={[FONTS.h3, {}]}>Choose Service</Text>
          </View>
          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,

              elevation: 9,
              backgroundColor: theme.COLORS.white,
              width: RFValue(350),
              height: RFValue(400),
              borderRadius: 10,
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <View style={{padding: RFValue(10)}}>
              <Text
                style={[
                  FONTS.h4,
                  activeList.wasteType
                    ? activeTextStyle
                    : {marginBottom: RFValue(4), color: nonActiveColor},
                ]}>
                Select Waste Type
              </Text>
              <DropDownPicker
                items={[
                  {
                    label: 'UK',
                    value: 'uk',
                    // icon: () => <Icon name="flag" size={18} color="#900" />,
                  },
                  {
                    label: 'France',
                    value: 'france',
                    // icon: () => <Icon name="flag" size={18} color="#900" />,
                  },
                ]}
                defaultValue={wasteType}
                containerStyle={{
                  height: RFValue(50),
                  width: RFValue(320),
                  // borderWidth: 1,
                }}
                style={{
                  backgroundColor: 'white',
                  borderWidth: activeList.wasteType ? 2 : 1,
                  borderColor: activeList.wasteType
                    ? theme.COLORS.primary
                    : theme.COLORS.lightGray,
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{
                  backgroundColor: '#fafafa',
                }}
                onChangeItem={(item) => setwasteType(item)}
                onOpen={() => {
                  setactiveList((pre) => ({...pre, wasteType: true}));
                }}
                onClose={() => {
                  setactiveList((pre) => ({...pre, wasteType: false}));
                }}
              />
            </View>

            <View style={{padding: RFValue(10)}}>
              <Text
                style={[
                  FONTS.h4,
                  activeList.company
                    ? activeTextStyle
                    : {marginBottom: RFValue(4), color: nonActiveColor},
                ]}>
                Select Waste Company
              </Text>
              <DropDownPicker
                items={[
                  {
                    label: 'UK',
                    value: 'uk',
                    // icon: () => <Icon name="flag" size={18} color="#900" />,
                  },
                  {
                    label: 'France',
                    value: 'france',
                    // icon: () => <Icon name="flag" size={18} color="#900" />,
                  },
                ]}
                defaultValue={wasteType}
                containerStyle={{
                  height: RFValue(50),
                  width: RFValue(320),
                  borderRadius: RFValue(10),
                }}
                style={{
                  borderWidth: activeList.company ? 2 : 1,
                  borderColor: activeList.company
                    ? theme.COLORS.primary
                    : theme.COLORS.lightGray,
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) => setwasteType(item)}
                onOpen={() => {
                  setactiveList((pre) => ({...pre, company: true}));
                }}
                onClose={() => {
                  setactiveList((pre) => ({...pre, company: false}));
                }}
              />
            </View>

            <View style={{padding: RFValue(5)}}>
              <Text
                style={[
                  FONTS.h4,
                  {
                    color: onActive.bag ? theme.COLORS.primary : nonActiveColor,
                    paddingBottom: RFValue(5),
                  },
                ]}>
                No of bags
              </Text>
              <CustomTextInput
                placeholder="Please Write Here"
                inputType="numeric"
                icon="shopping-bag"
                iconType="FontAwesome"
                iconColor={theme.COLORS.lightGray}
                cIconPadding={10}
                cWidth={320}
                cBorderRadius={5}
                onFocus={() =>
                  setOnActive((prev) => {
                    return {...prev, bag: true};
                  })
                }
                onBlur={() =>
                  setOnActive((prev) => {
                    return {...prev, bag: false};
                  })
                }
                activeColor={onActive.bag ? theme.COLORS.primary : null}
              />
            </View>

            <View>
              <Text
                style={[
                  FONTS.h4,
                  {
                    color: show ? theme.COLORS.primary : nonActiveColor,
                    paddingBottom: RFValue(5),
                  },
                ]}>
                Pickup Time
              </Text>
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={{
                  borderColor: show
                    ? theme.COLORS.primary
                    : theme.COLORS.lightGray,
                  backgroundColor: '#FFFFFF',
                  borderRadius: RFValue(5),
                  borderWidth: 1,
                  width: RFValue(320),
                  height: RFValue(50),
                  marginBottom: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: RFValue(10),
                }}>
                <Icon
                  name="calendar"
                  type="AntDesign"
                  style={{
                    color: show ? theme.COLORS.primary : nonActiveColor,
                  }}
                />

                <Text
                  style={{
                    fontSize: RFValue(11),
                    color: show ? theme.COLORS.primary : nonActiveColor,
                    paddingLeft: RFValue(10),
                  }}>
                  Please Select From Here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <CustomButton
            //   size="lg"
            cWidth={320}
            color={theme.COLORS.primary}
            onPress={() => navigation.goBack()}>
            Add
          </CustomButton>
        </View>
      </View>

      {show && (
        <DateTimePicker
          style={{
            backgroundColor: theme.COLORS.primary,
            color: theme.COLORS.primary,
          }}
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </ScrollView>
  );
}

export default AddSpecialPickUp;
