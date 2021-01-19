import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TestComponent from '../screen/TestComponent';
import Login from '../screen/login';
import Registration from '../screen/register';
import ForgetPassword from '../screen/forgetPassword';
import {theme, FONTS, icons} from '../constants';
import {Icon} from 'native-base';
import Chat from '../screen/chat';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableHighlight, Text, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Home from '../screen/home';
import User from '../screen/user';
import Profile from '../screen/profile';
import Map from '../screen/map';
import OTP from '../screen/OTP';
import Feed from '../screen/feed';
import Notification from '../screen/notification';
import EditProfile from '../screen/editProfile';
import GarbageServices from '../screen/garbageServices';
import AddSpecialPickUp from '../screen/addSpecialPickUp';
import OrderHistory from '../screen/orderHistory';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FooterTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        activeTintColor: theme.COLORS.primary,
        inactiveTintColor: '#DEDEDE',
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => {
            return (
              <Image
                resizeMode="center"
                style={{
                  width: RFValue(20),
                  height: RFValue(25),
                  tintColor: color,
                }}
                source={icons.f_home}
              />
            );
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}) => (
            <Image
              resizeMode="center"
              style={{
                width: RFValue(20),
                height: RFValue(25),
                tintColor: color,
              }}
              source={icons.f_job}
            />
          ),
        }}
        name="Feed"
        component={Feed}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color}) => (
            <Image
              resizeMode="contain"
              style={{
                width: RFValue(20),
                height: RFValue(25),
                tintColor: color,
              }}
              source={icons.f_notification}
            />
          ),
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image
              resizeMode="contain"
              style={{
                width: RFValue(20),
                height: RFValue(25),
                tintColor: color,
              }}
              source={icons.f_Profile}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const Left = ({onPress}) => {
  console.log('onPress', onPress);
  return (
    <TouchableHighlight onPress={onPress}>
      <Icon
        name="left"
        type="AntDesign"
        style={{
          color: theme.COLORS.black,
          // padding: RFValue(10),
          paddingLeft: RFValue(10),
          fontSize: RFValue(20),
          fontWeight: 'bold',
        }}
      />
    </TouchableHighlight>
  );
};

const Right = ({onPress}) => {
  console.log('onPress', onPress);
  return (
    <TouchableHighlight onPress={onPress}>
      <Text
        style={[FONTS.p, {color: theme.COLORS.white, padding: RFValue(10)}]}>
        Next
      </Text>
    </TouchableHighlight>
  );
};

function Navigation(props) {
  const Auth = useSelector((state) => state.Auth);

  const noHeader = {headerShown: false};
  const [initialRouteName, setinitialRouteName] = React.useState('');

  const initialScreen = Auth.isLogin ? 'Home' : 'Login';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialScreen}>
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            title: 'Password Recovery',
            headerStyle: {
              backgroundColor: theme.COLORS.primary,
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: FONTS.p,
            headerLeft: ({onPress}) => <Left onPress={onPress} />,
            headerRight: ({onPress}) => <Right onPress={onPress} />,
          }}
        />

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Test"
          component={TestComponent}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Map"
          component={Map}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={FooterTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AddSpecialPickUp"
          component={AddSpecialPickUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          // options={{headerShown: false}}
          options={{
            title: 'Edit Profile',
            headerStyle: {
              backgroundColor: theme.COLORS.white,
              height: RFValue(80),
            },
            // headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerTitleStyle: {
              color: theme.COLORS.black,
              fontSize: RFValue(24),
              fontWeight: 'bold',
              lineHeight: 30,
              marginLeft: RFValue(-20),
              fontFamily: 'Roboto-Bold',
            },
            headerLeft: ({onPress}) => <Left onPress={onPress} />,
            headerRight: ({onPress}) => <Right onPress={onPress} />,
          }}
        />
        {/* 
        <Stack.Screen
          name="Map"
          component={Map}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="GarbageServices"
          component={GarbageServices}
          options={{headerShown: false}}

          // options={{
          //   title: 'Garbage Services',
          //   headerStyle: {
          //     backgroundColor: theme.COLORS.white,
          //     height: RFValue(80),
          //   },
          //   // headerTitleAlign: 'center',
          //   headerTintColor: 'black',
          //   headerTitleStyle: {
          //     color: theme.COLORS.black,
          //     fontSize: RFValue(24),
          //     fontWeight: 'bold',
          //     lineHeight: 30,
          //     marginLeft: RFValue(-20),
          //     fontFamily: 'Roboto-Bold',
          //   },
          //   headerLeft: ({onPress}) => <Left onPress={onPress} />,
          //   headerRight: ({onPress}) => <Right onPress={onPress} />,
          // }}
        />

        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
          // options={{
          //   title: 'Sign Up',
          //   headerStyle: {
          //     backgroundColor: theme.COLORS.primary,
          //   },
          //   headerTitleAlign: 'center',
          //   headerTintColor: '#fff',
          //   headerTitleStyle: FONTS.p,
          //   headerLeft: ({onPress}) => <Left onPress={onPress} />,
          //   headerRight: ({onPress}) => <Right onPress={onPress} />,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const mapStateToProps = (state) => ({
//   user: state.Auth.user,
// });
// const mapDispatchToProps = (dispatch) => ({
//   updateUser: (token) => dispatch(Update(token)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default Navigation;
