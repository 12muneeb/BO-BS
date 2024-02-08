import {StyleSheet} from 'react-native';
import { colors,family,size } from '../../../../utils';
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
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
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
  curve:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtheading1:{
    color:colors.white,fontFamily:family.Poppins_Medium,
    fontSize:size.small,
    marginLeft:25,
    marginBottom:10
  },
  headtxt:{
    fontFamily:family.Poppins_Medium,
    fontSize:size.xxsmall,
    color:colors.black
  },
  headtxt1:{
    fontFamily:family.Montserrat_Regular,
    fontSize:size.xxsmall,
    color:colors.black,
    bottom:3
  },
  headcard:{
    backgroundColor: colors.prewhite,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    justifyContent: 'center',
    paddingVertical:12
  },
  subheadcard:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
  },
  ratemain:{
    backgroundColor: colors.pink,
    width: '70%',
    height: 12,
    marginTop: 5,
    borderRadius: 8,
  },
  ratesubmain:{backgroundColor:colors.yellow,width:'85%',height:12,borderRadius:8},
  scan:{width: 45, height: 45},
  scanhead:{position: 'absolute', right: 15}
});

export default styles;
