import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {colors, family, size} from '../../../../utils';
export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: colors.prewhite,
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.darkpink,
  },
  txt: {
    color: colors.black,
    fontSize: size.xsmall,
    fontFamily: family.Poppins_Medium,
    marginLeft: 10,
  },
  card: {
    color: colors.white,
    marginLeft:10
  },
  cardcontent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20
  },
  btnstyle: {
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
    position: 'absolute',
    bottom: 30,
  },
});

export default styles;
