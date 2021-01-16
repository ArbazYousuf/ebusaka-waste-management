import {Icon} from 'native-base';
// import React, {useState, useEffect} from 'react';
// import {View, TextInput, SafeAreaView} from 'react-native';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {RFValue} from 'react-native-responsive-fontsize';
import {theme} from '../constants';
// import Geolocation from '@react-native-community/geolocation';

// // import styles from './styles.js';

// const DestinationSearch = ({onSelect}) => {
//   const [originPlace, setOriginPlace] = useState(null);
//   const [destinationPlace, setDestinationPlace] = useState(null);

//   useEffect(() => {
//     console.warn('useEffect is called');
//     if (originPlace && destinationPlace) {
//       console.warn('Redirect to results');
//     }
//   }, [originPlace, destinationPlace]);

//   return (
//     <SafeAreaView>
//       <View
//         style={{
//           padding: 10,
//           height: '100%',
//           backgroundColor: 'white',
//           borderRadius: 10,
//           width: RFValue(320),
//           //   padding: 20,
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <GooglePlacesAutocomplete
//           placeholder="Where from?"
//           keyboardShouldPersistTaps="handled"
//           components="country:pk"
//           onPress={(data, details = null) => {
//             console.log('data', data);
//             onSelect(data, details);
//           }}
//           currentLocationLabel="Current location"
//           minLength={2}
//           // listViewDisplayed={'auto'}
//           listViewDisplayed={false}
//           currentLocation={true}
//           onFail={(err) => console.warn('err', err)}
//           renderDescription={(row) => row.description}
//           renderLeftButton={() => (
//             <View
//               style={{
//                 // position: 'absolute',
//                 // top: RFValue(25),
//                 width: 20,
//                 height: 20,
//                 borderColor: theme.COLORS.primary,
//                 borderWidth: 3,
//                 borderRadius: 10,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 alignSelf: 'center',
//                 // zIndex: 1,
//               }}></View>
//           )}
//           renderRightButton={() => (
//             <View
//               style={{
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 // top: 100,
//                 // position: 'absolute',
//                 // zIndex: 1,
//               }}>
//               <Icon
//                 name="search"
//                 type="EvilIcons"
//                 style={{
//                   position: 'absolute',
//                   alignSelf: 'center',
//                   right: 30,
//                 }}
//               />
//             </View>
//           )}
//           enablePoweredByContainer={false}
//           styles={{
//             textInput: {
//               height: RFValue(50),
//               marginLeft: 10,
//             },
//           }}
//           fetchDetails={true}
//           query={{
//             key: 'AIzaSyB-5FKcvAr7K72CVjQ7NzI4T2XA4MfjmHw',

//             language: 'en',
//             types: 'address',
//           }}
//           getDefaultValue={() => ''}
//           GooglePlacesDetailsQuery={{fields: 'formatted_address'}}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default DestinationSearch;
import React from 'react';
import {View, Image, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
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
      }}
      getDefaultValue={() => ''}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyB-5FKcvAr7K72CVjQ7NzI4T2XA4MfjmHw',
        language: 'en', // language of the results
        types: 'address', // default: 'geocode'
      }}
      styles={{
        textInput: {
          paddingLeft: RFValue(30),
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
            top: RFValue(15),
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
  );
};

export default GooglePlacesInput;
