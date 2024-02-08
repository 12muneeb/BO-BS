import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../../utils';
import appStyles from '../../../appStyles';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 30,
    marginVertical: 10,
  },
  title1: {
    color: colors.white,
    fontFamily: family.Montserrat_Medium,
    ...appStyles.font15,
  },
  mainheading: {
    ...appStyles.directionRow,
    ...appStyles.justifySpaceBetween,
    ...appStyles.alignCenter,
    ...appStyles.paddingVertical_2,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: colors.white,
  },
  subheading: {
    ...appStyles.family_Montserrat_Regular,
    fontSize: size.xxsmall,
    color: colors.white,
  },
  eventDetail: {
    height: 155,
    opacity: 0.7,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    width: '90%',
    marginVertical: 10,
  },
});

export default styles;
