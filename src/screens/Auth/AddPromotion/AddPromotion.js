import React, {Component} from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  BackHandler,
  Keyboard,
} from 'react-native';
import {styles} from './styles';
import AppBackground from '../../../components/AppBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors} from '../../../utils';
import Img from '../../../components/Img';
import CustomText from '../../../components/CustomText';
import NavService from '../../../helpers/NavService';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../components/CustomButton';
import {appIcons} from '../../../assets';
import {connect} from 'react-redux';
import {loginUser} from '../../../redux/actions/authAction';

export class AddPromotion extends Component {
  state = {
    discount: '',
    title: '',
    description: '',
    inputFields: [],
  };

  addNewInputField = () => {
    const {discount, title, description} = this.state;

    const allFields = this.state.inputFields.concat({
      discount,
      title,
      description,
    });

    const areAllFieldsValid = allFields.every(
      field => field.discount && field.title && field.description,
    );

    if (!areAllFieldsValid) {
      Toast.show({
        type: 'error',
        text1: 'Please fill in all fields before adding a new one.',
      });
    } else {
      const newField = {
        discount: '',
        title: '',
        description: '',
      };

      this.setState(prevState => ({
        inputFields: [...prevState.inputFields, newField],
      }));
    }
  };

  validateField = (fieldType, value) => {
    if (!value) {
      Toast.show({
        type: 'error',
        text1: `${fieldType} cannot be empty`,
      });
      return false;
    }
    return true;
  };

  checkInputFields = () => {
    const {discount, title, description, inputFields} = this.state;

    if (
      this.validateField('Discount', discount) &&
      this.validateField('Title', title) &&
      this.validateField('Description', description)
    ) {
      let isValid = true;

      inputFields.forEach((field, index) => {
        if (
          !this.validateField(`Discount ${index + 1}`, field.discount) ||
          !this.validateField(`Title ${index + 1}`, field.title) ||
          !this.validateField(`Description ${index + 1}`, field.description)
        ) {
          isValid = false;
        }
      });

      if (isValid) {
        NavService.navigate('AddDiscount');
        Keyboard.dismiss();
      }
    }
  };

  renderInputFields = () => {
    return this.state.inputFields.map((field, index) => (
      <View key={index}>
        <CustomTextInput
          placeholder={`Discount ${index + 1}`}
          containerStyle={styles.input}
          inputStyle={styles.inputtxt}
          placeholderColor={colors.preblack}
          value={field.discount}
          keyboardType={'default'}
          onChangeText={value =>
            this.updateInputFieldValue('discount', index, value)
          }
          maxLength={35}
        />
        <CustomTextInput
          placeholder={`Title ${index + 1}`}
          containerStyle={styles.input}
          inputStyle={styles.inputtxt}
          placeholderColor={colors.preblack}
          value={field.title}
          keyboardType={'default'}
          onChangeText={value =>
            this.updateInputFieldValue('title', index, value)
          }
          maxLength={35}
        />
        <CustomTextInput
          placeholder={`Description ${index + 1}`}
          containerStyle={styles.input}
          inputStyle={styles.inputtxt}
          placeholderColor={colors.preblack}
          value={field.description}
          keyboardType={'default'}
          onChangeText={value =>
            this.updateInputFieldValue('description', index, value)
          }
          maxLength={275}
        />
      </View>
    ));
  };

  updateInputFieldValue = (fieldType, index, value) => {
    const newInputFields = [...this.state.inputFields];
    newInputFields[index][fieldType] = value;
    this.setState({inputFields: newInputFields});
  };

  removeInputField = index => {
    const newInputFields = [...this.state.inputFields];
    newInputFields.splice(index, 1);
    this.setState({inputFields: newInputFields});
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  onBackPress = () => {
    NavService.navigate('BussniesProfile');
    return true;
  };

  render() {
    const {role} = this.props?.route?.params;
    const isAddMore = this.state.inputFields.length > 0;

    return (
      <AppBackground back title={'Add Promotion & Discount'}>
        <View style={{paddingBottom: 100}}>
          <ScrollView>
            <CustomTextInput
              placeholder={'Discount'}
              containerStyle={styles.input}
              inputStyle={styles.inputtxt}
              placeholderColor={colors.preblack}
              value={this.state.discount}
              keyboardType={'default'}
              onChangeText={value => this.setState({discount: value})}
              maxLength={35}
            />
            <CustomTextInput
              placeholder={'Title'}
              containerStyle={styles.input}
              inputStyle={styles.inputtxt}
              placeholderColor={colors.preblack}
              value={this.state.title}
              keyboardType={'default'}
              onChangeText={value => this.setState({title: value})}
              maxLength={35}
            />
            <CustomTextInput
              placeholder={'Description'}
              containerStyle={styles.input}
              inputStyle={styles.inputtxt}
              placeholderColor={colors.preblack}
              value={this.state.description}
              keyboardType={'default'}
              onChangeText={value => this.setState({description: value})}
              maxLength={275}
            />

            {this.renderInputFields()}
            <View style={styles.btnflex}>
              <TouchableOpacity
                style={styles.cardcontent}
                activeOpacity={0.9}
                onPress={this.addNewInputField}>
                <Img
                  local
                  src={appIcons.plusgroup}
                  resizeMode={'contain'}
                  style={{width: 15, height: 15}}
                />
                <CustomText
                  text={isAddMore ? 'Add More' : 'Add New Card'}
                  style={styles.card}
                />
              </TouchableOpacity>
              {isAddMore && (
                <TouchableOpacity
                  onPress={() =>
                    this.removeInputField(this.state.inputFields.length - 1)
                  }>
                  <Img
                    local
                    src={appIcons.delete}
                    resizeMode={'contain'}
                    style={{width: 30, height: 30}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>

        <View style={styles.btncontent}>
          <CustomButton
            title="Skip"
            buttonStyle={styles.btn}
            textStyle={styles.txtbtn}
            onPress={() => {
              let payload = {
                role: 'Vendor',
                email: 'abc@gmail.com',
                password: '123456',
              };
              Toast.show({
                text1: 'Sign up successful',
                type: 'success',
                visibilityTime: 3000,
              });
              this.props.loginUser(payload);
            }}
          />
          <CustomButton
            title="Next"
            buttonStyle={styles.btn1}
            onPress={this.checkInputFields}
          />
        </View>
      </AppBackground>
    );
  }
}

const actions = {loginUser};
export default connect(null, actions)(AddPromotion);
