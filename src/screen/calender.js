import React, {useState, useContext} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import CollectionCard from '../components/CollectionCard';
import {FONTS, theme} from '../constants';
import Switch from '../components/switch';
import {AppContext} from '../Context/AppProvider';
import Header from '../components/header';

const data = [
  {id: 0, name: "Today's Collection", obj: [1, 2, 3, 4, 5]},
  {id: 1, name: 'Next Collection', obj: [1, 2, 3, 4, 5]},
  {id: 2, name: 'Pending Collection', obj: [1, 2, 3, 4, 5], length: 34},
];

export default function Calender({navigation}) {
  const {isOnline, setisOnline} = useContext(AppContext);
  const [selected, setselected] = useState(null);

  const Tab = ({val, onPress}) => {
    return (
      <TouchableOpacity
        onPress={() => setselected(val.index)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: RFValue(15),
          height: RFValue(80),
          margin: RFValue(10),
          width: RFValue(60),
          borderColor: val.index == selected ? theme.COLORS.white : null,
          borderWidth: val.index == selected ? RFValue(1) : null,
          backgroundColor: val.index == selected ? null : '#398F78',
        }}>
        <Text
          style={[
            FONTS.p,
            {color: theme.COLORS.white, paddingBottom: RFValue(10)},
          ]}>
          Mon
        </Text>
        <Text style={[FONTS.p, {color: theme.COLORS.white}]}>11</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: theme.COLORS.primary,
          height: RFValue(100),
          flex: 0.3,
        }}>
        <Header
          name="Calender"
          navigation={navigation}
          isOnline={isOnline}
          setisOnline={setisOnline}
        />
        {/* <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              //   flexDirection: 'row',
              alignItems: 'center',
              //   backgroundColor: 'red',
              paddingLeft: RFValue(40),
            }}>
            <Text
              style={[
                FONTS.p,
                {
                  color: theme.COLORS.white,
                  fontSize: RFValue(16),
                  alignSelf: 'center',
                },
              ]}>
              Calendar
            </Text>
          </View>
          <View
            style={{
              flex: 0.2,
              //   backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Switch isOnline={isOnline} setisOnline={setisOnline} />
          </View>
        </View> */}

        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
          }}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={(val) => <Tab val={val} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(data) => data}
          />
        </View>
      </View>

      <View
        style={{
          flex: 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: RFValue(15),
        }}>
        <FlatList
          data={data}
          renderItem={() => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('JobDetails')}>
                <CollectionCard
                  ContainerStyle={{
                    width: RFValue(310),
                    backgroundColor: 'white',
                    borderRadius: RFValue(10),
                    marginVertical: RFValue(20),
                    marginRight: RFValue(20),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </TouchableOpacity>
            );
          }}
          // horizontal
          // showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(data) => data}
        />
      </View>
    </SafeAreaView>
  );
}
