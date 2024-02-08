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

import {colors, family, size} from '../../utils';
import CustomBackground from '../../components/CustomBackground';
import Logo from '../../components/Logo';
import styles from './styles';
import CustomText from '../../components/CustomText';
import {appIcons, appImages} from '../../assets';
const {width} = Dimensions.get('window');
import {setUserType, loginUser} from '../../redux/actions/authAction';
import {connect} from 'react-redux';
class App extends Component {
  state = {
    agreementModal: false,
    terms: false,
    policy: false,
    navigator: '',
  };

  render() {
    const {agreementModal, terms, policy, navigator} = this.state;
    const loggedInUser = this.props?.user;
    console.log('loggedInUser-----',loggedInUser);
    const guestLogin = type => {
      let payload = {
        role: type,
        email: 'abc@gmail.com',
        password: '123456',
      };
      this.props.loginUser(payload);
      Toast.show({
        text1: 'Guest Login successful',
        type: 'success',
        visibilityTime: 3000,
      });
    };
    const methods = [
      {
        name: 'User',
        icon: appIcons.user,
        onPress: () => navigation.navigate('PreLogin', {role: 'User'}),
        color: colors.pink,
      },
      {
        name: 'Vendor',
        icon: appIcons.prehome,
        color: colors.preblack,
        onPress: () => navigation.navigate('PreLogin', {role: 'Vendor'}),
        // onPress: SocialSignin.Facebook,
      },
      {
        name: 'Guest',
        icon: appIcons.guest,
        color: colors.preblue,
        onPress: () => guestLogin('Guest'),
        // onPress: SocialSignin.Facebook,
      },
    ];
    const {navigation} = this.props;
    return (
      <CustomBackground back={false} showLogo={false}>
        <View style={[styles.container, {padding: 50}]}>
          <View style={styles.space}>
            <Logo size={220} />
          </View>
          <View style={{}}>
            <View style={{alignItems: 'center', paddingVertical: 15}}>
              <Text
                style={{
                  fontSize: size.xxlarge,
                  fontFamily: family.Roboto_Bold,
                  color: colors.white,
                }}>
                Role Selection
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
                  style={[
                    styles.buttonContainer,
                    {
                      backgroundColor: color,
                      paddingLeft: name == 'Vendor' ? 15 : 0,
                    },
                  ]}>
                  <Image source={icon} style={styles.buttonInnerImage} />

                  <Text style={[styles.buttonInnerText, {color: colors.white}]}>
                    Sign in As {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </CustomBackground>
    );
  }
}

// const mapStateToProps = state => ({
//   userType: state,
// });

// const actions = {loginUser, setUserType};

// export default connect(mapStateToProps, actions)(App);


function mapStateToProps({authReducer: {user, userType}}) {
  return {
    user,
    userType,
  };
}
const actions = {loginUser, setUserType};

export default connect(mapStateToProps, actions)(App);
