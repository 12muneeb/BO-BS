import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GEOCODE_API_KEY} from '../config/WebService';
import {colors, family, size, WP} from '../utils';
import {appIcons} from '../assets';
import Img from './Img';
const {width} = Dimensions.get('screen');
const GooglePlaceAutocomplete = ({
  callback,
  wrapperStyles,
  inputStyles,
  placeholder,
  iconColor,
  label,
  title,
  titleStyle,
  titleViewstyle,
  titleText,
  backgroundColor,
  rightIcon,
  onDelete,
  index,
  image,
  contStyles,
  imageStyle,
  colortext,
  placeholdercolor,
  addressText,
  handleAddressText,
  rightImg,
  value,
  locationNew,
  onCompleted = () => {},
}) => {
  const firstRender = useRef(true);
  const [newValue, setValueLocation] = useState('');
  const setLocation = text => {
    setValueLocation(text, locationNew);
    // if (newValue.length > 0) {
    //   newLoc('Yes');
    //   let payload = {
    //     newValue: loc,
    //   };
    //   onCompleted(payload);
    // }
  };
useEffect(()=>{
callback('','',newValue)
},[newValue])
  console.log('newValuenewValuenewValue', newValue);
  return (
    <View style={[styles.geoLocationView, wrapperStyles]}>
      <GooglePlacesAutocomplete
        enableHighAccuracyLocation
        fetchDetails
        disableScroll
        backgroundColor
        rightIcon
        enablePoweredByContainer={false}
        keepResultsAfterBlur={true}
        listViewDisplayed={false}
        onDelete={() => this.deletePoint(index)}
        placeholder={placeholder ? placeholder : ''}
        onPress={(data, details = null) => {
          const {formatted_address, geometry} = details;
          callback(formatted_address, geometry, label);
        }}
        renderRightButton={() => (
          <View
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginRight: 15,
                bottom: 1,
              },
              imageStyle,
            ]}>
            {rightImg && (
              <Img
                local
                src={appIcons.locate}
                resizeMode={'contain'}
                style={{width: 20, height: 20}}
              />
            )}
          </View>
        )}
        styles={{
          textInput: [
            {
              borderRadius: 8,
              color: colors.black,
            },
            contStyles,
          ],
          description: {color: colors.black},
        }}
        textInputProps={{
          placeholderTextColor: placeholdercolor
            ? placeholdercolor
            : colors.white,
          fontSize: size.normal,
          paddingLeft: 15,
          fontFamily: family.RedHatDisplay_Medium,
          color: colortext ? colortext : colors.white,
          onChangeText: setLocation,
        }}
        query={{
          key: 'AIzaSyBmaS0B0qwokES4a_CiFNVkVJGkimXkNsk',
          language: 'en',
        }}
      />
    </View>
  );
};
export default GooglePlaceAutocomplete;
const styles = StyleSheet.create({
  geoLocationView: {
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    height: 60,
    color: colors.black,
    borderRadius: 8,
  },
});
