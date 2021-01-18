import React, {useContext} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {icons} from '../constants';
import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {AppContext} from '../Context/AppProvider';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB1KoK7KQe0YzwScTNjC7lHRSi7my056bk';

const MapBox = (props) => {
  const {location, setlocation} = useContext(AppContext);

  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  };

  console.warn(location);

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={location}
      //   initialCamera={location}
      //   camera={location}
    >
      <MapView.Marker coordinate={location}>
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
  );
};

export default MapBox;
