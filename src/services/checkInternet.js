import React from 'react';
import NetInfo from '@react-native-community/netinfo';

const CheckInternet = () => {
  return NetInfo.fetch().then((state) => {
    return state.isConnected;
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
  });
};

export default CheckInternet;
