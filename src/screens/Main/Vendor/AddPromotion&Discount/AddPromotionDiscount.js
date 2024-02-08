import {Text, View} from 'react-native';
import React, {Component} from 'react';
import CustomTextInput from '../../../../components/CustomTextInput';
import {styles} from './styles';
import {colors} from '../../../../utils';
import AppBackground from '../../../../components/AppBackground';
import CustomButton from '../../../../components/CustomButton';
import NavService from '../../../../helpers/NavService';
export class AddPromotionDiscount extends Component {
  state = {
    discount: '',
    title: '',
    description: '',
  };

  render() {
    const {discount, title, description} = this.state;

    return (
      <AppBackground back title={'Add Promotion & Discounts'}>
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
          maxLength={35}
        />
        <View style={styles.btncontent}>
          <CustomButton
            title="Save"
            buttonStyle={styles.btn}
            textStyle={styles.txtbtn}
            onPress={() => NavService.goBack()}
          />
        </View>
      </AppBackground>
    );
  }
}

export default AddPromotionDiscount;
