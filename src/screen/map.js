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
import Geolocation from '@react-native-community/geolocation';
import BottomSheet from 'reanimated-bottom-sheet';
import CustomButton from '../components/CustomButton';
// import geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {FONTS, icons, theme} from '../constants';
import {AppContext} from '../Context/AppProvider';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import DestinationSearch from '../components/DestinationSearch';

const origin = {latitude: 24.928182, longitude: 67.1126082};

const GOOGLE_MAPS_APIKEY = 'AIzaSyB1KoK7KQe0YzwScTNjC7lHRSi7my056bk';
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

  // destination = {
  //   latitude: 37.3318456,
  //   longitude: -122.0296002,
  // };

  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  };
  return (
    <>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="black"
        />
        <Marker coordinate={origin} title={'Origin'} />
        <Marker coordinate={destination} title={'Destination'} />
      </MapView>
      <View style={{position: 'absolute'}}>
        <DestinationSearch />
      </View>
    </>
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
