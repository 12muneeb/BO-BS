import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
//   import {colors, family, size} from '../utils';
//   import CustomText from './CustomText';
//   import Shadows from '../helpers/Shadows';
import { colors,size,family } from '../utils';
import CustomText from './CustomText';
import Shadows from '../helpers/Shadows';
  const {width,height} = Dimensions.get('screen');
  
  const CustomTabView = ({
    item,
    width,
    btnWidth,
    onPress,
    isActive,
    customContainer,
  }) => {
    const renderItem = ({item: _item}) => (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.btn,
          {
            // backgroundColor:
            //   isActive === _item.id ? colors.secondary : colors.lightdark,
            width: btnWidth,
          },
        ]}
        onPress={() => onPress(_item.id)}>
        <CustomText
          size={size.xsmall}
          font={family.Roboto_Bold}
          color={isActive === _item.id ? colors.white : colors.lightshadow}
          text={_item.btn}
        />
      </TouchableOpacity>
    );
  
    return (
      <View style={[styles.container, {width: width}, customContainer]}>
        <FlatList
          horizontal
          data={item}
          renderItem={renderItem}
          keyExtractor={_item => _item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  
  export default CustomTabView;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: 5,
      alignSelf: 'center',
  
    
    },
    btn: {
      borderRadius: 10,
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginVertical:8,
      paddingHorizontal:20,
      marginLeft:10
    },
    text: {
      fontFamily: family.Poppins_Medium,
    },
  });
  