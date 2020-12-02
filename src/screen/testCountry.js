import React, {Component} from 'react';
import {View, Animated, Easing} from 'react-native';

export default class webviewWithLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   spinAnim: new Animated.ValueXY({x: 0, y: 120}),
      spinAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.spinAnim, {
        toValue: 3,
        // toValue: {x: 2, y: 2},
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }

  render() {
    // const spin = this.state.spinAnim.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg'],
    // });

    const xVal = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 200],
    });

    // const xVal = this.state.spinAnim.interpolate({
    //   inputRange: [0, 2],
    //   outputRange: [0, 200],
    // });

    const yVal = this.state.spinAnim.interpolate({
      inputRange: [0, 10],
      outputRange: [0, 300],
    });
    return (
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
        <Animated.Image
          resizeMode="contain"
          style={{
            height: 100,
            width: 100,
            transform: [
              {translateX: xVal},
              //   {translateX: xVal},
              //   {
              //     translateY: yVal,
              //   },
            ],
          }}
          source={require('../assets/loading.png')}
        />
      </View>
    );
  }
}

// import React, {useState, useRef} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// import PhoneInput from 'react-native-phone-number-input';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

// const Country: React.FC = () => {
//   const [value, setValue] = useState('');
//   const [formattedValue, setFormattedValue] = useState('');
//   const [valid, setValid] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);
//   //   const phoneInput = useRef < PhoneInput > null;
//   const phoneInput = useRef(null);
//   return (
//     <>
//       {/* <StatusBar barStyle="dark-content" /> */}
//       <View style={styles.container}>
//         <SafeAreaView style={styles.wrapper}>
//           {showMessage && (
//             <View style={styles.message}>
//               <Text>Value : {value}</Text>
//               <Text>Formatted Value : {formattedValue}</Text>
//               <Text>Valid : {valid ? 'true' : 'false'}</Text>
//             </View>
//           )}
//           <PhoneInput
//             ref={phoneInput}
//             defaultValue={value}
//             defaultCode="DM"
//             onChangeText={(text) => {
//               setValue(text);
//             }}
//             onChangeFormattedText={(text) => {
//               setFormattedValue(text);
//             }}
//             withDarkTheme
//             withShadow
//             autoFocus
//           />
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               const checkValid = phoneInput.current?.isValidNumber(value);
//                 setShowMessage(true);
//               setValid(checkValid ? checkValid : false);
//             }}>
//             <Text>Check</Text>
//           </TouchableOpacity>
//         </SafeAreaView>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.lighter,
//   },
//   wrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     marginTop: 20,
//     height: 50,
//     width: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   message: {
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 20,
//     marginBottom: 20,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
// });

// export default Country;
