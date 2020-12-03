import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from 'react-native';
// import ShowToast from './Toast/toast';
import {Icon} from 'native-base';
import MapView from 'react-native-maps';
import st from './styles';
import Geolocation from '@react-native-community/geolocation';
import BottomSheet from 'reanimated-bottom-sheet';
import CustomButton from '../components/button';
// import geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import {RFValue} from 'react-native-responsive-fontsize';
import Theme from '../Theme';
// import Constant from './constants';

// let ip = Constant.IP;

const origin = {latitude: 24.928182, longitude: 67.1126082};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDDz6y1LLiSO-IWZUhTZkOjoc9hGBDkH_s';
let destination = {};

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component {
  //   static navigationOptions = ({navigation, screenProps}) => ({
  //     headerStyle: {
  //       elevation: 0,
  //       shadowOpacity: 0,
  //       backgroundColor: '#0c233c',
  //     },
  //     title: 'Track Customer Location',
  //     headerTitleStyle: {color: 'white', fontWeight: '600'},

  //     headerLeft: () => (
  //       <Icon
  //         name="chevron-left"
  //         type="Entypo"
  //         onPress={() => navigation.goBack(null)}
  //         size={32}
  //         style={{paddingLeft: 7, color: 'white'}}
  //       />
  //     ),
  //   });

  getPermission = async () => {
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
          this.CheckLocation();
        } else {
          return;
        }
      } catch (err) {
        return;
      }
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        // latitude: 24.8607,
        // longitude: 67.0011,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      animating: true,
      isLoading: false,
    };
  }

  componentWillMount() {
    setTimeout(
      () =>
        this.setState({
          animating: false,
        }),
      1000,
    );
  }

  CheckLocation() {
    // alert('hello');
    Geolocation.getCurrentPosition(
      (position) => {
        // console.warn('position', position);
        // alert(position.coords.latitude);
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      },
      (error) => console.warn(error.message),
      // {enableHighAccuracy: true, timeout: 1000, sdspeed: -1},
    );
    Geolocation.watchPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      },
      (error) => console.warn(error.message),
    );
  }
  componentDidMount() {
    this.getPermission();
  }
  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID);
  }

  onDropped = () => {
    this.setState({
      isLoading: true,
    });
    // fetch(`${ip}orders/dropped`, {
    //   method: 'put',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${this.props.navigation.state.params.token}`,
    //   },
    //   body: JSON.stringify({
    //     order: this.props.navigation.state.params.id,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(res => {
    //     this.setState({
    //       isLoading: false,
    //     });
    //     ShowToast('Dropped Success');
    //     this.props.navigation.navigate('Dashborad');
    //   })
    //   .catch(error => {
    //     this.setState({
    //       isLoading: false,
    //     });
    //     ShowToast(error.message);
    //   });
  };

  renderInner = () => (
    <View style={styles.panel}>
      <Text
        style={{
          fontSize: RFValue(20),
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Where will the collection be made ?
      </Text>
      <TextInput
        style={styles.search}
        onFocus={() => {
          this.bs.current.snapTo(1);
        }}
        placeholder="search"
      />
      <CustomButton
        color={Theme.primaryColor}
        onPress={() => navigation.navigate('Home')}>
        Next
      </CustomButton>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  bs = React.createRef();
  render() {
    // console.log('Map', this.props.navigation.state.params);
    destination = {
      latitude: 37.3318456,
      longitude: -122.0296002,
    };
    console.log(destination, this.state.region);
    return (
      <View style={styles.container}>
        {this.state.animating ? (
          <ActivityIndicator
            animating={this.state.animating}
            color="#bc2b78"
            size="large"
            style={{height: '100%', width: '100%'}}
          />
        ) : (
          <View>
            <MapView
              style={{width: '100%', height: '100%'}}
              zoomEnabled={true}
              showsUserLocation={true}
              showsMyLocationButton={true}
              region={this.state.region}
              zoomEnabled={true}>
              <MapView.Marker coordinate={this.state.region}>
                <Image
                  source={require('../assets/appLogo.png')}
                  style={{height: 35, width: 35}}
                />
              </MapView.Marker>

              {/* <MapViewDirections
                origin={this.state.region}
                destination={destination}
                waypoints={[destination]}
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

            <BottomSheet
              ref={this.bs}
              snapPoints={[500, 250, 0]}
              renderContent={this.renderInner}
              renderHeader={this.renderHeader}
              initialSnap={1}
            />
          </View>
        )}
      </View>
    );
  }
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
    height: 600,
    padding: 20,
    backgroundColor: '#f7f5eee8',
  },
  header: {
    backgroundColor: '#f7f5eee8',
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
});
