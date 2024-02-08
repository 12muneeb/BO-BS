import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {colors, family, size} from '../../../utils';
import {appLogos} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';
import Logo from '../../../components/Logo';
import CustomText from '../../../components/CustomText';
import appStyles from '../../appStyles';

class LoginPhone extends Component {
  state = {
    email: '',
    password: '',
    phoneNumber: '',
    formattedPhoneNumber: '',
    phone_number_value: '',
    FormattedValue: '',
  };

  render() {
    const {role} = this.props?.route?.params;
    console.log('eess', role);
    const onSubmit = () => {
      const {phone_number_value, FormattedValue} = this.state;
      if (phone_number_value == '') {
        Toast.show({
          text1: `Phone number field cant't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (FormattedValue?.length < 11 || FormattedValue?.length > 16)
        return Toast.show({
          text1: 'Invalid phone number',
          type: 'error',
          visibilityTime: 3000,
        });
      else if (
        FormattedValue.includes('.') ||
        FormattedValue.includes(',') ||
        FormattedValue.includes('-') ||
        FormattedValue.includes(' ')
      ) {
        Toast.show({
          text1: 'Invalid phone number',
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        Keyboard?.dismiss();
        NavService.navigate('Otp', {
          screenName: 'loginPhone',
          phone_number_value: phone_number_value,
          role: role,
        });
        Toast.show({
          text1: 'We have resend  OTP verification code at your Phone Number.',
          type: 'success',
          visibilityTime: 3000,
        });
      }
    };
    const {
      email,
      password,
      phoneNumber,
      formattedPhoneNumber,
      phone_number_value,
      FormattedValue,
    } = this.state;

    const phoneInput = React.createRef(null);
    return (
      <CustomBackground
        showLogo={false}
        onBack={() => this.props.navigation.goBack()}>
        <View style={[styles.container, {marginTop: 20}]}>
          <View style={styles.space}>
            <Logo size={220} />
          </View>
          <View style={{alignItems: 'center', paddingVertical: 10}}>
            <CustomText
              text="LOGIN"
              style={{
                fontSize: size.xlarge,
                fontFamily: family.Roboto_Bold,
                color: colors.white,
              }}
            />
          </View>
          <View style={styles.phone}>
            {/* <CustomText
              text="Phone Number"
              style={{
                color: colors.white,
                position: 'absolute',
                ...appStyles.font13,
                left: 100,
                top:-10,
              }}
            /> */}
            <PhoneInput
              ref={phoneInput}
              defaultValue={phone_number_value}
              defaultCode="US"
              layout="second"
              countryPickerButtonStyle={{}}
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textContainerPhone}
              textInputStyle={{color: colors.white}}
              flagButtonStyle={styles.Flag}
              onChangeText={text => {
                this.setState({phone_number_value: text});
              }}
              onChangeFormattedText={text => {
                this.setState({FormattedValue: text});
              }}
              withDarkTheme
              placeholder={'Phone Number'}
              textInputProps={{
                placeholderTextColor: colors.white,
                maxLength: 11,
                height: 55,
              }}
            />
          </View>

          <CustomButton
            title="Next"
            onPress={onSubmit}
            buttonStyle={{borderRadius: 10, marginTop: 20}}
            textStyle={{fontSize: 14}}
          />
        </View>
      </CustomBackground>
    );
  }
}
const actions = {loginUser};
export default connect(null, actions)(LoginPhone);
