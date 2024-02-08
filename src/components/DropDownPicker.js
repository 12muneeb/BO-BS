import React, {useRef} from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CustomText from '../components/CustomText';
import {size, colors} from '../utils';
import Img from './Img';
import {appIcons} from '../assets';

export default function DropDownPicker({
  data = [],
  onSelected = () => null,
  onCancel = () => null,
  value = '',
  title = '',
  showLabel = false,
  stateKey = '',
  arrowcolor = '',
  placeHolderColor = colors.black,
  containerStyle = {},
  dropDownLabelAlignment = {},
}) {
  console.log(data, 'velue', value, title, 'ttle');
  const pickerRef = useRef(null);
  return (
    <>
      {showLabel && (
        <CustomText
          text={title}
          style={dropDownLabelAlignment}
          font={'Jost_Black'}
          size={size.normal}
        />
      )}
      <TouchableOpacity
        onPress={() => pickerRef.current?.show()}
        activeOpacity={0.8}
        style={containerStyle}>
        <CustomText
          text={value ? value : title}
          size={15}
          color={placeHolderColor}
        />

        <Img
          local
          src={appIcons.drop}
          resizeMode={'contain'}
          style={{width: 15, height: 15}}
        />
        <ReactNativePickerModule
          ref={pickerRef}
          value={value}
          title={title}
          items={data}
          titleStyle={{
            color: Platform.OS == 'android' ? colors.black : colors.primary,
          }}
          tintColor={
            Platform.OS == 'android' ? colors.black : colors.primary
          }
          itemStyle={{
            color: colors.black,
            
          }}
          selectedColor={colors.black}
          confirmButtonEnabledTextStyle={{
            color:
              Platform.OS == 'android' ? colors.black : colors.primary,
          }}
          confirmButtonDisabledTextStyle={{
            color: colors.border,
          }}
          cancelButtonTextStyle={{
            color:
              Platform.OS == 'android' ? colors.black : colors.primary,
          }}
          confirmButtonStyle={{
            backgroundColor: colors.black,
          }}
          cancelButtonStyle={{
            backgroundColor: colors.black,
          }}
          contentContainerStyle={{
            backgroundColor: colors.black,
          }}
          onCancel={() => {
            onCancel();
          }}
          onValueChange={value => {
            console.log('belueee', value, 'state', stateKey);
            onSelected(stateKey, value);
          }}
        />
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});
