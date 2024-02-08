import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
// import {colors, size, family} from '../utils';
// import Img from './Img';
import { colors,family,size } from '../utils';
import Img from './Img';
const TipsClick = ({item, viewcontainer, tips, titleStyle, onPress}) => {

  return (
    <View>
      <TouchableOpacity
        style={[styles.mainView, viewcontainer]}
        activeOpacity={0.8}
        onPress={item.onPress}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: tips ? null : 'center',
            width: '90%',
          }}>
          <Text style={[styles.title, titleStyle]}>{item?.title}</Text>
        </View>
        <View style={{position: 'absolute', right: 20}}>
          <Img
            local={true}
            src={item.image}
            style={styles.placeholder}
            // tintColor={colors.iconcolor}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TipsClick;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    alignSelf:'center',
    height: 55,
    ...Shadows.shadow5,
    width:'90%',
    
  },
  placeholder: {
    width: 8,
    height: 14,
    resizeMode: 'contain',
  },
  title: {
    color: colors.black,
    fontSize: size.xsmall,
    fontFamily: family.Montserrat_Medium,
  },
  profile: {
    width: 47,
    height: 47,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.red,
  },
});
