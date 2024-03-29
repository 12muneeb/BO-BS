import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  BackHandler,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {appIcons, appImages} from '../assets';
import NavService from '../helpers/NavService';
import Logo from './Logo';

export default ({
  children,
  showLogo = true,
  back = true,
  title = true,
  titleText,
  onBack = null,
  backPre=false,
  background
}) => {
  return (
    <ImageBackground source={background ? null : appImages.background} style={{flex: 1}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          paddingTop: showLogo ? 0 : getStatusBarHeight() + 10,
        }}>
        {back && (
          <TouchableOpacity
            onPress={() => {
              if (onBack != null) {
                onBack();
              } else {
                NavService.goBack();
              }
            }}
            style={{
              position: 'absolute',
              zIndex: 99,
              top: getStatusBarHeight() + 20,
              left: 20,
            }}>
            <Image
              source={appIcons.back}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
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
              top: getStatusBarHeight() + 20,
              left: 20,
            }}>
            <Image
              source={appIcons.back}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        )}
        {title && (
          <View>
            <Text style={styles.headerSignInText}>{titleText}</Text>
          </View>
        )}
        {showLogo && (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Logo size={220} />
          </View>
        )}
        <View style={{flex: 3}}>{children}</View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerSignInText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    top: 8,
  },
  headerContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButtonContainer: {
    position: 'absolute',
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {width: 25, height: 25, tintColor: '#9c9c9c'},
});
