// export default Otp;
import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  BackHandler,
} from 'react-native';
import Toast from 'react-native-toast-message';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import NavService from '../../../helpers/NavService';
import {appLogos} from '../../../assets/index';
import styles from './styles';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import CustomText from '../../../components/CustomText';
import {colors, family, size} from '../../../utils';
import Logo from '../../../components/Logo';
import {useFocusEffect} from '@react-navigation/native';

const Otp = ({navigation, route}) => {
  const {screenName, phone_number_value, email} = route.params;
  let timer;
  const [code, setCode] = useState();
  const [isFocused, setIsFocused] = useState(false);
  const [timerCode, setTimerCode] = useState(59);
  const [resend, setResend] = useState(false);
  const [key, setKey] = useState(0);
  const [resendOtpActive, setResendOtpActive] = useState(false);

  const handleCodeFilled = code => {
    const {role, phone_number_value, mail} = route?.params;
    if (!code || code.length === 0) {
      Toast.show({
        text1: 'OTP field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (code !== '123456') {
      Toast.show({
        text1: 'Invalid OTP verification code.',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Keyboard.dismiss();
      setTimeout(() => {
        NavService.navigate('CompleteProfile', {
          role: role,
          phone_number_value: phone_number_value,
          email: email,
        });
      }, 850);
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        NavService.navigate('PreLogin');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const startInterval = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      setTimerCode(timerCode => {
        if (timerCode > 0) {
          return timerCode - 1;
        } else {
          setResend(true);
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };
  const onCompleteTimer = () => {
    setResendOtpActive(true);
  };
  const handleReset = () => {
    const phoneAlert =
      'OTP verification code has been resend to your Phone Number.';
    const emailAlert =
      'OTP verification code has been resend to your Email Address.';
    if (resend) {
      setKey(prevKey => prevKey + 1);
      setResendOtpActive(false);
      setTimerCode(59);
      setResend(false);
      setCode();
      startInterval();
      Toast.show({
        text1: phone_number_value ? phoneAlert : emailAlert,
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Toast.show({
        text1: 'Please wait untill timer finishes!',
        type: 'error',
        visibilityTime: 3000,
      });
    }
  };

  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CustomBackground showLogo={false} backPre back={false}>
      <View style={styles.container}>
        <View style={[styles.container, {padding: 20}]}>
          <View style={styles.space}>
            <Logo size={220} />
          </View>
          <View style={{alignItems: 'center', paddingVertical: 10}}>
            <CustomText
              text="Verification"
              style={{
                fontSize: size.xxlarge,
                fontFamily: family.Roboto_Bold,
                color: colors.white,
              }}
            />
            <Text
              style={{
                fontSize: size.normal,
                fontFamily: family.Montserrat_Medium,
                color: colors.white,
                textAlign: 'center',
                marginTop: 24,
              }}>
              We have sent you containing 6 digits {'\n'} verification code.
              Please enter the {'\n'} code to verify your identity.
            </Text>
          </View>

          <OTPInputView
            selectionColor={colors.white}
            keyboardType="numeric"
            style={styles.otpInput}
            pinCount={6}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={handleCodeFilled}
            code={code}
          />
          <View style={styles.clock}>
            <CountdownCircleTimer
              isPlaying
              rotation={'counterclockwise'}
              trailColor={colors.lightpink}
              key={key}
              duration={59}
              colors={[colors.white, colors.primary]}
              colorsTime={[6, 4]}
              size={115}
              strokeWidth={3}
              onComplete={onCompleteTimer}>
              {({remainingTime}) => {
                const minutes = Math.floor((remainingTime % 3600) / 59);
                const seconds = remainingTime % 59;
                return (
                  <View
                    style={{
                      backgroundColor: colors.lightpink,
                      height: 110,
                      width: 110,
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <CustomText
                      text={`00:${
                        timerCode < 10 ? '0' + timerCode : timerCode
                      }`}
                      style={styles.time}
                    />
                  </View>
                );
              }}
            </CountdownCircleTimer>
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.textNormal}>Didn't Receive Code? </Text>

        <TouchableOpacity onPress={() => handleReset()}>
          <Text style={[styles.textNormalWithColor]}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </CustomBackground>
  );
};

export default Otp;
