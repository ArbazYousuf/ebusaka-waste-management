import React, {useRef, useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {FONTS, images, theme} from '../constants';
import {StyleSheet, Image, View, Text, Pressable} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Icon} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton';

const slides = [
  {
    key: 'one',
    text:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit Nullam ac vestibulum',
    image: images.intro_1,
    title: 'Accept A Job',
  },
  {
    key: 'two',
    text:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit Nullam ac vestibulum',
    image: images.intro_2,
    title: 'Tracking Realtime',
  },
  {
    key: 'three',
    text:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit Nullam ac vestibulum',
    image: images.intro_3,
    title: 'Earn Money',
  },
];

function WalkThrough({navigation}) {
  const [showRealApp, setshowRealApp] = useState(false);
  const slider = useRef();

  const _renderItem = ({item, index}) => {
    // console.log('params', params);

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 0.2}}></View>
        <View
          style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            source={item.image}
            style={{width: RFValue(300), height: RFValue(300)}}
          />
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={[FONTS.h2, {paddingBottom: RFValue(20)}]}>
                {item.title}
              </Text>
              <Text
                style={[FONTS.p, {textAlign: 'center', padding: RFValue(5)}]}>
                {item.text}
              </Text>
            </View>
            {index < slides.length - 1 ? (
              <TouchableOpacity
                onPress={() => slider.current.goToSlide(index + 1, true)}
                style={{
                  flex: 0.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={FONTS.p}>Skip</Text>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  flex: 1.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomButton
                  color={theme.COLORS.primary}
                  size="sm"
                  onPress={() => navigation.navigate('Intro')}>
                  Get Started
                </CustomButton>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({showRealApp: true});
    setshowRealApp(true);
  };

  // const _renderDoneButton = () => {
  //   return (
  //     <View style={styles.buttonCircle}>
  //       <Icon
  //         name="md-checkmark"
  //         type="FontAwesome"
  //         color="rgba(255, 255, 255, .9)"
  //         size={24}
  //       />
  //     </View>
  //   );
  // };

  if (showRealApp) {
    navigation.navigate('Test');
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> */}
        <AppIntroSlider
          renderItem={_renderItem}
          data={slides}
          onDone={_onDone}
          dotStyle={{backgroundColor: '#ADCFC9'}}
          showNextButton={false}
          showDoneButton={false}
          // renderNextButton={_renderNextButton}
          activeDotStyle={{backgroundColor: theme.COLORS.primary}}
          ref={(ref) => (slider.current = ref)}
        />
        {/* </View> */}
      </SafeAreaView>
    );
  }
}

export default WalkThrough;
