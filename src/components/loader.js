import React, {Component} from 'react';
import {View, Image, Modal, StyleSheet, Animated, Easing} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinAnim: new Animated.Value(0),
    };
  }
  UNSAFE_componentWillReceiveProps() {
    Animated.loop(
      Animated.timing(this.state.spinAnim, {
        toValue: 1.5,
        duration: 3000,
        easing: Easing.elastic(),
        useNativeDriver: true,
      }),
    ).start();
  }

  render() {
    const xVal = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 200],
    });
    const {modalVisible} = this.props;
    return (
      <Modal animationType={'fade'} transparent={true} visible={modalVisible}>
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <Animated.Image
              resizeMode="contain"
              style={{
                height: RFValue(150),
                width: RFValue(100),
                transform: [{translateX: xVal}],
              }}
              source={require('../assets/loading.png')}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  loaderContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
