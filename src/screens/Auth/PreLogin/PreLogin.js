import {
  Dimensions,
  Image,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Toast from 'react-native-toast-message';
const {width} = Dimensions.get('window');
import CustomBackground from '../../../components/CustomBackground';
import CustomText from '../../../components/CustomText';
import Logo from '../../../components/Logo';
import {appIcons, appImages} from '../../../assets';
import {colors, family, size} from '../../../utils';
// import style from './styles';
import styles from './styles';
import CustomButton from '../../../components/CustomButton';

class PreLogin extends Component {
  state = {
    agreementModal: false,
    terms: false,
    policy: false,
    navigator: '',
  };

  render() {
    const {agreementModal, terms, policy, navigator} = this.state;
    const {role} = this.props?.route?.params;
    console.log('role', role);
    const methods = [
      {
        name: 'Email',
        icon: appIcons.email,
        onPress: () => navigation.navigate('Login', {role: role}),
        color: colors.pink,
      },
      {
        name: 'Phone',
        icon: appIcons.phone,
        color: colors.preblack,

        onPress: () => navigation.navigate('LoginPhone', {role: role}),

        // onPress: SocialSignin.Facebook,
      },

      {
        name: 'Google',
        icon: appIcons.google,
        color: colors.google,
        onPress: () =>
          Toast.show({
            text1: 'Google login for app is not setup',
            type: 'error',
            visibilityTime: 3000,
          }),
        // onPress: SocialSignin.Google,
      },

      {
        name: 'Apple',
        icon: appIcons.apple,
        color: colors.prewhite,
        onPress: () =>
          Toast.show({
            text1: 'Apple login for app is not setup',
            type: 'error',
            visibilityTime: 3000,
          }),
        // onPress: SocialSignin.Apple,
      },
    ];
    const {navigation} = this.props;
    return (
      <CustomBackground back={true} showLogo={false}>
        <View style={[styles.container, {padding: 15}]}>
          <View style={styles.space}>
            <Logo size={220} />
          </View>
          <View >
            <View style={{alignItems: 'center', paddingVertical: 15}}>
              <Text
                style={{
                  fontSize: size.xxlarge,
                  fontFamily: family.Roboto_Bold,
                  color: colors.white,
                }}>
                Pre Login
              </Text>
            </View>
            {methods.map((method, i) => {
              const {color, name, icon, onPress} = method;
              if (Platform.OS !== 'ios' && name === 'Apple') return null;
              return (
                <TouchableOpacity
                  onPress={onPress}
                  key={i}
                  activeOpacity={0.8}
                  style={[styles.buttonContainer, {backgroundColor: color}]}>
                  <Image source={icon} style={styles.buttonInnerImage} />

                  <Text style={[styles.buttonInnerText, {color: name == 'Apple' ? colors.black : colors.white}]}>
                    Sign in with {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
            {/* <CustomText text="OR" style={styles.preheading} />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonContainer}>
              <Image source={appIcons.guest} style={styles.buttonInnerImage} />

              <Text style={[styles.buttonInnerText, {color: colors.white}]}>
                Sign in with Guest
              </Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.bottomView}>
            <CustomText
              style={styles.txt1}
              text={'By signing up you agree to our'}
            />

            <View style={styles.main}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://google.com/')}>
                <CustomText style={styles.terms} text={'Terms & Conditions'} />
              </TouchableOpacity>
              <CustomText style={styles.txt2} text={' & '} />
              <TouchableOpacity
                onPress={() => Linking.openURL('https://google.com/')}>
                <CustomText style={styles.txt3} text={'Privacy Policy'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default PreLogin;
