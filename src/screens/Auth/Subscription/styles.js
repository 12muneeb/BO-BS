import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../../utils';

export const styles = StyleSheet.create({
  txt: {
    color: colors.white,
    fontSize: size.h6,
    fontFamily: family.Poppins_Bold,
  },
  txt1: {
    color: colors.white,
    fontSize: size.xxlarge,
    fontFamily: family.Poppins_Medium,
  },
  desc: {
    fontFamily: family.Poppins_Regular,
    fontSize: size.xxsmall,
    color: colors.black,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  btn: {
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: -30,
  },
});
