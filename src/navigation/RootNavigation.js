import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from '../screen/AuthScreens/Intro';
import Login from '../screen/AuthScreens/login';
import Registration from '../screen/AuthScreens/register';
import ForgetPassword from '../screen/AuthScreens/forgetPassword';
import Country from '../screen/testCountry';
import Home from '../screen/home';
import Map from '../screen/map';

// import {} from '../screen';
// import {connect} from 'react-redux';
// import {Update} from '../redux/Actions/Auth';
const Stack = createStackNavigator();
// const durationSpec = { config: { duration: 200 } }

function Navigation(props) {
  const noHeader = {headerShown: false};
  const [initialRouteName, setinitialRouteName] = React.useState('');
  //     const screenOptions = {
  //         ...TransitionPresets.ScaleFromCenterAndroid,
  //         transitionSpec: {
  //             open: durationSpec,
  //             close: durationSpec,
  //         },
  //     }

  // React.useEffect(() => {
  //   if (props.user?.user) {
  //     props.updateUser(props?.user?.token);
  //     setinitialRouteName('AddKid');
  //   } else {
  //     setinitialRouteName('Login');
  //   }
  // }, []);
  // if (initialRouteName == '') {
  //   return null;
  // } else
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={''}>
        {/* <Stack.Screen name="Country" component={Country} /> */}

        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Map"
          component={Map}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        {/*  <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SightWords" component={SightWords} />
          <Stack.Screen name="CheckEmail" component={CheckEmail} />
          <Stack.Screen name="Train" component={Train} />
          <Stack.Screen name="DeleteKid" component={DeleteKid} />
          <Stack.Screen name="AddKid" component={AddKid} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Navigation" component={Home} />
          <Stack.Screen name="RegisterChild" component={RegisterChild} />
          <Stack.Screen name="SignUpComplete" component={SignUpComplete} />
          <Stack.Screen name="ChooseAvatar" component={ChooseAvatar} />
          <Stack.Screen name="ParentsLogin" component={parentsLogin} />
          <Stack.Screen
            options={{gestureEnabled: false}}
            name="Quiz"
            component={Quiz}
          />
          <Stack.Screen
            options={{gestureEnabled: false}}
            name="QuestionAnswer"
            component={QuestionAnswer}
          />
          <Stack.Screen name="PlayVideo" component={PlayVideo} />
          <Stack.Screen name="Download" component={Download} />
          <Stack.Screen name="ParentView" component={ParentView} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Words" component={Words} />
          <Stack.Screen name="Vocabulary" component={Vocabular} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} /> */}
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
