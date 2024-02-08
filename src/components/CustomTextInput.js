import React, {useState} from 'react';
import {TouchableOpacity, View, Image, TextInput, Text} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {appIcons} from '../assets';
import {colors, size, family} from '../utils';
export default function CustomTextInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    borderStyles,
    lable,
    inputStyle,
    lft,
    searchIcon,
    rightImg,
    handlePress,
    onSearch = () => {},
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <View style={{width: '100%', marginTop: 18}}>
      {isFocused ? (
        <View
          style={{
            // borderBottomWidth:1,
            position: 'absolute',
            zIndex: 100,
            color: colors.white,
            fontSize: 13,
            bottom: 47,
            left: 10,
            backgroundColor: '#00000080',
            // paddingHorizontal: 10,
            borderRadius: 40,
          }}>
          <Text
            style={{
              // position: 'absolute',
              // zIndex: 100,
              color: colors.white,
              fontFamily: family.Montserrat_SemiBold,
              fontSize: 10,
              left: lft ? 25 : 0,
              // fontSize: 13,
              // bottom: 47,
              // left: 8,
              // backgroundColor: 'transparent',
              // paddingHorizontal: 10,
            }}>
            {lable}
          </Text>
        </View>
      ) : (
        ''
      )}
      <View
        style={[
          {
            alignSelf: 'center',
            width: '88%',

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isFocused ? 'transparent' : colors.darkGray,
            borderRadius: 10,
            paddingHorizontal: 7,
            paddingVertical: 2,
            height: 55,
            borderWidth: 1,
            borderColor: isFocused ? colors.white : colors.white,
            marginVertical: 0,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: colors.white,
              marginHorizontal: 10,
            }}
          />
        ) : null}
        {props?.leftIcon ? (
          <View
            style={{backgroundColor: '#ABA6A6', width: 1, height: 25}}></View>
        ) : null}
        <View
          style={[
            {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderLeftWidth: 0,
              borderLeftColor: colors.border,
            },
            borderStyles,
          ]}>
          <TextInput
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholderTextColor={props?.placeholderColor || colors.white}
            returnKeyType="done"
            blurOnSubmit={true}
            style={[
              {
                flex: 1,
                color: colors.white,
                paddingLeft: 7,
                fontSize: size.xsmall,
                fontFamily: family.Montserrat_Regular,
              },
              inputStyle,
            ]}
            secureTextEntry={hidden}
            autoCapitalize="none"
            {...props}
          />
          {props?.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={!hidden ? appIcons.eye : appIcons.eyeNot}
                style={{
                  height: 22,
                  width: 22,
                  marginRight: 10,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
          {props?.searchIcon && (
            <TouchableOpacity activeOpacity={0.8} onPress={onSearch}>
              <Image
                source={appIcons.search}
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 10,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
          {props?.rightImg && (
            <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
              <Image
                source={rightImg}
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 10,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
export function ProfileTextInput(props) {
  const {icon} = props;
  return (
    <View
      style={{
        width: '100%',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.border,
        paddingHorizontal: 10,
        // backgroundColor: colors.cardBackground,
      }}>
      <Image
        source={icon}
        style={{width: 15, height: 15, resizeMode: 'contain'}}
      />
      <TextInput
        style={{
          width: '100%',
          height: 50,
          color: colors.primary,
          marginLeft: 10,
          fontFamily: family.Outfit_Regular,
        }}
        placeholderTextColor={'#7E7E7E'}
        {...props}
      />
    </View>
  );
}
export function CustomPhoneInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    lable,
  } = props;
  return (
    <View style={{width: '100%'}}>
      {isFocused ? (
        <View
          style={{
            // borderBottomWidth:1,
            position: 'absolute',
            zIndex: 100,
            color: colors.white,
            fontSize: 13,
            bottom: 47,
            left: 10,
            backgroundColor: '#00000080',
            // paddingHorizontal: 10,
            borderRadius: 40,
          }}>
          <Text
            style={{
              // position: 'absolute',
              // zIndex: 100,
              color: colors.white,
              // fontSize: 13,
              // bottom: 47,
              // left: 8,
              // backgroundColor: 'transparent',
              // paddingHorizontal: 10,
            }}>
            {lable}
          </Text>
        </View>
      ) : (
        ''
      )}
      {/* <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
        {placeholder}
      </Text> */}
      <View
        style={[
          {
            alignSelf: 'center',
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isFocused ? 'transparent' : colors.white,
            borderRadius: 10,
            paddingHorizontal: 7,
            paddingVertical: 5,
            height: 55,
            marginVertical: 0,
            borderWidth: 1,
            borderColor: isFocused ? colors.white : colors.darkGray,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: colors.white,
              marginHorizontal: 10,
            }}
          />
        ) : null}
        {props?.leftIcon ? (
          <View
            style={{backgroundColor: '#ABA6A6', width: 1, height: 25}}></View>
        ) : null}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            // borderLeftWidth: 1,
            // borderLeftColor: colors.border,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextInputMask
              type={'cel-phone'}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholderTextColor={props?.placeholderColor || colors.white}
              style={{
                flex: 1,
                color: colors.white,
                paddingLeft: 7,
                fontSize: size.xsmall,
                fontFamily: family.Montserrat_Regular,
              }}
              onChangeText={phoneNumberFormat => {
                let phoneNumber = phoneNumberFormat
                  .toString()
                  .replace(/\D+/g, '');
                props?.onChangePhoneInput(phoneNumberFormat, phoneNumber);
              }}
              maxLength={
                props?.formattedPhoneNumber.toString().startsWith('1') ? 18 : 19
              }
              options={
                props?.phoneNumber.startsWith('1')
                  ? {
                      dddMask: '9 (999) 999 - ',
                    }
                  : {
                      dddMask: '(999) 999 - ',
                    }
              }
              {...props}
            />
            {props.verify && (
              <Text
                style={{
                  color: colors.red,
                  alignSelf: 'center',
                  textDecorationLine: 'underline',
                }}>
                Verify
              </Text>
            )}
          </View>
          {props.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={!hidden ? appIcons.Visible : appIcons.Unvisible}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
export function CustomSearchInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const {
    containerStyle,
    Iconcolor,
    Lineiconcolor,
    labeltext,
    label,
    rightImage,
    rightImagetintColor,
    handleSearch = () => {},
    editable,
    customTextStyles,
    placeholderTextColor,
    searchIcon,
    filter,
    onfilter = () => {},
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.94}
      onPress={handleSearch}
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.white,
          borderRadius: 10,
          height: 55,
          ...Shadows.shadow3,
        },
        containerStyle,
      ]}>
      {props?.leftIcon && (
        <Image
          source={props?.leftIcon}
          style={{
            width: 22,
            height: 22,
            resizeMode: 'contain',
            tintColor: Iconcolor,
          }}
        />
      )}

      {props?.Lineicon && (
        <Image
          source={props?.Lineicon}
          style={{
            width: 18,
            height: 30,
            resizeMode: 'contain',
            tintColor: Lineiconcolor,
            marginHorizontal: -10,
          }}
        />
      )}
      {label && (
        <CustomText
          text={labeltext}
          style={{
            color: colors.secondary,
            ...appStyles.font14,
            ...appStyles.margin1Percent,
            ...appStyles.family_Poppins_SemiBold,
          }}
        />
      )}

      <TextInput
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : colors.gray
        }
        placeholder={props?.placeholder}
        style={[
          {
            flex: 1,
            color: colors.black,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: size.small,
            backgroundColor: colors?.white,
            fontFamily: family.RedHatDisplay_Regular,
          },
          customTextStyles,
        ]}
        secureTextEntry={hidden}
        autoCapitalize="none"
        editable={editable}
        {...props}
      />
      {filter && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{position: 'absolute', left: 10}}
          onPress={onfilter}>
          <Image
            source={appIcons.search}
            style={{
              height: 20,
              width: 20,
              marginRight: 10,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      )}
      {filter && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{position: 'absolute', right: 20}}
          onPress={onfilter}>
          <Image
            source={appIcons.filter}
            style={{
              height: 20,
              width: 20,
              marginRight: -10,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}
