import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Button,
} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { colors } from '../../../../utils';
import { appIcons } from '../../../../assets';
import CustomButton from '../../../../components/CustomButton';
import CustomTextInput from '../../../../components/CustomTextInput';
import Img from '../../../../components/Img';
import styles from './styles';
import AppBackground from '../../../../components/AppBackground';
import NavService from '../../../../helpers/NavService';
import Toast from 'react-native-toast-message';


const {width, height} = Dimensions.get('screen');

class AddNewPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      checked: false,

      selectedValue: null,
      bio: '',
      isDatePickerVisible: false,
      cardHolder: '',
      cardNumber: '',
      expDate: '',
      cvv: '',
    };
  }

  showDatePicker = () => {
    this.setState({isDatePickerVisible: true});
  };

  hideDatePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  handleDateConfirm = date => {
    const formattedDate = date.toISOString().split('T')[0];
    this.setState({expDate: formattedDate});
    this.hideDatePicker();
  };

  handleSubmit = () => {
    this.setState({checked: false});
    // Call your onSubmit function here or do whatever you need
  };

  render() {
    const {role} = this.props?.route.params;
    const {} = this.state;
    const minDate = new Date();
    // const onSubmit = () => {
    //   const {cardHolder, cardNumber, expDate, cvv} = this.state;
    //   if (cardHolder == '') {
    //     Toast.show({
    //       text1: `card holder field can't be empty`,
    //       type: 'error',
    //       visibilityTime: 3000,
    //     });
    //   } else if (cardNumber == '') {
    //     Toast.show({
    //       text1: `Card Number field can't be empty`,
    //       type: 'error',
    //       visibilityTime: 3000,
    //     });
    //   } else if (!/^\d+$/.test(cardNumber)) {
    //     Toast.show({
    //       text1: 'Card Number must be a numeric value',
    //       type: 'error',
    //       visibilityTime: 3000,
    //     });
    //   } else if (expDate == '') {
    //     Toast.show({
    //       text1: `Exp Date field can't be empty`,
    //       type: 'error',
    //       visibilityTime: 3000,
    //     });
    //   } else if (cvv == '') {
    //     Toast.show({
    //       text1: `Cvv field can't be empty`,
    //       type: 'error',
    //       visibilityTime: 3000,
    //     });
    //   } else {
    //     NavService.goBack();
    //   }
    // };
    const onSubmit = () => {
      const {cardHolder, cardNumber, expDate, cvv} = this.state;
      const invalidChars = /[.,@]/;
      if (cardHolder == '') {
        Toast.show({
          text1: `card holder field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (invalidChars.test(cardHolder)) {
        Toast.show({
          text1: 'Card Holder Name contains invalid characters (, @ or space)',
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (cardNumber == '') {
        Toast.show({
          text1: `Card Number field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!/^\d+$/.test(cardNumber)) {
        Toast.show({
          text1: 'Card Number must be a numeric value',
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (cardNumber.length !== 16) {
        Toast.show({
          text1: 'Card Number must be 16 digits long',
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (expDate == '') {
        Toast.show({
          text1: `Exp Date field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      }  else if (cvv == '') {
        Toast.show({
          text1: `CVV field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (cvv.length !== 3 && cvv.length !== 4) {
        Toast.show({
          text1: 'CVV must be 3 or 4 digits long',
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        NavService.goBack();
        Keyboard.dismiss();
        Toast.show({
          text1: 'Card added successfully.',
          type: 'error',
          visibilityTime: 3000,
        });
      }
    };
    return (
      <AppBackground title={'Add New card'} back>
            <View style={styles.viewStyle1}>
          <CustomTextInput
            containerStyle={styles.contast}
            maxLength={20}
            placeholder={'Card Holder'}
            value={this.state.cardHolder}
            placeholderColor={colors.black}
            borderRadius={20}
            isBorderShow
            borderColor={colors.primary}
            keyboardType={'default'}
            onChangeText={value => this.setState({cardHolder: value})}
            inputStyle={{color: colors.black}}
          />
          <CustomTextInput
            containerStyle={styles.contast}
            maxLength={16}
            placeholder={'Card Number'}
            value={this.state.cardNumber}
            placeholderColor={colors.black}
            borderRadius={20}
            isBorderShow
            borderColor={colors.primary}
            keyboardType={'phone-pad'}
            onChangeText={value => this.setState({cardNumber: value})}
            inputStyle={{color: colors.black}}
          />

          <CustomTextInput
            rightImg={appIcons.rollcelendar}
            showSoftInputOnFocus={false}
            containerStyle={{
              backgroundColor: colors.prewhite,
            }}
            maxLength={30}
            placeholder={'Exp Date'}
            value={this.state.expDate}
            placeholderColor={colors.black}
            borderRadius={20}
            isBorderShow
            borderColor={colors.primary}
            onFocus={this.showDatePicker}
            handlePress={this.showDatePicker}
            inputStyle={{color: colors.black}}
          />

          <CustomTextInput
            containerStyle={{backgroundColor: colors.prewhite}}
            maxLength={4}
            placeholder={'CVV'}
            value={this.state.cvv}
            placeholderColor={colors.black}
            borderRadius={20}
            isBorderShow
            borderColor={colors.primary}
            keyboardType={'phone-pad'}
            onChangeText={value => this.setState({cvv: value})}
            inputStyle={{color: colors.black}}
          />

          <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            mode="date"
            onConfirm={this.handleDateConfirm}
            onCancel={this.hideDatePicker}
            minimumDate={new Date()}
          />
          <CustomButton
            onPress={onSubmit}
            title={'Save'}
            buttonStyle={styles.btnstyle}
          />
        </View>
      </AppBackground>
    );
  }
}

export default AddNewPayment;
