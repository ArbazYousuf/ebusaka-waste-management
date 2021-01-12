import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import {theme, FONTS, icons} from '../constants';
import CustomTextInput from '../components/CustomTextInput';
import DropDownPicker from 'react-native-custom-dropdown';

const PaymentButton = ({color, text, isChecked, image}) => {
  return (
    <View
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
        }}></View>
    </View>
  );
};

function Subscription() {
  const [nonActiveColor, setactiveColor] = useState(theme.COLORS.lightGray);
  const [wasteType, setwasteType] = useState('');
  const [onActive, setOnActive] = useState({
    name: false,
    bag: false,
  });
  const [activeList, setactiveList] = useState({
    wasteType: false,
    company: false,
  });

  const activeTextStyle = {
    marginBottom: RFValue(4),
    color: theme.COLORS.primary,
  };
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
              placeholder="Please Write Here"
              inputType="default"
              icon="user"
              iconType="FontAwesome"
              iconColor={theme.COLORS.lightGray}
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
      <View style={{height: 400}}>
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
            height: RFValue(280),
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
              cWidth={320}
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
            <PaymentButton color="#0C54A8" image={icons.visa} />
            <PaymentButton color="#70A12F" text="Wallet Account" />
            <PaymentButton color="#FE9900" text="Mobile Money" />
          </View>
        </View>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <CustomButton
          //   size="lg"
          cWidth={320}
          color={theme.COLORS.primary}
          onPress={() => navigation.navigate('VerifyCode')}>
          Subscribe
        </CustomButton>
      </View>
    </View>
  );
}

export default Subscription;
