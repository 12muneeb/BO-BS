

import {Text, TouchableOpacity, View,BackHandler} from 'react-native';
import React, {Component} from 'react';
// import {appIcons} from '../../../assets';
// import AppBackground from '../../../components/AppBackground';
// import Img from '../../../components/Img';
// import CustomText from '../../../components/CustomText';
// import NavService from '../../../helpers/NavService';
// import CustomButton from '../../../components/CustomButton';
// import Matched from '../../../container/matched/Matched';
import {loginUser,logoutUser} from '../../../../redux/actions/authAction';
import styles from './styles';
import { appIcons } from '../../../../assets';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import CustomText from '../../../../components/CustomText';
import NavService from '../../../../helpers/NavService';
import CustomButton from '../../../../components/CustomButton';
import Matched from '../../../../container/matched/Matched';
import { connect } from 'react-redux';
import Toast from 'react-native-toast-message';

export class PaymentSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      isModalVisible: false,
    };
  }
  handleSelectItem = itemId => {
    this.setState({selectedItem: itemId});
  };

  handleOn = () => {
    this.setState({isModalVisible: true});
  };
 
  

  render() {
    const {role} = this.props?.route?.params;
    const handleSubmit = () => {
      if (this.state.selectedItem === null) {
        Toast.show({
          text1: 'Please select a card',
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        this.setState({isModalVisible: true});
        // let payload = {
        //   role: 'Vendor',
        //   email: 'abc@gmail.com',
        //   password: '123456',
        // };
        // Toast.show({
        //   text1: 'Sign up successful',
        //   type: 'success',
        //   visibilityTime: 3000,
        // });
        // this.props.loginUser(payload);
      }
    };
    console.log('ee', role);
    const items = [
      {id: 1, text: 'Stripe', img: appIcons.stripe},
      {id: 2, text: 'Pay PAl', img: appIcons.paypal},
      {id: 3, text: '**** **** **** 4563', img: appIcons.master},
      {id: 4, text: '**** **** **** 4563', img: appIcons.visa},
    ];
    const handleClick = () => {
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
    };

    const {isModalVisible} = this.state;
    return (
      <AppBackground back title={'Card Details'}>
        <View style={{flex: 1}}>
          <View style={styles.container}>
            {items.map(item => (
              <View key={item.id} style={styles.row}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Img
                    local
                    resizeMode={'contain'}
                    src={item.img}
                    style={{width: 15, height: 15}}
                  />
                  <CustomText style={styles.txt} text={item.text} />
                </View>
                <TouchableOpacity
                  style={styles.radioButton}
                  onPress={() => this.handleSelectItem(item.id)}>
                  {this.state.selectedItem === item.id && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View>
            <TouchableOpacity
              style={styles.cardcontent}
              activeOpacity={0.9}
              onPress={() => NavService.navigate('AddNewPayment')}>
              <Img
                local
                src={appIcons.plusgroup}
                resizeMode={'contain'}
                style={{width: 15, height: 15}}
              />
              <CustomText text="Add New Card" style={styles.card} />
            </TouchableOpacity>
          </View>


        </View>
        <Matched
          sucessfull
          text={'Successful'}
          desc={'Your have successfully \n subscribed'}
          btn={'Continue'}
          isModalVisible={isModalVisible}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          onCompleted={handleClick}
        />
      </AppBackground>
    );
  }
}
const actions = {loginUser,logoutUser};
export default connect(null, actions)(PaymentSetting);
