import React, {useContext, useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {FONTS, icons, theme} from '../constants';
import {Image, Platform, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {AppContext} from '../Context/AppProvider';
import Geolocation from '@react-native-community/geolocation';
import CustumeMap from '../utils/custumeMap';
import CustomButton from '../components/CustomButton';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB1KoK7KQe0YzwScTNjC7lHRSi7my056bk';

const MapBox = (props) => {
  const {location, setlocation} = useContext(AppContext);
  const [isLocation, setisLocation] = useState('');
  console.log(location);

  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  };

  useEffect(() => {
    if (location) {
      setisLocation(true);
    } else {
      setisLocation(false);
      getPermission();
    }
  }, []);

  // console.warn(location);

  const getPermission = async () => {
    // this.CheckLocation();
    // alert('hello');

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

        alert('passed');

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          alert('passed');
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

  return isLocation ? (
    <>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={location}
        customMapStyle={CustumeMap}
        //   initialCamera={location}
        //   camera={location}
      >
        <MapView.Marker coordinate={location ? location : origin}>
          <Image
            source={icons.mapMarker}
            resizeMode="contain"
            style={{height: RFValue(35), width: RFValue(35)}}
          />
        </MapView.Marker>
        {/* <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
        coordinate={origin}
        title={'Origin'}
      />
      <Marker
        coordinate={destination}
        title={"Destination"}
      /> */}
      </MapView>
    </>
  ) : (
    // getPermission()
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: theme.COLORS.primary,
        // width:RFValue
      }}>
      {/* <Text style={[FONTS.h3, {color: theme.COLORS.primary}]}>
        Enable Location
      </Text> */}
      <CustomButton
        color={theme.COLORS.primary}
        onPress={() => getPermission()}
        size="sm">
        Enable Location
      </CustomButton>
    </View>
  );
};

export default MapBox;
