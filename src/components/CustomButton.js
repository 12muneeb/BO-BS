import React from 'react';
import {Dimensions, Text, Image, TouchableOpacity} from 'react-native';
import {colors} from '../utils';
import Shadows from '../helpers/Shadows';
const {width} = Dimensions.get('screen');
import {appIcons} from '../assets/index';

export default function CustomButton(props) {
  const {
    color,
    title,
    onPress,
    buttonStyle,
    textStyle,
    disabled,
    nextBtn,
    leftbutton,
    numberofcoins,
    opt,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={opt ? 0.9 : 0.8}
      style={[
        {
          width: width - 30,
          height: 52,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color ? color : colors.primary,
          // marginTop: '1%',
          flexDirection: 'row',
          borderRadius: 12,
        },
        buttonStyle,
      ]}>
      <Text
        style={[
          {fontSize: 18, color: colors.white, fontWeight: 'bold'},
          textStyle,
        ]}>
        {title}
      </Text>
      {nextBtn && (
        <Image
          resizeMode="contain"
          source={appIcons.down}
          style={{
            tintColor: colors.white,
            position: 'absolute',
            right: 20,
            // justifyContent:'flex-end',
            height: 8,
            width: 8,
            marginLeft: '4%',
          }}
        />
      )}
      {leftbutton && (
        <Image
          resizeMode="contain"
          source={appIcons.down}
          style={{
            tintColor: colors.white,
            position: 'absolute',
            right: 20,
            // justifyContent:'flex-end',
            height: 8,
            width: 8,
            marginLeft: '4%',
          }}
        />
      )}
    </TouchableOpacity>
  );
}
