import {Text, View} from 'react-native';
import React, {Component} from 'react';
import CustomTextInput from '../../../../components/CustomTextInput';
import {styles} from './styles';
import {colors} from '../../../../utils';
import AppBackground from '../../../../components/AppBackground';
import CustomButton from '../../../../components/CustomButton';
import NavService from '../../../../helpers/NavService';
import Toast from 'react-native-toast-message';
export class EditDiscountProm extends Component {
  state = {
    discount: '25% off',
    title: 'Loruem Ipsum',
    description: 'Lorem Ipsum is a dummy content',
  };

  render() {
    const {discount, title, description} = this.state;
    const onSubmit = () => {
      if (discount == '') {
        Toast.show({
          text1: `Discount field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (title == '') {
        Toast.show({
          text1: `Title field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (description == '') {
        Toast.show({
          text1: `Description field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      }else{
        NavService.goBack()
      }
    };

    return (
      <AppBackground back title={'Edit Promotion & Discounts'}>
        <CustomTextInput
          placeholder={'Discount'}
          containerStyle={styles.input}
          inputStyle={styles.inputtxt}
          placeholderColor={colors.preblack}
          value={discount}
          keyboardType={'default'}
          onChangeText={value => this.setState({discount: value})}
          maxLength={35}
        />
        <CustomTextInput
          placeholder={'Title'}
          containerStyle={styles.input}
          inputStyle={styles.inputtxt}
          placeholderColor={colors.preblack}
          value={title}
          keyboardType={'default'}
          onChangeText={value => this.setState({title: value})}
          maxLength={35}
        />
        <CustomTextInput
          placeholder={'Description'}
          containerStyle={styles.input}
          inputStyle={styles.inputtxt}
          placeholderColor={colors.preblack}
          value={description}
          keyboardType={'default'}
          onChangeText={value => this.setState({description: value})}
          maxLength={275}
        />
        <View style={styles.btncontent}>
          <CustomButton
            title="Save"
            buttonStyle={styles.btn}
            textStyle={styles.txtbtn}
            onPress={onSubmit}
          />
        </View>
      </AppBackground>
    );
  }
}

export default EditDiscountProm;
