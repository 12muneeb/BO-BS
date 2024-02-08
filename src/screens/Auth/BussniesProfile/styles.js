import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../../utils';
import appStyles from '../../appStyles';

export const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: colors.white,
    height: 55,
    width: '88%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  heading: {
    fontSize: size.small,
    fontFamily: family.Montserrat_SemiBold,
    color: colors.white,
    marginVertical: 15,
    marginLeft: 18,
  },
  day: {
    fontSize: size.xxsmall,
    fontFamily: family.Montserrat_SemiBold,
    color: colors.black,
  },
  time: {
    fontFamily: family.Montserrat_Regular,
    fontSize: size.xxsmall,
    right: 10,
  },
  header: {
    backgroundColor: colors.prewhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  horizontal: {width: 15, height: 15},
  btn: {
    alignSelf: 'center',
    borderRadius: 10,
  },
  contStyles: {
    backgroundColor: 'transparent',
    fontFamily: family.Roboto_Bold,
    color: colors.black,
  },
  wrapmper: {
    borderRadius: 8,
    width: '87%',
    // backgroundColor: colors.darkBlue,
    alignSelf: 'center',
    borderWidth: 1,
    ...appStyles.margin2Percent,

    borderColor: colors.white,
  },
  label: {
    color: colors.white,
    width: '90%',
    alignSelf: 'center',
  },
});
