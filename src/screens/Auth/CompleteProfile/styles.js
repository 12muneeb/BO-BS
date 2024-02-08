import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import appStyles from '../../appStyles';
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
    marginBottom: 40,
  },
  textNormal: {
    marginVertical: 20,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  logoStyle: {
    position: 'relative',
  },
  upload: {
    position: 'absolute',
    bottom: '16%',
    zIndex: 20,
    right: '28%',
  },
  subview: {
    flexDirection: 'row',
    gap: 10,
    // justifyContent: 'space-between',
    width: '45%',
    alignSelf: 'center',
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
  city: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    // width: '105%',
    ...appStyles.margin2Percent,
    borderColor: colors.white,
  },
  gendercolorafter: {
    color: colors.white,
    ...appStyles.font14,
    position: 'absolute',
    left: 20,
  },
  gendercolor: {
    color: colors.white,
    left: 20,
    fontFamily: family.Montserrat_SemiBold,
    ...appStyles.font15,
    position: 'absolute',
  },
  citybtn:{
    width: '95%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    ...appStyles.margin2Percent,
    borderColor: colors.white,
  }
});

export default styles;
