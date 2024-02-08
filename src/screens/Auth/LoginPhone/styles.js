import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import Shadows from '../../../helpers/Shadows';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  login: {
    fontSize: size.xxlarge,
    fontFamily: family.Roboto_Bold,
    color: colors.black,
  },

  forgot: {
    alignSelf: 'flex-end',
  },
  btn: {
    borderRadius: 8,
    backgroundColor: colors.secondary,
    height: 55,
    marginTop: 15,
    left: 5,
  },
  names: {
    fontSize: size.xsmall,
    fontFamily: family.Roboto_Regular,
    color: colors.black,
    marginVertical: 5,
    marginBottom: 20,
    // marginHorizontal:10
  },
  maincontainer: {alignItems: 'center', marginTop: -25},
  phoneContainer: {
    borderRadius: 8,
    marginRight: 20,
    width: '90%',
    
    backgroundColor: 'transparent',
  },
  textContainerPhone: {
    borderRadius: 8,
    height: 55,
    left: 20,

    backgroundColor: 'trasnparent',
    borderWidth: 1,
    borderColor: colors.white,
  },
  Flag: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 55,
    width: 60,
    borderRadius: 8,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.white,
  },
  phone: {
    marginTop: 30,
  },
});

export default styles;
