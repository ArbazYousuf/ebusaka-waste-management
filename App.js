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
  Text,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Geocoder from 'react-native-geocoder';
import OneSignal from 'react-native-onesignal';
// LogBox.ignoreLogs('WARNINGS');
// YellowBox.ignoreWarnings(['']);
let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// LogBox.ignoreAllLogs();
function App() {
  const [location, setlocation] = useState('');
  const [isOnline, setisOnline] = useState(false);
  const [address, setaddress] = useState('');
  const [loading, setloading] = useState(false);

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
    // setloading(true);
    console.log('cehckkk location-------');
    Geolocation.getCurrentPosition(
      async (position) => {
        setlocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });

        let ret = await Geocoder.geocodePosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log('ret', ret);
        let address = await ret[0].formattedAddress;
        setaddress(address);
        // setloading(false);
        // console.log('check location', mapView.current);
        // mapView.current.animateToCoordinate(region, 1);
        // setanimating(!animating);
      },
      (error) => {
        // setloading(false);

        console.warn(error.message);
      },
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

  React.useEffect(async () => {
    getPermission();

    SplashScreen.hide();

    /* O N E S I G N A L   S E T U P */
    OneSignal.setAppId('66fc683b-7eb5-4186-8f04-af71ce56f49a');
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(this.state.requiresPrivacyConsent);
    OneSignal.promptForPushNotificationsWithUserResponse((response) => {
      this.OSLog('Prompt response:', response);
    });

    /* O N E S I G N A L  H A N D L E R S */
    OneSignal.setNotificationWillShowInForegroundHandler(
      (notifReceivedEvent) => {
        this.OSLog(
          'OneSignal: notification will show in foreground:',
          notifReceivedEvent,
        );
        let notif = notifReceivedEvent.getNotification();

        const button1 = {
          text: 'Cancel',
          onPress: () => {
            notifReceivedEvent.complete();
          },
          style: 'cancel',
        };

        const button2 = {
          text: 'Complete',
          onPress: () => {
            notifReceivedEvent.complete(notif);
          },
        };

        Alert.alert('Complete notification?', 'Test', [button1, button2], {
          cancelable: true,
        });
      },
    );
    OneSignal.setNotificationOpenedHandler((notification) => {
      this.OSLog('OneSignal: notification opened:', notification);
    });
    OneSignal.setInAppMessageClickHandler((event) => {
      this.OSLog('OneSignal IAM clicked:', event);
    });
    OneSignal.addEmailSubscriptionObserver((event) => {
      this.OSLog('OneSignal: email subscription changed: ', event);
    });
    OneSignal.addSubscriptionObserver((event) => {
      this.OSLog('OneSignal: subscription changed:', event);
      this.setState({isSubscribed: event.to.isSubscribed});
    });
    OneSignal.addPermissionObserver((event) => {
      this.OSLog('OneSignal: permission changed:', event);
    });

    const deviceState = await OneSignal.getDeviceState();

    console.warn('state', deviceState);
  }, []);
  console.log('location', location, {address});
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <PersistGate loading={false} persistor={persistor}>
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
