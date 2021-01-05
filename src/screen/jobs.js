import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {RFValue} from 'react-native-responsive-fontsize';
import {theme} from '../constants';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CollectionCard from '../components/CollectionCard';
export default function Jobs() {
  const [tabIndex, settabIndex] = useState(0);
  return (
    <SafeAreaView>
      <View
        style={{
          height: RFValue(90),
          width: '100%',
          backgroundColor: theme.COLORS.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SegmentedControlTab
          values={['Active Jobs', 'Pending Jobs', 'Completed Jobs']}
          tabsContainerStyle={{width: '90%', alignSelf: 'center'}}
          tabStyle={{backgroundColor: 'rgba(255,255,255,0.2)', borderWidth: 0}}
          tabTextStyle={[
            theme.FONTS.p,
            {color: 'white', fontSize: RFValue(13)},
          ]}
          activeTabStyle={{backgroundColor: 'white'}}
          activeTabTextStyle={{color: theme.COLORS.primary}}
          selectedIndex={tabIndex}
          onTabPress={settabIndex}
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        showsVerticalScrollIndicator={false}
        style={{margin: RFValue(20), marginBottom: RFValue(90)}}
        renderItem={() => (
          <CollectionCard
            ContainerStyle={{
              width: '100%',
              backgroundColor: 'white',
              borderRadius: RFValue(10),
              marginVertical: RFValue(10),
              // marginRight: RFValue(20),
            }}
          />
        )}
        keyExtractor={(val) => val}
      />
    </SafeAreaView>
  );
}
