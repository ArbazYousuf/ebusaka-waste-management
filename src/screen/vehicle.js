import React, {useState, useContext} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {View, Text, Icon, Row} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import SafeAreaView from 'react-native-safe-area-view';
import CustomButton from '../components/CustomButton';
import Header from '../components/header';
import {FONTS, icons, theme} from '../constants';
import CustomCheckBox from '../components/CustomCheckBox';
import {FlatList} from 'react-native-gesture-handler';
import {AppContext} from '../Context/AppProvider';

const Card = ({isChecked, model, made}) => {
  return (
    <View
      style={{
        backgroundColor: theme.COLORS.white,
        height: RFValue(80),
        marginTop: RFValue(10),
        justifyContent: 'center',
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            flex: 0.7,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={icons.doc}
            style={{
              alignSelf: 'center',
              width: RFValue(50),
              height: RFValue(50),
              margin: RFValue(10),
            }}
          />
          <View>
            <Text
              style={[
                FONTS.h3,
                {alignSelf: 'flex-start', textAlign: 'center'},
              ]}>
              {made}
            </Text>
            <Text style={[FONTS.p, {alignSelf: 'flex-start'}]}>43A 235.70</Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
            alignItems: 'flex-end',
            // backgroundColor: 'red',
            padding: RFValue(10),
          }}>
          <CustomCheckBox
            isChecked={isChecked}
            cWidth={30}
            cHeight={30}
            cRadius={15}
            cLogoSize={20}
          />
        </View>
      </View>
    </View>
  );
};

export default function Vehicle({navigation}) {
  const {isOnline, setisOnline} = useContext(AppContext);

  const [isChecked, setisChecked] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        navigation={navigation}
        isOnline={isOnline}
        setisOnline={setisOnline}
        name={'Profile'}
      />
      <View style={{flex: 1}}>
        {
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={() => {
              return (
                <TouchableOpacity>
                  <Card
                    isChecked={true}
                    model={'43A 125.84'}
                    made={'Mitsubishi Outlander'}
                  />
                </TouchableOpacity>
              );
            }}
          />
        }
        <TouchableOpacity
          onPress={() => navigation.navigate('AddVehicle')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={icons.add} style={{width: 100, height: 100}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
