import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, Keyboard} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {appIcons} from '../assets/index';
import {appImages} from '../assets';
import {colors, family} from '../utils';
import NavService from '../helpers/NavService';
import Shadows from '../helpers/Shadows';
import {CustomSearchInput} from './CustomTextInput';
import Img from './Img';
import {Screen} from 'react-native-screens';
function AppBackground({
  children,
  title,
  back = false,
  menu = false,
  nav = '',
  rightIcon = appIcons.notification,
  marginHorizontal = true,
  rightIconimage,
  childrenContainerStyle = {},
  curve,
  handleOn,
  popup,
  backgroundimage,
  OtherHomePress = () => {},
  rightIcn,
  Searchtext,
  backPre=false,
  onBack = null,

  rightIconNav = () => {
    NavService.navigate('Notification');
  },
  rightimage,
  rightimageonPress = () => {},

  notification = false,
}) {
  const [searchvalue, setSearchvalue] = useState('');
  return (
    <>
      <View style={{flex: 1, backgroundColor: colors.preblack}}>
        {Searchtext && (
          <View
            style={{
              position: 'absolute',
              top: 90,
              zIndex: 10,
              gap: 10,
              marginLeft: 30,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <CustomSearchInput
              filter
              placeholder={'Search...'}
              rightImagetintColor={colors.red}
              placeholderTextColor={colors.black}
              editable={true}
              value={searchvalue}
              onChangeText={value => setSearchvalue(value)}
              containerStyle={{
                marginTop: 20,
                width: 280,
                paddingHorizontal: 40,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setSearchvalue('');
                OtherHomePress();
                Keyboard.dismiss()
              }}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 15,
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 20,
                backgroundColor: colors.primary,
                justifyContent: 'center',
              }}>
              <Img
                local
                resizeMode={'contain'}
                rightImage={rightIcn ? rightIcn : appIcons?.otherhome}
                src={rightIcn ? rightIcn : appIcons.list}
                tintColor={colors.white}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            marginTop:
              curve || backgroundimage ? null : getStatusBarHeight() * 1.4,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: backgroundimage ? 0 : 30,
            backgroundColor: curve ? colors.black : 'transparent',
            paddingVertical: curve ? 50 : null,
            borderBottomLeftRadius: curve ? 25 : 0,
            borderBottomRightRadius: curve ? 25 : 0,
          }}>
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                nav.length
                  ? NavService.navigate(nav)
                  : back
                  ? NavService.goBack()
                  : NavService.openDrawer();
              }}
              style={{
                position: 'absolute',
                alignItems: 'center',
                backgroundColor: 'transparent',
                borderRadius: menu ? 10 : 0,
                left: 15,
                width: 45,
                height: 45,
                justifyContent: 'center',
                // ...Shadows.shadow3,
              }}>
              {back && (
                <Image
                  source={appIcons.back}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: 'contain',
                    tintColor: colors.white,
                  }}
                />
              )}
              {backPre && (
                <TouchableOpacity
                  onPress={() => {
                    if (onBack != null) {
                      onBack();
                    } else {
                      NavService?.navigate('PreLogin');
                    }
                  }}
                  style={{
                    position: 'absolute',
                    left: 10,
                  }}>
                  <Image
                    source={appIcons.back}
                    style={{width: 25, height: 25, resizeMode: 'contain',}}
                  />
                </TouchableOpacity>
              )}
              {menu && (
                <Image
                  source={appIcons.hamburger}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                    tintColor: colors.white,
                  }}
                />
              )}
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: colors.white,
                  fontFamily: family.Montserrat_SemiBold,
                  fontSize: 17,
                }}>
                {title}
              </Text>
            </View>
            {notification && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  NavService.navigate('Notifications');
                }}
                style={{
                  position: 'absolute',
                  right: 20,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image
                  source={rightIcon}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: 'cover',
                  }}
                />
              </TouchableOpacity>
            )}
            {rightimage && (
              <TouchableOpacity
                onPress={() => {
                  setSearchvalue('');
                  OtherHomePress();
                  Keyboard.dismiss()
                }}
                style={{
                  position: 'absolute',
                  right: 20,
                  width: 45,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={rightIconimage}
                  style={{
                    tintColor: colors.white,
                    width: 24,
                    height: 24,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            )}
            {popup && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleOn}
                style={{
                  position: 'absolute',
                  right: 20,

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  source={appIcons.popup}
                  style={{
                    width: 22,
                    height: 22,
                  }}
                />
              </TouchableOpacity>
            )}
          </>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: !marginHorizontal ? 20 : 0,
            marginBottom: 10,
            overflow: 'visible',
          }}>
          {children}
        </View>
      </View>
    </>
  );
}
export default AppBackground;
