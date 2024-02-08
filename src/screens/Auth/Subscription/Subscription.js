import {Text, View,BackHandler} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {colors} from '../../../utils';
import CustomText from '../../../components/CustomText';
import {styles} from './styles';
import CustomButton from '../../../components/CustomButton';
import NavService from '../../../helpers/NavService';
export class Subscription extends Component {
  componentDidMount() {

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {

    this.backHandler.remove();
  }

  handleBackPress = () => {
 
    return true;
  }

  render() {
    const {role} = this.props?.route.params;
    return (
      <AppBackground title={'Subscription'}>
        <View
          style={{
            backgroundColor: colors.white,
            paddingBottom: 20,
            marginHorizontal: 20,
            borderRadius: 10,
            marginTop:60
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.pink,
              paddingVertical: 25,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            
            }}>
            <CustomText text="Lorem Ipsum" style={styles.txt} />
            <CustomText text="$10.00" style={styles.txt1} />
          </View>
          <View>
            <CustomText
              text="Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut."
              style={styles.desc}
            />
          </View>
          <CustomButton
            title={'Subscribe Now'}
            buttonStyle={styles.btn}
            onPress={() =>
              NavService.navigate('CardDetail', {
                role: role,
              })
            }
          />
        </View>
      </AppBackground>
    );
  }
}

export default Subscription;
