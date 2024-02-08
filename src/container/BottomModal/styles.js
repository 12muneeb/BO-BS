import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');
import {colors, size, family} from '../../utils';

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
  },

  modalChild: {
    width: width,
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    width: '38%',
  },
  input: {
    backgroundColor: colors.lightshade,
    width: '90%',
    height: 50,
  },
  arrow: {
    fontSize: 13,
    color: colors.black,
  },
  txt: {
    marginTop: 15,
    marginLeft: 10,
    color: colors.primary,
    fontWeight: 'bold',
  },
  gendercolor: {
    fontSize: size.xsmall,
    fontFamily: family.Roboto_Light,
    color: colors.black,
  },
  gendercolorafter: {
    fontSize: size.xsmall,
    fontFamily: family.Montserrat_Regular,
    color: colors.black,
  },
  gender: {
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.lightshade,
    width: '95%',
    paddingRight: 55,
    marginTop: 18,
  },
  genders: {
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.lightshade,
    width: '95%',
    paddingRight: 55,
    marginLeft: 8,
    marginTop: 18,
  },
});
