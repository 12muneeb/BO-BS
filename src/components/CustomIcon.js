import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import CustomText from './CustomText';
import {colors} from '../utils';
import Img from './Img';
import appStyles from '../screens/appStyles';

const CustomIcon = props => {
  const {
    size,
    src,
    resizeMode = 'contain',
    customIconStyle,
    customIconWrapper,
  } = props;
  return (
    <View style={[{height: size, width: size}, customIconWrapper]}>
      <FastImage
        source={item?.image}
        style={[styles?.img, customIconStyle]}
        resizeMode={resizeMode}
      />
   
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
  },
});
