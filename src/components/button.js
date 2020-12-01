import React from 'react';
import {Dimensions, Text, TouchableOpacity, Platform} from 'react-native';

import {Icon} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';

const CustomButton = ({
  children,
  size,
  color,
  onPress,
  invisisble,
  icon,
  iconType,
  disabled,
  cWidth,
}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        backgroundColor: invisisble ? 'white' : color,
        width: RFValue(
          size == 'sm' ? (cWidth ? cWidth : 165) : cWidth ? cWidth : 300,
        ),
        height: RFValue(size == 'sm' ? 45 : 45),
        marginHorizontal: RFValue(5),
        marginVertical: RFValue(5),
        flexDirection: 'row',
        borderRadius: 50,
        alignItems: 'center',
        margin: 2,
        justifyContent: 'center',
        // borderColor: invisisble ? color : undefined,
        // borderWidth: invisisble ? 2 : undefined,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: Platform.OS == 'ios' ? 4 : 12,
        },
        shadowOpacity: Platform.OS == 'ios' ? 0.32 : 0.58,
        shadowRadius: Platform.OS == 'ios' ? 5.46 : 16.0,
        elevation: Platform.OS == 'ios' ? 9 : 24,
      }}>
      {icon && iconType && (
        <Icon
          type={iconType}
          name={icon}
          style={{
            color: '#ffff',
            fontSize: RFValue(20),
            textAlign: 'center',
            alignSelf: 'center',
            marginRight: 10,
          }}
        />
      )}
      <Text
        style={{
          fontSize: RFValue(15),
          color: invisisble ? color : 'white',
          alignSelf: 'center',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
