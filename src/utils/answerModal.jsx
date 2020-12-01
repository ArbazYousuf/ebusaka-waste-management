import React from 'react';
import {Modal, View, Text, Image} from 'react-native';

const Correct = () => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            width: '60%',
            height: '80%',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}></View>
      </View>
    </Modal>
  );
};

export {Correct};
