import React, {useState} from 'react';

import {Switch} from 'native-base';
export default function ({setisOnline, isOnline}) {
  return (
    <Switch
      width={40}
      trackColor={{
        true: '#F1F1F1',
        false: '#006447',
      }}
      thumbColor={'#FFFFFF'}
      onValueChange={(val) => setisOnline(val)}
      style={{transform: [{scaleX: 1.3}, {scaleY: 1.3}]}}
      value={isOnline}
    />
  );
}
