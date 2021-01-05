import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {theme, images, icons} from '../constants';
import SafeAreaView from 'react-native-safe-area-view';
import CollectionCard from '../components/CollectionCard';
import Switch from '../components/switch';
import {AppContext} from '../Context/AppProvider';
const data = [
  {id: 0, name: "Today's Collection", obj: [1, 2, 3, 4, 5]},
  {id: 1, name: 'Next Collection', obj: [1, 2, 3, 4, 5]},
  {id: 2, name: 'Pending Collection', obj: [1, 2, 3, 4, 5], length: 34},
];
export default function Home({navigation}) {
  const {isOnline, setisOnline} = useContext(AppContext);
  const Offline = () => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={images.dustbin} />
      <View style={{marginTop: RFValue(20)}}>
        <Text
          style={{
            fontFamily: 'Metropolis-Medium',
            fontSize: RFValue(20),
            color: '#7A869A',
          }}>
          You have no Requests.
        </Text>
        <Text
          style={{
            fontFamily: 'Metropolis-Medium',
            fontSize: RFValue(20),
            color: '#7A869A',
          }}>
          Go online for Request
        </Text>
      </View>
    </View>
  );

  const Online = () => (
    <View
      style={{
        flex: 1,
        paddingTop: RFValue(25),
        paddingLeft: RFValue(25),
        marginTop: RFValue(5),
      }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        style={{paddingBottom: RFValue(30)}}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={[theme.FONTS.p, {fontSize: RFValue(18)}]}>
                {item.name} {item.length ? `(${item.length})` : ''}
              </Text>
              <FlatList
                data={item.obj}
                renderItem={() => (
                  <CollectionCard
                    ContainerStyle={{
                      width: RFValue(310),
                      backgroundColor: 'white',
                      borderRadius: RFValue(10),
                      marginVertical: RFValue(20),
                      marginRight: RFValue(20),
                    }}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(data) => data}
              />
            </View>
          );
        }}
      />
    </View>
  );

  const DashboardCard = (img, unit, text) => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        // margin: RFValue(20),
      }}>
      <View
        style={{
          width: '100%',
          marginVertical: RFValue(20),
        }}>
        <Image
          style={{
            resizeMode: 'center',
            height: RFValue(30),
            alignSelf: 'center',
          }}
          source={img}
        />
      </View>
      <Text
        style={[
          theme.FONTS.p,
          {
            fontSize: RFValue(18),
            textAlign: 'center',
            marginBottom: RFValue(8),
            color: theme.COLORS.primary,
            lineHeight: RFValue(18),
          },
        ]}>
        {unit}
      </Text>
      <Text
        style={[
          theme.FONTS.p,
          {
            fontSize: RFValue(11),
            textAlign: 'center',
            lineHeight: RFValue(13),
            color: theme.COLORS.primary,
            opacity: 0.4,
            marginHorizontal: RFValue(10),
          },
        ]}>
        {text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={theme.COLORS.primary} />
      <View style={styles.Container}>
        <View
          style={{
            height: RFValue(190),
            width: '100%',
            backgroundColor: theme.COLORS.primary,
            padding: RFValue(25),
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={[
                theme.FONTS.p,
                {
                  color: 'white',
                  fontSize: RFValue(20),
                  flex: 1,
                  paddingTop: RFValue(2),
                },
              ]}>
              Hi, Welcome Back
            </Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Image
                style={{tintColor: 'white', width: 30, height: 30}}
                source={icons.bellNotification}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: RFValue(5),
            }}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View
                style={{
                  width: RFValue(50),
                  height: RFValue(50),
                  backgroundColor: theme.COLORS.secondary,
                  borderRadius: RFValue(50),
                }}></View>
              <View
                style={{
                  marginLeft: RFValue(10),
                  flex: 1,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(19),
                    fontFamily: 'Ubuntu-Regular',
                  }}>
                  William Sam
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: RFValue(5),
                    flex: 1,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width: RFValue(15),
                        height: RFValue(15),
                        tintColor: '#FF9800',
                      }}
                      source={icons.star}
                    />
                    <Text
                      style={{
                        color: 'white',
                        marginHorizontal: RFValue(5),
                        fontSize: RFValue(18),
                        fontFamily: 'Ubuntu-Regular',
                      }}>
                      5.0
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Switch isOnline={isOnline} setisOnline={setisOnline} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: RFValue(140),
            width: '90%',
            backgroundColor: 'white',
            alignSelf: 'center',
            marginTop: RFValue(-60),
            borderRadius: RFValue(10),
            flexDirection: 'row',
            paddingHorizontal: RFValue(15),
          }}>
          {DashboardCard(icons.dustbin, '0', 'TRASH BAGS COLLECTED')}
          {DashboardCard(icons.meter, '0 KM', 'DISTANCE COVERED')}
          {DashboardCard(icons.outline, '0', 'HOUSEHOLDS SERVICED')}
        </View>
        {!isOnline ? Offline() : Online()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
