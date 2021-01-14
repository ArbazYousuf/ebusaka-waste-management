import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {RFValue} from 'react-native-responsive-fontsize';
import {theme} from '../constants';

// import styles from './styles.js';

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    console.warn('useEffect is called');
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          height: RFValue(60),
          backgroundColor: 'white',
          borderRadius: 10,
          width: RFValue(320),
          //   padding: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 20,
            height: 20,
            borderColor: theme.COLORS.primary,
            borderWidth: 3,
            borderRadius: 10,
          }}></View>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          styles={{
            textInput: {
              height: RFValue(50),
              marginLeft: 10,
            },
          }}
          fetchDetails
          query={{
            key: 'AIzaSyB1KoK7KQe0YzwScTNjC7lHRSi7my056bk',
            language: 'en',
          }}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
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
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
