import {StyleSheet, Dimensions} from 'react-native';

// import { colors,size,family } from '../../../../utils';
// import Shadows from '../../../../helpers/Shadows';
const {width, height} = Dimensions.get('screen');
import { colors,size,family } from '../../../utils';
import Shadows from '../../../helpers/Shadows';
export const styles = StyleSheet.create({
  viewStyle1: {
flex:1,

  },
  viewStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  //   tchStyle1: {
  //     position: 'absolute',
  //     right: 20,
  //     top: 20,
  //     padding: 5,
  //   },
  tchStyle2: {
    paddingBottom: 10,
    borderBottomWidth: 0.75,
    borderColor: colors.secondary,
  },
  txtStyle1: {
    color: colors.white,
    fontSize: size.large,
    fontFamily: family.Roboto_Bold,
    textAlign: 'center',
  },
  txtStyle2: {
    color: colors.black,
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_Medium,
    textAlign: 'center',
    paddingHorizontal: '20%',
    marginTop: 20,
  },
  txtStyle3: {
    color: colors.black,
    fontFamily: family.Roboto_Light,
    fontSize: size.small,
    left: 0,
    top: 5,
  },
  btnstyle: {
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
    position:'absolute',
    bottom:30
  },
  cont: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.5,
    elevation: 7,
    height: 85,
  },
  img: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    right: 5,
    top: 5,
  },
  empty: {borderWidth: 1},
  containerheight: {
    height: 150,
    width: '100%',
    backgroundColor: colors.belege,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: colors.red,
  },
  searchcontainerheight: {
    height: 120,
  },
  cancel: {width: 15, height: 15},
  button: {position: 'absolute', bottom: 10, width: '100%'},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  radioButton: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    backgroundColor:colors.lightshade,
    paddingVertical:15,
    borderRadius:8
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.secondary, 
  },
  label: {
    color:colors.black
  },
  selectedText: {
    marginTop: 16,
    fontSize: 18,
  },
  input: {
        padding: 10,
        width: '50%',
        borderRadius:10,
        backgroundColor:colors.white,
        borderWidth:2,
        borderColor:colors.secondary,
        color:colors.black
      },
      rowContainer: {
        flexDirection: 'row',
      },
      expDateInput: {
      },
      cvvInput: {
        flex: 1,
        marginLeft: 10,
      },
      contast:{
        backgroundColor:colors.prewhite,
      }
});

export default styles;
