import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
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
  buttonContainer: {
    backgroundColor: colors.preblue,
    borderRadius: 8,
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    height: 55,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonInnerImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    right: 10,
  },
  buttonInnerText: {
    fontFamily: family.Montserrat_Medium,
    fontSize: size.small,
  },
  terms: {
    color: colors.white,
    // top: 7,
    marginLeft: 2,
    padding: 2,
    fontSize: size.small,
    textDecorationLine: 'underline',
    fontFamily: family.Montserrat_Bold,
  },
  txt2: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: size.small,
  },
  txt1: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: size.xsmall,
    fontFamily: family.Montserrat_Regular,
  },
  txt3: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: size.small,
    textDecorationLine: 'underline',
    fontFamily: family.Montserrat_Bold,

    // top: 2,
    marginLeft: 2,
    marginBottom: Platform.OS == 'android' ? 2 : 0,
    fontSize: size.small,
  },
  bottomView: {
    bottom: 10,
    position: 'absolute',
    paddingBottom: Platform.OS == 'ios' ? 20 : 10,
  },
  main: {
    fontSize: size.small,
    // marginTop: 5,
    // backgroundColor:'red',
    alignItems: 'center',
    flexDirection: 'row',
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  space: {
    height: '30%',
  },
  preheading: {
    textAlign: 'center',
    color: colors.white,
    fontSize: size.large,
    marginVertical: 8,
    fontFamily: family.Montserrat_Medium,
  },
});

export default style;
