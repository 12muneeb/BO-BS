import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../../utils';

export const styles = StyleSheet.create({
  txt1: {
    color: colors.white,
    fontSize: size.small,
    fontFamily: family.Poppins_SemiBold,
  },
  txt2: {
    fontSize: size.small,
    fontFamily: family.Poppins_Medium,
    color: colors.white,
    marginRight: 20,
  },
  txt3: {
    color: colors.white,
    marginTop: 8,
    fontFamily: family.Poppins_Regular,
    fontSize: size.small,
  },
  cutimg: {
    width: 15,
    height: 15,
  },
  card: {
    backgroundColor: 'transparent',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1.5,
    borderColor: colors.white,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  itm: {position: 'absolute', right: 0, top: 0},
  btn: {
    width: '45%',
    borderRadius: 10,
    height: 55,
    backgroundColor: colors.prewhite,
  },
  btn1: {
    width: '45%',
    borderRadius: 10,
    marginLeft: 10,
    height: 55,
  },
  btncontent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginLeft: 30,
    marginTop: 40,
    marginBottom: 20,

  },
  txtbtn: {
    color: colors.black,
  },
});
