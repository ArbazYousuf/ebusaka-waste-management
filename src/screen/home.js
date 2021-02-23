import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {theme, images, icons, FONTS} from '../constants';
import SafeAreaView from 'react-native-safe-area-view';
import {TextInput} from 'react-native-gesture-handler';
import OrderComponent from '../components/OrderComponent';
import {AppContext} from '../Context/AppProvider';
import {useSelector, useDispatch} from 'react-redux';
import {
  AsyncGetCompanies,
  AsyncGetMySubscription,
} from '../redux/actions/asyncJob';
// import {unwrapResult} from '@reduxjs/toolkit';
export default function Home({navigation}) {
  const {location} = useContext(AppContext);
  let Auth = useSelector((state) => state.Auth);
  let Jobs = useSelector((state) => state.Jobs);
  let dispatch = useDispatch();
  // const [companies, setcompanies] = useState([]);

  console.warn(Auth);
  console.warn(location);

  useEffect(() => {
    dispatch(AsyncGetCompanies());
    dispatch(AsyncGetMySubscription());
    // .then(unwrapResult)
    // .then((res) => {
    //   console.log('res', res);
    //   setcompanies(res?.company);
    // });

    // return () => {
    // }
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.backColor}}>
      <StatusBar
        // translucent={true}
        backgroundColor={'white'}
        barStyle="default"
      />
      <View style={styles.Container}>
        <View
          style={{
            margin: RFValue(20),
            marginTop: RFValue(30),
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: 'Roboto-Regular',
                color: '#2D2D2D',
              }}>
              Hi, {Auth?.user?.fullname}
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
                // backgroundColor: theme.COLORS.primary,
                borderRadius: RFValue(25),
              }}>
              <Image
                source={{uri: Auth?.user?.picture}}
                resizeMode="contain"
                style={{
                  flex: 1,
                  height: undefined,
                  width: undefined,
                  borderRadius: 25,
                }}
              />
            </View>
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
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              elevation: 7,
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
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderHistory')}
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
          </TouchableOpacity>
        </View>
        <View style={{margin: RFValue(20)}}>
          <Text style={{fontSize: RFValue(16), fontFamily: 'Roboto-Bold'}}>
            Our Services
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('GarbageServices')}
            style={{marginTop: RFValue(20)}}>
            <View
              style={{
                width: RFValue(90),
                height: RFValue(120),
                borderRadius: RFValue(20),
                backgroundColor: '#2AC17C',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={images.garbage}
                style={{width: RFValue(50), height: RFValue(50)}}
              />
              <Text
                style={[
                  FONTS.h4,
                  {color: theme.COLORS.white, textAlign: 'center'},
                ]}>
                Garbage Services
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{margin: RFValue(20)}}>
          <Text style={{fontSize: RFValue(16), fontFamily: 'Roboto-Bold'}}>
            Active Subscription
          </Text>
        </View>

        {Jobs.isLoading ? (
          <ActivityIndicator color={theme.COLORS.primary} size="large" />
        ) : (
          <FlatList
            data={Jobs.mySubscriptions}
            renderItem={({item, index}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <OrderComponent {...item} />
              </View>
            )}
          />
        )}
      </View>
      {/* <View style={{flex: 0.1}} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
