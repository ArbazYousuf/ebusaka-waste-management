import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Theme from '../Theme';
import SafeAreaView from 'react-native-safe-area-view';

export default function Home({navigation}) {
  const [menuData, setmenuData] = useState([
    {
      name: 'Subcription',
      iconName: 'truck',
      iconFamily: 'FontAwesome5',
    },
    {
      name: 'OnDemand Pickup',
      iconName: 'arrow-circle-down',
      iconFamily: 'FontAwesome',
    },
    {
      name: 'Special Pickup',
      iconName: 'car',
      iconFamily: 'FontAwesome',
    },
    {
      name: 'Requests',
      iconName: 'watch-later',
      iconFamily: 'MaterialIcons',
    },
    {
      name: 'Payments',
      iconName: 'credit-card',
      iconFamily: 'FontAwesome',
    },

    {
      name: 'Account',
      iconName: 'user',
      iconFamily: 'FontAwesome',
    },
  ]);

  // function handleIcon() {}

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Container}>
        <View
          style={{
            backgroundColor: Theme.primaryColor,
            flex: 0.3,
            marginBottom: RFValue(10),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: RFValue(18),
              fontWeight: 'bold',
              color: 'white',
            }}>
            HELLO,
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: RFValue(12),
              fontWeight: 'bold',
              color: 'white',
            }}>
            What can we do for you ?
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: RFValue(70),
            position: 'absolute',
            zIndex: 2,
            top: RFValue(130),
            left: RFValue(120),
            height: RFValue(140),
            width: RFValue(140),
            alignItems: 'center',
            padding: RFValue(10),
            // overflow: 'hidden',

            shadowColor: 'rgba(0,0,0,0.4)',
            shadowOffset: {
              width: 1,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
          }}>
          <View
            style={{
              borderRadius: RFValue(60),
              height: RFValue(120),
              width: RFValue(120),
              borderColor: Theme.primaryColor,
              borderWidth: 10,
            }}>
            <Image
              source={require('../assets/appLogo.png')}
              resizeMode="contain"
              style={{
                alignSelf: 'center',
                width: RFValue(90),
                height: RFValue(90),
              }}
            />
          </View>
        </View>

        <View
          style={{
            // backgroundColor: '#D3D3D3',
            overflow: 'hidden',
            backgroundColor: '#fcfcfc',

            shadowColor: 'rgba(0,0,0,0.4)',
            shadowOffset: {
              width: 1,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 5,
            flex: 0.5,
            margin: RFValue(15),
            borderRadius: RFValue(10),
          }}>
          <View
            style={{
              flex: 0.1,
              margin: RFValue(4),
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: RFValue(50),
            }}>
            <Text style={{fontWeight: 'bold'}}>Hammad</Text>
          </View>

          <View style={{flex: 0.9}}>
            <FlatList
              data={menuData}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      flex: 1,
                      padding: RFValue(10),
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: RFValue(120),
                    }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Map')}
                      style={{
                        //   flexDirection: 'row',
                        // flex: 1,

                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowOffset: {
                          width: 1,
                          height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,
                        elevation: 10,

                        width: RFValue(60),
                        height: RFValue(60),
                        borderRadius: RFValue(50),
                        // backgroundColor: '#D3D3D3',
                        backgroundColor: 'white',

                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name={item.iconName}
                        type={item.iconFamily}
                        style={{
                          color: Theme.primaryColor,
                          // color: 'black',
                          fontSize: RFValue(30),
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      ellipsizeMode="head"
                      style={{
                        textAlign: 'center',
                        height: RFValue(40),
                        paddingTop: RFValue(5),
                        fontSize: RFValue(12),
                        fontWeight: 'bold',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                );
              }}
              numColumns={3}
              columnWrapperStyle={{flexWrap: 'wrap', flex: 1}}

              // key={numColumns.toString()} // if you want to use dynamic numColumns then you have to use key props
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  logoContainer: {
    flex: 4,
  },
  bottomTextContainer: {
    flex: 2,
    backgroundColor: Theme.primaryColor,
    height: RFValue(200),
  },
});
