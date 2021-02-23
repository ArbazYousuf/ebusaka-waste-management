import React, {useState, useEffect, useContext} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {theme, FONTS, icons} from '../constants';
import CustomTextInput from '../components/CustomTextInput';
import DropDownPicker from 'react-native-custom-dropdown';
import MapBox from '../components/MapBox';
import {useDispatch, useSelector} from 'react-redux';
import {AppContext} from '../Context/AppProvider';
import {AsyncPostSub, AsyncGetCompanies} from '../redux/actions/asyncJob';
import CustomModal from '../components/modal';
// import {AsyncGetCompanies} from '../redux/actions/asyncJob';
import {unwrapResult} from '@reduxjs/toolkit';

const PaymentButton = ({color, text, isChecked, image, onChange}) => {
  return (
    <TouchableOpacity
      onPress={() => onChange(text ? text : 'visa')}
      style={{
        width: RFValue(320),
        height: RFValue(50),
        borderRadius: 40,
        backgroundColor: color,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: RFValue(10),
      }}>
      <View style={{flex: 0.8}}>
        {image ? (
          <Image
            source={image}
            resizeMode="contain"
            style={{width: RFValue(100), height: RFValue(25)}}
          />
        ) : (
          <Text
            style={[
              {
                color: theme.COLORS.white,
                fontFamily: 'Poppins-Bold',
                fontWeight: '600',
                fontSize: RFValue(20),
                paddingLeft: RFValue(14),
              },
            ]}>
            {text}
          </Text>
        )}
      </View>

      <View
        style={{
          width: RFValue(25),
          height: RFValue(25),
          borderRadius: RFValue(12),
          //   backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isChecked && (
          <View
            style={{
              width: RFValue(15),
              height: RFValue(15),
              borderRadius: RFValue(8),
              backgroundColor: 'white',
            }}></View>
        )}
      </View>
    </TouchableOpacity>
  );
};

function Subscription({navigation, route}) {
  const [nonActiveColor, setactiveColor] = useState(theme.COLORS.lightGray);
  const [wasteType, setwasteType] = useState('');
  const [selectedComapny, setselectedComapny] = useState('');
  const [selectedWaste, setselectedWaste] = useState('');
  const [noOfBags, setnoOfBags] = useState(0);
  const [weight, setweight] = useState(0);
  const [onActive, setOnActive] = useState({
    name: false,
    bag: false,
  });
  const [name, setname] = useState('');
  const [companies, setcompanies] = useState([]);
  const [paymentMethod, setpaymentMethod] = useState('visa');
  const [activeList, setactiveList] = useState({
    wasteType: false,
    company: false,
    weight: false,
  });
  const [openModal, setopenModal] = useState(false);
  const {address, location} = useContext(AppContext);
  const dispatch = useDispatch();
  const Jobs = useSelector((state) => state.Jobs);
  const Auth = useSelector((state) => state.Auth);

  const onSubmitSubscribe = () => {
    console.warn(address, location);
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
      },
      token: Auth?.token,
      nav: navigation,
    };

    dispatch(AsyncPostSub(obj))
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

  const handleModal = () => {
    setopenModal(!openModal);
  };

  // const [companies, setcompanies] = useState([]);
  const activeTextStyle = {
    marginBottom: RFValue(4),
    color: theme.COLORS.primary,
  };

  const paymentChange = (method) => {
    setpaymentMethod(method);
  };
  // console.log(location);
  console.log('address', address);
  useEffect(() => {
    if (Jobs?.companies.length > 0) {
      let companies =
        Jobs.companies &&
        Jobs.companies.map(({_id, name}) => ({
          label: name,
          value: _id,
        }));
      setcompanies(companies);
    }
  }, [navigation]);

  console.log('state---', address);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* <Header onChange={(val) => console.warn(val)} /> */}
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
                  color: onActive.name ? theme.COLORS.primary : nonActiveColor,
                  paddingBottom: RFValue(5),
                },
              ]}>
              Full Name*
            </Text>
            <CustomTextInput
              value={name}
              placeholder="Please Write Here"
              inputType="default"
              icon="user"
              iconType="FontAwesome"
              iconColor={theme.COLORS.lightGray}
              cBorderRadius={5}
              cIconPadding={10}
              onChangeText={(text) => setname(text)}
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
      <View style={{}}>
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
                  value: 'wet',
                  // icon: () => <Icon name="flag" size={18} color="#900" />,
                },
                {
                  label: 'Plastic',
                  value: 'plastic',
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

          {/* <View style={{padding: RFValue(10)}}>
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
              items={companies}
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
          </View> */}

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
              value={noOfBags}
              placeholder="Please Write Here"
              onChangeText={(num) => setnoOfBags(num)}
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
          <View style={{padding: RFValue(5)}}>
            <Text
              style={[
                FONTS.h4,
                {
                  color: onActive.weight
                    ? theme.COLORS.primary
                    : nonActiveColor,
                  paddingBottom: RFValue(5),
                },
              ]}>
              Approximately Weight
            </Text>
            <CustomTextInput
              value={weight}
              placeholder="Please Write Here"
              onChangeText={(num) => setweight(num)}
              inputType="numeric"
              icon="shopping-bag"
              iconType="FontAwesome"
              iconColor={theme.COLORS.lightGray}
              cIconPadding={10}
              cWidth={320}
              cBorderRadius={5}
              onFocus={() =>
                setOnActive((prev) => {
                  return {...prev, weight: true};
                })
              }
              onBlur={() =>
                setOnActive((prev) => {
                  return {...prev, weight: false};
                })
              }
              activeColor={onActive.weight ? theme.COLORS.primary : null}
            />
          </View>
        </View>
      </View>
      <View style={{height: 400, justifyContent: 'center'}}>
        <View style={{padding: RFValue(10)}}>
          <Text style={[FONTS.h3, {}]}>Payment Method</Text>
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
            // alignItems: 'center',
          }}>
          <View style={{padding: RFValue(10), paddingHorizontal: RFValue(20)}}>
            <Text style={[FONTS.h4, {color: nonActiveColor}]}>
              Select Payment Method
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <PaymentButton
              color="#0C54A8"
              image={icons.visa}
              onChange={paymentChange}
              isChecked={paymentMethod == 'visa' ? true : false}
            />
            <PaymentButton
              color="#70A12F"
              text="Wallet Account"
              onChange={paymentChange}
              isChecked={paymentMethod == 'Wallet Account' ? true : false}
            />
            <PaymentButton
              color="#FE9900"
              text="Mobile Money"
              onChange={paymentChange}
              isChecked={paymentMethod == 'Mobile Money' ? true : false}
            />
          </View>
        </View>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <CustomButton
          cWidth={320}
          color={theme.COLORS.primary}
          onPress={onSubmitSubscribe}>
          {Jobs.isLoading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            'Subscribe'
          )}
        </CustomButton>
        <CustomModal
          mainHeading="Subscription Activated Successfully"
          subHeading="subscription created !"
          buttonText="Continue"
          handleModal={handleModal}
          visible={openModal}
        />
      </View>
    </View>
  );
}

export default Subscription;
