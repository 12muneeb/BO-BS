import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors,size,family } from '../../../../utils';
import appStyles from '../../../appStyles';
export const styles = StyleSheet.create({
  profilepop: {
    width: '100%',
    height: '50%',
  },
  container: {
    marginHorizontal: 25,
  },
  content1: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  txt: {
    color: colors.white,
    fontSize: size.small,
    fontFamily: family.Poppins_Medium,
  },
  subcontent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  img: {width: 15, height: 15, marginRight: 5,top:-2},
  txt1: {
    color: colors.white,
    fontFamily: family.Poppins_Regular,
    fontSize: size.xsmall,
  },
  subcontent1: {
    alignItems: 'center',
    marginBottom: 15,
  },
  txt2: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.Poppins_Regular,
    marginLeft: 90,
  },
  content3: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.lightshadow,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {width: 50, height: 50, borderRadius: 40},
  txt3: {
    color: colors.white,
    fontFamily: family.Poppins_Regular,
    fontSize: size.small,
    marginTop: 5,
  },
  txt4: {
    color: colors.white,
    fontFamily: family.Poppins_Regular,
    fontSize: size.xsmall,
    marginTop: 5,
  },
  subcontent2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  content2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.lightshadow,
    borderTopWidth: 2,
    paddingVertical: 8,
  },
  bordersty: {
    borderTopWidth: 1,
    borderColor: colors.lightshadow,
    // marginBottom: 30,
    ...appStyles.margin1Percent,
  },
  desc: {
    color: colors.white,
    fontFamily: family.Montserrat_Light,
    fontSize: size.xsmall,
    marginBottom: 8,
  },
  card: {
    color: colors.white,
    marginLeft: 8,
  },
  cardcontent: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 3,
  },
  add: {
    fontSize: size.xxsmall,
    fontFamily: family.Poppins_Regular,
    color: colors.white,
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
  txt6: {
    color: colors.white,
    fontSize: size.small,
    fontFamily: family.Poppins_SemiBold,
  },
  txt7: {
    fontSize: size.small,
    fontFamily: family.Poppins_Medium,
    color: colors.white,
  },
  txt8: {
    color: colors.white,
    marginTop: 8,
    fontFamily: family.Poppins_Regular,
    fontSize: size.small,
  },
  card1: {
    backgroundColor: 'transparent',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1.5,
    borderColor: colors.white,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  curve: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewtitle: {color: colors.black, fontSize: size.medium},
  reviewcontainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightshadow,
  },
  reviewsubtitle: {
    marginTop: 10,
    color: colors.black,
    fontSize: size.xsmall,
    marginBottom: 10,
  },
  rating: {
    color: colors.white,
    fontFamily: family.Poppins_Medium,
    fontSize: size.h1,
    marginTop: 8,
  },
  subtitle: {
    fontFamily: family.Montserrat_Medium,
    fontSize: size.xxsmall,
    color: colors.white,
    marginVertical: 10,
  },
  star: {
    fontSize: size.xxsmall,
    fontFamily: family.Montserrat_Medium,
    color: colors.white,
    marginLeft: 5,
  },
  profileimg: {width: 50, height: 50, borderRadius: 30},
  chat: {
    width: '80%',
    alignSelf: 'center',
    marginLeft: 40,
    borderWidth: 1,
    borderColor: colors.white,
    borderStyle: 'dashed',
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'transparent',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrapper: {
    borderBottomLeftRadius:20,
    backgroundColor:colors.preblack,
    borderBottomLeftRadius:50,borderBottomRightRadius:50,

  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius:30,borderBottomRightRadius:30,
    marginBottom:10,
    overflow:'hidden',
    height:'98%'
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius:30,borderBottomRightRadius:30,
    marginBottom:10,
    overflow:'hidden',
    height:'98%'
    
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius:30,borderBottomRightRadius:30,
    marginBottom:10,
    overflow:'hidden',
    height:'98%'
  },
 
  bannerimg:{height:300,width:400,borderBottomLeftRadius:20,borderBottomRightRadius:20}});
