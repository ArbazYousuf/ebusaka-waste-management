import React, {useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {images} from './src/constants';
import RootNavigation from './src/navigation/RootNavigation';
import {AppProvider} from './src/Context/AppProvider';
import {Provider} from 'react-redux';
import Store from './src/redux/store';
import {
  PermissionsAndroid,
  Platform,
  Dimensions,
  LogBox,
  YellowBox,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Geocoder from 'react-native-geocoder';
// LogBox.ignoreLogs('WARNINGS');
// YellowBox.ignoreWarnings(['']);
let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function App() {
  const [location, setlocation] = useState('');
  const [isOnline, setisOnline] = useState(false);
  const [address, setaddress] = useState('');

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

  const CheckLocation = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        setlocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });

        let ret = await Geocoder.geocodePosition({
          lat: location.latitude,
          lng: location.longitude,
        });
        let address = await ret[0].formattedAddress;
        setaddress(address);

        // console.log('check location', mapView.current);
        // mapView.current.animateToCoordinate(region, 1);
        // setanimating(!animating);
      },
      (error) => console.warn(error.message),
      {
        // enableHighAccuracy: true, timeout: 1000, sdspeed: -1
      },
    );
    // Geolocation.watchPosition(
    //   (position) => {
    //     setregion({
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //       latitudeDelta: LATITUDE_DELTA,
    //       longitudeDelta: LONGITUDE_DELTA,
    //     });
    //   },
    //   (error) => console.warn(error.message),
    // );

    // let ret = await Geocoder.geocodePosition({
    //   lat: location.latitude,
    //   lng: location.longitude,
    // });
    // let address = await ret[0].formattedAddress;
    // setaddress(address);
  };
  let persistor = persistStore(Store);

  React.useEffect(() => {
    getPermission();

    SplashScreen.hide();
  }, []);
  console.log('location', location);
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppProvider
            value={{
              isOnline,
              location,
              setisOnline,
              setlocation,
              address,
              setaddress,
            }}>
            <RootNavigation />
          </AppProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;
