import {Dimensions} from 'react-native';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#2D7A31',
  secondary: '#F5F6FA',
  lightPrimary: '#70A12F',

  one: '#2AC17C',
  two: '#5755DC',
  three: '#FEA46F',
  four: '#299983',
  five: '#FF6F5C',
  six: '#0097FD',

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#DEDEDE',
  backColor: '#FFFFFF',
  gray: '#707070',
  darkYellow: '#FF9800',
  ashWhite: '#F9F9F9',
};
export const SIZES = {
  // global sizes
  base: RFValue(8),
  font: RFValue(14),
  radius: RFValue(12),
  padding: RFValue(24),

  // font sizes
  largeTitle: RFValue(50),
  h1: RFValue(30),
  h2: RFValue(22),
  h3: RFValue(16),
  h4: RFValue(14),
  p: RFValue(14),
  body1: RFValue(30),
  body2: RFValue(22),
  body3: RFValue(16),
  body4: RFValue(14),

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  p: {fontFamily: 'Roboto-Regular', fontSize: SIZES.p, lineHeight: 18},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
