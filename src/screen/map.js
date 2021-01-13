import React, {useState, useRef, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  PermissionsAndroid,
  Platform,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {Icon, Radio} from 'native-base';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import BottomSheet from 'reanimated-bottom-sheet';
import CustomButton from '../components/CustomButton';
// import geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Container, Item, Input, Button} from 'native-base';
import {FONTS, icons, theme} from '../constants';
import Header from '../components/header';
import CustomRadioButton from '../components/CustomRadioButton';
import {AppContext} from '../Context/AppProvider';

const origin = {latitude: 24.928182, longitude: 67.1126082};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDDz6y1LLiSO-IWZUhTZkOjoc9hGBDkH_s';
let destination = {};

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function Map({navigation}) {
  const {isOnline, setisOnline} = useContext(AppContext);

  const getPermission = async () => {
    // this.CheckLocation();

    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissions for location',
            message: 'Give permission to your location',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          CheckLocation();
        } else {
          return;
        }
      } catch (err) {
        return;
      }
    }
  };

  const [region, setregion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const bs = React.useRef();

  const [animating, setanimating] = useState(true);

  const [isLoading, setisLoading] = useState(false);

  const [isCollect, setisCollect] = useState(false);

  const [isChecked, setisChecked] = useState(false);

  const [isModalOpen, setisModalOpen] = useState(false);

  const CheckLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setregion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      },
      (error) => console.warn(error.message),
      {enableHighAccuracy: true, timeout: 1000, sdspeed: -1},
    );
    Geolocation.watchPosition(
      (position) => {
        setregion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      },
      (error) => console.warn(error.message),
    );
  };

  useEffect(() => {
    getPermission();

    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  const onDropped = () => {
    // this.setState({
    //   isLoading: true,
    // });

    setisLoading(true);
  };

  const renderInnerCollected = () => {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          height: RFValue(300),
          width: RFValue(320),
          backgroundColor: theme.COLORS.white,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F7F7F7',
          }}>
          <View
            style={{
              width: RFValue(40),
              height: RFValue(40),
              borderRadius: RFValue(20),
              backgroundColor: theme.COLORS.primary,
              margin: RFValue(20),
            }}></View>
          <View
            style={{
              marginTop: RFValue(20),
            }}>
            <Text>Gregory Smith</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="trash"
                type="EvilIcons"
                style={{color: theme.COLORS.primary}}
              />
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                50Kg
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: RFValue(20),
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity>
              {/* <Image
                source={icons.call}
                style={{width: RFValue(40), height: RFValue(40), margin: 5}}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
              <Image
                source={icons.message}
                style={{width: RFValue(40), height: RFValue(40), margin: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 100, padding: RFValue(5)}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', padding: 10}}
            // onPress={() => this.setState({isChecked: !isChecked})}>
            onPress={() => setisChecked((prevState) => !prevState)}>
            <CustomRadioButton isChecked={isChecked} />
            <Text style={[FONTS.p, {marginLeft: RFValue(10)}]}>
              7958 Swift Village
            </Text>
          </TouchableOpacity>

          <View
            style={{borderColor: '#F2F2F2', borderBottomWidth: RFValue(1)}}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <CustomButton
              cWidth={250}
              color={theme.COLORS.primary}
              // onPress={() => this.setState({isModalOpen: true})}>
              onPress={() => setisModalOpen(true)}>
              Collected
            </CustomButton>
          </View>
        </View>
      </View>
    );
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: theme.COLORS.primary,
            borderRadius: 20,
            width: RFValue(40),
            height: RFValue(40),
            alignItems: 'center',
            justifyContent: 'center',
            // flexDirection: 'row',
          }}>
          <Text style={[FONTS.h4, {color: theme.COLORS.white}]}>A</Text>
        </View>
        <View style={{paddingHorizontal: RFValue(20)}}>
          <Text style={[FONTS.p, {color: theme.COLORS.gray}]}>Collect at</Text>
          <Text style={[FONTS.h4, {color: theme.COLORS.gray}]}>
            7958 Swift Village
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#F2F2F2',
          borderBottomWidth: RFValue(1),
          paddingTop: RFValue(15),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingTop: RFValue(20),
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[FONTS.p, {color: theme.COLORS.gray}]}>EST</Text>
          <Text>0 min</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[FONTS.p, {color: theme.COLORS.gray}]}>Distance</Text>
          <Text>0 min</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[FONTS.p, {color: theme.COLORS.gray}]}>Garbage</Text>
          <Text>0 min</Text>
        </View>
      </View>
      <View style={{paddingTop: RFValue(20)}}>
        <CustomButton
          color={theme.COLORS.primary}
          size="lg"
          // onPress={() => this.setState({isCollect: !this.state.isCollect})}>
          onPress={() => setisCollect((prevState) => !prevState)}>
          Collect Now
        </CustomButton>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View
        style={{
          zIndex: 1,
          position: 'absolute',
          width: RFValue(50),
          height: RFValue(50),
          backgroundColor: theme.COLORS.primary,
          alignSelf: 'flex-end',
          bottom: RFValue(20),
          right: RFValue(10),
          borderRadius: RFValue(50),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="location" type="EvilIcons" style={{color: 'white'}} />
      </View>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  destination = {
    latitude: 37.3318456,
    longitude: -122.0296002,
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        isOnline={isOnline}
        setisOnline={setisOnline}
        name={isCollect ? 'Collected' : 'Pickup'}
      />
      {isModalOpen && (
        <Modal
          animationType="fade"
          transparent={isModalOpen}
          visible={true}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{marginBottom: RFValue(5)}}>
                <Image source={icons.camera} style={{width: 70, height: 70}} />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    FONTS.h3,
                    {
                      marginBottom: RFValue(5),
                    },
                  ]}>
                  Upload Photo
                </Text>
                <Text
                  style={[
                    FONTS.p,
                    {textAlign: 'center', marginBottom: RFValue(20)},
                  ]}>
                  Please upload picture or take picture for confirmation.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: RFValue(5),
                  }}>
                  <CustomButton
                    cWidth={120}
                    invisisble={true}
                    color={theme.COLORS.primary}>
                    Upload Picture
                  </CustomButton>
                  <CustomButton
                    cWidth={120}
                    invisisble={true}
                    color={theme.COLORS.primary}>
                    Take Picture
                  </CustomButton>
                </View>
                <CustomButton
                  cWidth={250}
                  color={theme.COLORS.primary}
                  onPress={() => setisModalOpen(false)}>
                  Confirm
                </CustomButton>
              </View>
            </View>
          </View>
        </Modal>
      )}

      {!animating ? (
        <ActivityIndicator
          animating={animating}
          color="#bc2b78"
          size="large"
          style={{height: '100%', width: '100%'}}
        />
      ) : (
        <View>
          <MapView
            style={{width: '100%', height: '100%'}}
            // ref={this.handleRef}
            zoomEnabled={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
            region={region}
            zoomEnabled={true}>
            <MapView.Marker coordinate={region}>
              <Image source={icons.mapMarker} style={{height: 35, width: 35}} />
            </MapView.Marker>
            {/* 
              <MapViewDirections
                origin={this.state.region}
                destination={destination}
                waypoints={[destination]}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="red"
              />
              <MapView.Marker coordinate={destination}>
                <Icon
                  name="location"
                  type="Entypo"
                  style={{
                    fontSize: 30,
                    height: 35,
                    width: 40,
                    color: '#0c233c',
                  }}
                />
              </MapView.Marker> */}
          </MapView>
          {/* <View
              style={{
                width: RFValue(300),
                height: RFValue(500),
                backgroundColor: 'red',
              }}>
              <Text>hbjfjfewjfbewj</Text>
            </View> */}
          {!isCollect && (
            <BottomSheet
              ref={bs}
              snapPoints={['30%', '80%', '85%']}
              renderContent={renderInner}
              renderHeader={renderHeader}
              initialSnap={1}
              enabledBottomInitialAnimation={true}
              enabledInnerScrolling={false}
            />
          )}

          {isCollect && (
            <BottomSheet
              ref={bs}
              snapPoints={['40%', '40%']}
              renderContent={renderInnerCollected}
              initialSnap={1}
              borderRadius={50}
              enabledBottomInitialAnimation={true}
              enabledInnerScrolling={false}
            />
          )}
        </View>
      )}
    </View>
  );
}
const IMAGE_SIZE = 200;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },

  search: {
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: RFValue(500),
    padding: 20,
    backgroundColor: theme.COLORS.white,
  },
  header: {
    backgroundColor: theme.COLORS.white,
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  photo: {
    width: '100%',
    height: 225,
    marginTop: 30,
  },
  map: {
    height: '100%',
    width: '100%',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    // margin: 20,
    width: RFValue(280),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default Map;
