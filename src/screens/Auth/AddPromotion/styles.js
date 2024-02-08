import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.prewhite,
    width: '85%',
  },
  inputtxt: {
    color: colors.black,
  },
  card: {
    color: colors.white,
    marginLeft: 8,
  },
  cardcontent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: '50%',
    borderRadius: 10,
    height: 55,
    backgroundColor: colors.prewhite,
  },
  btn1: {
    width: '50%',
    borderRadius: 10,
    marginLeft: 10,
    height: 55,
  },
  btncontent: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    width: '80%',
    marginLeft: 30,
  },
  txtbtn: {
    color: colors.black,
  },
  btnflex:{
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginVertical:10
  }
});
