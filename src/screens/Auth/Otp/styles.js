import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import Shadows from '../../../helpers/Shadows';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS == 'ios' ? 30 : 20,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  title: {
    color: colors.black,
    fontSize: size.xxlarge,
    fontFamily: family.Roboto_Bold,
    marginBottom: 8,
  },
  disabledResend: {
    color: colors.white,
    fontFamily: family.Poppins_Bold,
    fontSize:size.small
  },
  underlineStyleBase: {
    width: 45,
    height: 55,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderWidth: 1,
    color: colors.white,
    fontSize: 17,
    marginHorizontal: 2,
  },
  textNormal: {
    color: colors.white,
    fontFamily:family.Poppins_Regular,
    fontSize:size.small
  },
  textNormalWithColor: {
    color: colors.white,
  fontSize:size.small,
  fontFamily:family.Poppins_Bold,
    marginTop: -2,

    textDecorationLine: 'underline',
  },
  time: {
    color: colors.white,
  },
  otpInput: {
    width: '90%',
    height: 55,
    alignSelf: 'center',
    marginVertical: 40,
  },
  timerText: {
    alignSelf: 'flex-end',
    color: 'black',
    fontSize: 13,
    marginBottom: 10,
    marginRight: 27,
  },
  clock: {
    // backgroundColor:colors.darkBlue,
  },
  subtitle: {
    fontSize: size.xsmall,
    fontFamily: family.Roboto_Regular,
  },
  logoStyle: {
    // backgroundColor:'red'
  },
});

export default styles;
