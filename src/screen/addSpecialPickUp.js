import React, {useState, useContext, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../components/CustomButton';
import {theme, FONTS, icons} from '../constants';
import CustomTextInput from '../components/CustomTextInput';
import DropDownPicker from 'react-native-custom-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import MapBox from '../components/MapBox';
import {AppContext} from '../Context/AppProvider';
import {AsyncPostSp} from '../redux/actions/asyncJob';
import {useDispatch, useSelector} from 'react-redux';
import CustomModal from '../components/modal';
import {unwrapResult} from '@reduxjs/toolkit';

function AddSpecialPickUp({navigation, route}) {
  const [nonActiveColor, setactiveColor] = useState(theme.COLORS.lightGray);
  const [wasteType, setwasteType] = useState('');
  const [onActive, setOnActive] = useState({
    name: false,
    bag: false,
  });
  const [show, setShow] = useState(false);
  const [time, setTime] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [activeList, setactiveList] = useState({
    wasteType: false,
    company: false,
    weight: false,
  });
  const [selectedComapny, setselectedComapny] = useState('');
  const [selectedWaste, setselectedWaste] = useState('');
  const [noOfBags, setnoOfBags] = useState(0);
  const [weight, setweight] = useState(0);
  const [selectedTime, setselectedTime] = useState('');
  const [companies, setcompanies] = useState([]);
  const [name, setname] = useState('');
  const [openModal, setopenModal] = useState(false);

  const {address, location} = useContext(AppContext);
  const dispatch = useDispatch();
  const Jobs = useSelector((state) => state.Jobs);
  const Auth = useSelector((state) => state.Auth);

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShow(Platform.OS === 'ios');
    setTime(currentTime);
    setselectedTime(currentTime);
  };

  useEffect(() => {
    let companies = Jobs.companies.map(({_id, name}) => ({
      label: name,
      value: _id,
    }));
    setcompanies(companies);
  }, []);

  const handleModal = () => {
    setopenModal(!openModal);
  };
  console.log('address', address);

  const onSubmitSpecial = () => {
    // console.warn(address, location);

    // "user": "5ffd9c7174ab7b3bc22c27e2",
    // "fullname": "Muhammad Arbaz",
    // "direction": {
    //     "address": "76 Block 2",
    //     "coordinates": ["1212","1222"]
    // },
    // "weight": "20",
    // "note": "hellow everyone",
    // "waste_type": "chemical",
    // "company": "id",
    // "subscription_id":"dfdfd",
    //     "no_of_bags": 10

    let obj = {
      data: {
        user: Auth?.user?._id,
        fullname: name,
        direction: {
          address,
          coordinates: location,
        },
        weight,
        note: 'hellow everyone',
        waste_type: selectedWaste?.value,
        company: selectedComapny?.value,
        subscription_id: 'testing',
        no_of_bags: noOfBags,
        time: time,
        date: route?.params?.date,
      },
      token: Auth?.token,
      nav: navigation,
    };

    dispatch(AsyncPostSp(obj))
      .then(unwrapResult)
      .then((res) => {
        console.log('res', res);
        if (res.success) {
          handleModal();
          setname((prev) => '');
          setselectedComapny((prev) => '');
          setnoOfBags((prev) => 0);
          setweight((prev) => 0);
        }
      });
  };

  const activeTextStyle = {
    marginBottom: RFValue(4),
    color: theme.COLORS.primary,
  };
  console.log(noOfBags);
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

        <View style={{justifyContent: 'center'}}>
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
                onChangeText={(text) => setname(text)}
                cBorderRadius={5}
                cIconPadding={10}
                cWidth={320}
                value={name}
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
                  // backgroundColor: theme.COLORS.primary,
                  margin: RFValue(5),
                  borderRadius: RFValue(5),
                }}>
                <MapBox />
              </View>
            </View>
          </View>
        </View>
        <View style={{marginBottom: 30}}>
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
                    label: 'Wet',
                    value: 'Wet',
                    // icon: () => <Icon name="flag" size={18} color="#900" />,
                  },
                  {
                    label: 'Plastic',
                    value: 'Plastic',
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
                onChangeItem={(item) => setselectedWaste(item)}
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
                items={companies || []}
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
                onChangeItem={(item) => setselectedComapny(item)}
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
                onChangeText={(num) => setnoOfBags(num)}
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
                value={noOfBags}
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
                  {selectedTime
                    ? moment(selectedTime).format('hh:mm')
                    : '  Please Select From Here'}
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
            onPress={onSubmitSpecial}>
            {Jobs.isLoading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              'Add'
            )}
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
          value={time}
          mode="time"
          // is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <CustomModal
        mainHeading="Job Posted Successfully"
        subHeading="Special job Added"
        handleModal={handleModal}
        visible={openModal}
        buttonText="Continue"
      />
    </ScrollView>
  );
}

export default AddSpecialPickUp;
