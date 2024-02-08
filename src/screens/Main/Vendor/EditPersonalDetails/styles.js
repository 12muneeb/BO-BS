import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import { colors,family,size } from '../../../../utils';
import appStyles from '../../../appStyles';
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
    justifyContent: 'center',
    alignSelf:'center',
    width:'45%',

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
});

export default styles;
