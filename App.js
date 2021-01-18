import React, {useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {images} from './src/constants';
import RootNavigation from './src/navigation/RootNavigation';
import {AppProvider} from './src/Context/AppProvider';
import {Provider} from 'react-redux';
import Store from './src/redux/store';
import {PermissionsAndroid, Platform, Dimensions} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function App() {
  const [location, setlocation] = useState('');
  const [isOnline, setisOnline] = useState(false);

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
      (position) => {
        setlocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
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
  };

  React.useEffect(() => {
    getPermission();

    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <AppProvider value={{isOnline, location, setisOnline, setlocation}}>
          <RootNavigation />
        </AppProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;
