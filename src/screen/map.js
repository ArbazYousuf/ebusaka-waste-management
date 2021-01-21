// import React, {useState, useRef, useEffect, useContext} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   PermissionsAndroid,
//   Platform,
//   Dimensions,
//   StyleSheet,
//   ActivityIndicator,
//   TextInput,
//   TouchableOpacity,
//   Modal,
//   TouchableHighlight,
// } from 'react-native';
// import {Icon, Radio} from 'native-base';
// import Geolocation from '@react-native-community/geolocation';
// import BottomSheet from 'reanimated-bottom-sheet';
// import CustomButton from '../components/CustomButton';
// // import geolocation from '@react-native-community/geolocation';
// import MapViewDirections from 'react-native-maps-directions';
// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
// import {FONTS, icons, theme} from '../constants';
// import {AppContext} from '../Context/AppProvider';
// import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

// const origin = {latitude: 24.928182, longitude: 67.1126082};

// const GOOGLE_MAPS_APIKEY = 'AIzaSyB-5FKcvAr7K72CVjQ7NzI4T2XA4MfjmHw';
// let destination = {};

// let {width, height} = Dimensions.get('window');
// const ASPECT_RATIO = width / height;

// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// function Map({navigation}) {
//   const {isOnline, setisOnline} = useContext(AppContext);

//   const getPermission = async () => {
//     // this.CheckLocation();

//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Permissions for location',
//             message: 'Give permission to your location',
//             buttonPositive: 'ok',
//           },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           CheckLocation();
//         } else {
//           return;
//         }
//       } catch (err) {
//         return;
//       }
//     }
//   };

//   const [region, setregion] = useState({
//     latitude: LATITUDE,
//     longitude: LONGITUDE,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA,
//   });

//   const bs = React.useRef();

//   const [animating, setanimating] = useState(true);

//   const [isLoading, setisLoading] = useState(false);

//   const [isCollect, setisCollect] = useState(false);

//   const [isChecked, setisChecked] = useState(false);

//   const [isModalOpen, setisModalOpen] = useState(false);

//   const CheckLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         console.log('position', position);
//         let region = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         };
//         // setregion({
//         //   latitude: position.coords.latitude,
//         //   longitude: position.coords.longitude,
//         //   latitudeDelta: LATITUDE_DELTA,
//         //   longitudeDelta: LONGITUDE_DELTA,
//         // });
//         regionChange(region);
//       },
//       (error) => console.warn(error.message),
//       {enableHighAccuracy: false, timeout: 5000, maximumAge: 10000},
//     );
//     // Geolocation.watchPosition(
//     //   (position) => {
//     //     console.log('position watch position', position);

//     //     setregion({
//     //       latitude: position.coords.latitude,
//     //       longitude: position.coords.longitude,
//     //       latitudeDelta: LATITUDE_DELTA,
//     //       longitudeDelta: LONGITUDE_DELTA,
//     //     });
//     //   },
//     //   (error) => console.warn(error.message),
//     // );
//   };

//   useEffect(() => {
//     getPermission();

//     return () => {
//       Geolocation.clearWatch();
//     };
//   }, []);

//   const onDropped = () => {
//     // this.setState({
//     //   isLoading: true,
//     // });

//     setisLoading(true);
//   };

//   // destination = {
//   //   latitude: 37.3318456,
//   //   longitude: -122.0296002,
//   // };

//   const regionChange = (region) => {
//     setregion(region);
//   };

//   const origin = {
//     latitude: 28.450627,
//     longitude: -16.263045,
//   };

//   const destination = {
//     latitude: 28.460127,
//     longitude: -16.269045,
//   };
//   return (
//     <>
//       <MapView
//         style={{width: '100%', height: '100%'}}
//         provider={PROVIDER_GOOGLE}
//         zoomEnabled={true}
//         showsUserLocation={true}
//         showsMyLocationButton={true}
//         initialRegion={region}
//         onRegionChange={regionChange}>
//         {/* <MapViewDirections
//           origin={origin}
//           destination={destination}
//           apikey={GOOGLE_MAPS_APIKEY}
//           strokeWidth={5}
//           strokeColor="black"
//         /> */}
//         <Marker coordinate={region} title={'Origin'} />
//         {/* <Marker coordinate={destination} title={'Destination'} /> */}
//       </MapView>
//       <View
//         style={{
//           position: 'absolute',
//           top: RFValue(50),
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon
//             name="cross"
//             type="Entypo"
//             style={{fontSize: RFValue(25), paddingLeft: RFValue(10)}}
//           />
//         </TouchableOpacity>
//         <Text style={[FONTS.h2, {paddingLeft: RFValue(5)}]}>
//           Pin location on Map
//         </Text>
//       </View>
//       <View
//         style={{position: 'absolute', top: RFValue(90), alignSelf: 'center'}}>
//         <DestinationSearch />
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           position: 'absolute',
//           bottom: 30,
//           justifyContent: 'center',
//           alignItems: 'center',
//           alignSelf: 'center',
//         }}>
//         <CustomButton
//           onPress={() => navigation.navigate('Home')}
//           color={theme.COLORS.primary}>
//           Confirm Pickup
//         </CustomButton>
//       </View>
//     </>
//   );
// }
// const IMAGE_SIZE = 200;

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//   },

