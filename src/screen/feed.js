import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Feed() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle={'default'} />
      <View
        style={{
          backgroundColor: 'white',
          padding: RFValue(20),
        }}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: RFValue(18), fontWeight: 'bold'}}>
            Blogging Feeds
          </Text>
          <Icon type="Ionicons" name="md-options" />
        </View>
        <View style={{flexDirection: 'row', paddingTop: RFValue(10)}}>
          <TouchableOpacity>
            <Text style={{color: 'gray', fontSize: RFValue(15)}}>
              Write Something Here
            </Text>
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Feed;
