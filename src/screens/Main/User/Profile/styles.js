import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../../utils';
import appStyles from '../../../appStyles';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 30,
    marginVertical: 10,
  },
  name: {
    color: colors.white,
    fontFamily: family.Montserrat_Medium,
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
});

export default styles;