//   search: {
//     borderColor: 'gray',
//     borderWidth: StyleSheet.hairlineWidth,
//     height: 40,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   box: {
//     width: IMAGE_SIZE,
//     height: IMAGE_SIZE,
//   },
//   panelContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   panel: {
//     height: RFValue(500),
//     padding: 20,
//     backgroundColor: theme.COLORS.white,
//   },
//   header: {
//     backgroundColor: theme.COLORS.white,
//     shadowColor: '#000000',
//     paddingTop: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   panelHeader: {
//     alignItems: 'center',
//   },
//   panelHandle: {
//     width: 40,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#00000040',
//     marginBottom: 10,
//   },
//   panelTitle: {
//     fontSize: 27,
//     height: 35,
//   },
//   panelSubtitle: {
//     fontSize: 14,
//     color: 'gray',
//     height: 30,
//     marginBottom: 10,
//   },
//   panelButton: {
//     padding: 20,
//     borderRadius: 10,
//     backgroundColor: '#318bfb',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   panelButtonTitle: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   photo: {
//     width: '100%',
//     height: 225,
//     marginTop: 30,
//   },
//   map: {
//     height: '100%',
//     width: '100%',
//   },

//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalView: {
//     // margin: 20,
//     width: RFValue(280),
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
// });
// export default Map;
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
  TouchableOpacity,
} from 'react-native';
import {Icon, Radio} from 'native-base';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import CustomButton from '../components/CustomButton';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {FONTS, icons, theme} from '../constants';
import {AppContext} from '../Context/AppProvider';
import Geocoder from 'react-native-geocoder';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB-5FKcvAr7K72CVjQ7NzI4T2XA4MfjmHw';

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function Map({navigation}) {
  Geocoder.fallbackToGoogle(GOOGLE_MAPS_APIKEY);
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

  const mapView = React.useRef();
  const autoCompleteRef = React.useRef();

  const [animating, setanimating] = useState(false);

  const [isLoading, setisLoading] = useState(false);

  const [isCollect, setisCollect] = useState(false);

  const [isChecked, setisChecked] = useState(false);
  // const [isLoading, setisLoading] = useState(false);

  const [isModalOpen, setisModalOpen] = useState(false);

  const {location, setlocation, setaddress} = useContext(AppContext);

  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: location.latitude, lng: location.longitude}},
  };
  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: location.latitude, lng: location.longitude}},
  };

  const CheckLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setregion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
        // console.log('check location', mapView.current);
        // mapView.current.animateToCoordinate(region, 1);
        setanimating(!animating);
      },
      (error) => console.warn(error.message),
      {
        // enableHighAccuracy: true, timeout: 1000, sdspeed: -1
      },
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

  // useEffect(() => {
  //   // CheckLocation();
  //   getPermission();

  //   return () => {
  //     Geolocation.clearWatch();
  //   };
  // }, []);

  const onRegionChange = async (region) => {
    // console.log('region', region);
    setisLoading(true);
    autoCompleteRef.current.clear();
    setregion((prev) => {
      region;
    });
    // setlocation(region);
  };

  const onRegionChangeComplete = async (region) => {
    let {latitude, longitude} = region;
    let ret = await Geocoder.geocodePosition({lat: latitude, lng: longitude});
    let address = await ret[0].formattedAddress;
    await setisLoading(false);
    autoCompleteRef.current.setAddressText(address);
    console.log('region', region);
    // let r = {
    //   latitude: region.latitude,
    //   longitude: region.longitude,
    //   latitudeDelta: region.latitudeDelta,
    //   longitudeDelta: region.longitudeDelta,
    // };
    console.log('r', r);
    setlocation(region);
    // setlocation((prev)=>{

    //   latitude: position.coords.latitude,
    //   longitude: position.coords.longitude,
    //   latitudeDelta: LATITUDE_DELTA,
    //   longitudeDelta: LONGITUDE_DELTA,
    // });
    setaddress(address);
  };

  const selectLocation = (data, detail) => {
    console.log('data', data);
    console.log('detail', detail);
    let {lat, lng} = detail?.geometry.location;
    console.log('detail', lat, lng);
    let r = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: LONGITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    mapView.current.animateToRegion(r, 2000);

    // setregion((prev) => ({...prev, latitude: lat, longitude: lng}));
    // console.log('region', region);
  };

  // const origin = {latitude: 37.3318456, longitude: -122.0296002};
  // const destination = {latitude: 37.771707, longitude: -122.4053769};
  return (
    <View style={styles.container}>
      {!location ? (
        <ActivityIndicator
          animating={animating}
          color={theme.COLORS.primary}
          size="large"
          style={{height: '100%', width: '100%'}}
        />
      ) : (
        <View>
          <MapView
            style={{width: '100%', height: '100%'}}
            ref={mapView}
            onRegionChange={onRegionChange}
            // showsUserLocation={true}
            showsMyLocationButton={true}
            // region={region}
            initialRegion={location}
            // showsCompass={true}
            onRegionChangeComplete={onRegionChangeComplete}
            zoomEnabled={true}>
            {/* <MapView.Marker
              coordinate={region}
              draggable
              onDragEnd={(t, map, coords) => setDestination(coords)}
              coordinate={region}
              position={region}
              centerOffset={{x: -18, y: -60}}
              anchor={{x: 0.69, y: 1}}
              pinColor={COLOR.marker}
              onDragStart={() => setMarkerPosition()}>
              <Image
                source={icons.mapMarker}
                resizeMode="contain"
                style={{height: RFValue(35), width: RFValue(35)}}
              />
            </MapView.Marker> */}

            {/* <MapViewDirections
              origin={origin}
              destination={destination}
              // waypoints={[destination]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="red"
            /> */}
            {/* <MapView.Marker coordinate={destination}>
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
          <View
            style={{
              left: '50%',
              marginLeft: -24,
              marginTop: -48,
              position: 'absolute',
              top: RFPercentage(52),
            }}>
            <Image
              style={{height: 48, width: 48}}
              resizeMode="contain"
              source={icons.mapMarker}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              top: RFValue(50),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="cross"
                type="Entypo"
                style={{fontSize: RFValue(25), paddingLeft: RFValue(10)}}
              />
            </TouchableOpacity>
            <Text style={[FONTS.h2, {paddingLeft: RFValue(5)}]}>
              Pin location on Map
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              top: RFValue(90),
              alignSelf: 'center',
              width: '100%',
            }}>
            {isLoading && (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  top: 20,
                  alignSelf: 'center',
                }}>
                <ActivityIndicator color={theme.COLORS.primary} size="large" />
              </View>
            )}
            <GooglePlacesAutocomplete
              ref={autoCompleteRef}
              multiline={true}
              enableHighAccuracyLocation={true}
              placeholder="Search"
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              listViewDisplayed={false} // true/false/undefined
              fetchDetails={true}
              renderDescription={(row) => row.description} // custom description render
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                selectLocation(data, details);
              }}
              getDefaultValue={() => ''}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyB-5FKcvAr7K72CVjQ7NzI4T2XA4MfjmHw',
                language: 'en', // language of the results
                // types: 'address', // default: 'geocode'
                components: 'country:pk,zm',
              }}
              styles={{
                textInputContainer: {
                  height: '100%',
                },
                textInput: {
                  paddingLeft: RFValue(30),
                  height: RFValue(80),
                },

                textInputContainer: {
                  width: '90%',
                  alignItems: 'center',
                  alignSelf: 'center',
                  // borderRadius: 30,
                },

                listView: {
                  width: '90%',
                  alignSelf: 'center',
                },
                description: {
                  fontWeight: 'bold',
                },
                predefinedPlacesDescription: {
                  color: '#1faadb',
                },
              }}
              renderLeftButton={() => (
                <View
                  style={{
                    position: 'absolute',
                    top: RFValue(35),
                    width: 15,
                    height: 15,
                    borderColor: theme.COLORS.primary,
                    borderWidth: 2,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    zIndex: 1,
                    left: RFValue(10),
                  }}></View>
              )}
              renderRightButton={() => (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    // top: 100,
                    // position: 'absolute',
                    // zIndex: 1,
                  }}>
                  <Icon
                    name="search"
                    type="EvilIcons"
                    style={{
                      position: 'absolute',
                      alignSelf: 'center',
                      right: 30,
                    }}
                  />
                </View>
              )}
              enablePoweredByContainer={false}
              currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
              currentLocationLabel="Current location"
              nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GoogleReverseGeocodingQuery={
                {
                  // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }
              }
              // GooglePlacesSearchQuery={{
              //   // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              //   rankby: 'distance',
              //   types: 'food',
              // }}
              // filterReverseGeocodingByTypes={[
              //   'locality',
              //   'administrative_area_level_3',
              // ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
              predefinedPlaces={[homePlace, workPlace]}
              debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
              // renderLeftButton={() => (
              //   <Image source={require('path/custom/left-icon')} />
              // )}
            />
            {/* <Button
        title="refff"
        onPress={() => re.current.setAddressText('testtingg')}
      /> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: 30,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <CustomButton
              onPress={() => navigation.navigate('Home')}
              color={theme.COLORS.primary}>
              Confirm Pickup
            </CustomButton>
          </View>
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
