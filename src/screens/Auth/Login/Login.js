import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import * as EmailValidator from 'email-validator';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {schema} from '../../../utils/validation';
import {colors, family, size} from '../../../utils';
import {appIcons, appLogos} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import styles from './styles';
import Logo from '../../../components/Logo';
import CustomText from '../../../components/CustomText';

class Login extends Component {
  state = {
    email: '',
  };

  render() {
    const {role} = this.props?.route?.params;
    const {email} = this.state;
    const onSubmit = () => {
      const {email} = this.state;

      if (!email) {
        Toast.show({
          text1: 'Email address field can`t be empty.',
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!EmailValidator.validate(email)) {
        Toast.show({
          text1: 'Please enter a valid email address.',
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        Keyboard.dismiss();
        let payload = {
          email: 'abc@gmail.com',
          password: '123456',
        };
        NavService.navigate('Otp', {email: email, role: role});

        // this.props.loginUser(payload);
        Toast.show({
          text1: 'OTP verification code has been sent to your Email Address.',
          type: 'success',
          visibilityTime: 3000,
        });
      }
    };
    return (
      <CustomBackground
        showLogo={false}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <View style={[styles.container, {marginTop: 20}]}>
            <View style={styles.space}>
              <Logo size={220} />
            </View>
            <View style={{alignItems: 'center', paddingVertical: 10}}>
              <CustomText
                text="LOGIN"
                style={{
                  fontSize: size.xxlarge,
                  fontFamily: family.Roboto_Bold,
                  color: colors.white,
                }}
              />
            </View>
            <CustomTextInput
              leftIcon={appIcons.email}
              placeholder={'Enter Email Address'}
              value={email}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({email: value})}
              lable={'Email'}
              maxLength={35}
            />

            <CustomButton
              title="Next"
              onPress={onSubmit}
              buttonStyle={{borderRadius: 10, marginTop: 20}}
              textStyle={{fontSize: 14}}
            />
          </View>
        </View>
      </CustomBackground>
    );
  }
}
const actions = {loginUser};
export default connect(null, actions)(Login);
