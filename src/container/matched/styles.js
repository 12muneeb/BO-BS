import {StyleSheet, Dimensions} from 'react-native';
import {colors, size, family} from '../../utils';
import Shadows from '../../helpers/Shadows';
import appStyles from '../../screens/appStyles';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  viewStyle1: {
    backgroundColor: colors.white,
    borderRadius: 10,
    ...Shadows.shadow5,
    paddingBottom: 20,
    padding: 3,
  },
  viewStyle2: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    right: 2,
  },
  tchStyle1: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  tchStyle2: {
    paddingBottom: 10,
    borderBottomWidth: 0.75,
    borderColor: colors.secondary,
  },
  txtStyle1: {
    color: colors.secondary,
    fontSize: size.h4,
    fontFamily: family.Roboto_Bold,
    textAlign: 'center',
    marginTop: 20,
  },
  txtStyle2: {
    color: colors.black,
    fontSize: size.small,
    fontFamily: family.Poppins_Regular,
    textAlign: 'center',
    marginTop: 15,
    marginHorizontal: 50,
  },
  btnstyle: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: colors.pink,
    marginTop: 25,
    borderRadius: 10,
  },
  txtbtn: {
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.medium,
  },
  imgbg1: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  completed: {
    height: 50,
    width: 50,
  },
  completed1: {
    backgroundColor: '#01DC37',
    alignItems: 'center',
    marginHorizontal: 100,
    paddingVertical: 50,
    ...appStyles.margin2Percent,
    borderRadius: 100,
  },
  heart: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  profiletxt: {
    textAlign: 'center',
    top: 8,
    fontSize: size.large,
    color: '#BF9227',
    fontFamily: family.RedHatDisplay_Bold,
  },
  touchttitle: {
    color: colors.white,
    top: 18,
    fontSize: size.normal,
    fontFamily: family.Montserrat_Regular,
  },
});

export default styles;
