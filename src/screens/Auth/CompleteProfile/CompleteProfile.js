import React, {Component, createRef} from 'react';
import {View, Keyboard, Dimensions, BackHandler} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput, {
  CustomPhoneInput,
} from '../../../components/CustomTextInput';
import ImagePicker from '../../../components/ImagePicker';
import ProfileImage from '../../../components/ProfileImage';
import NavService from '../../../helpers/NavService';
import {colors} from '../../../utils';
import {loginUser} from '../../../redux/actions/authAction';
import {appImages, appIcons} from '../../../assets';
import styles from './styles';
import Matched from '../../../container/matched/Matched';
import ActionSheetComponent from '../../../components/ActionSheetComponent';
import GooglePlaceAutocomplete from '../../../components/GooglePlaceAutocomplete';
const {width} = Dimensions.get('screen');

class CompleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      address: '',
      profileImage: null,
      email: this?.props?.route?.params?.email,
      formattedPhoneNumber: '',
      age: '',
      latitude: '',
      city: '',
      state: '',
      emailAddress: '',
      longitude: '',
      location: '',
      isModalVisible: false,
      state: '',
      testAdd: '',
      locationNew: '',
      abcLocation: [],
      stateData: ['America', 'USA'],
      cityData: ['Texsla', 'Washington'],
    };
    this.actionSheetStateCity = createRef();
    this.actionSheetStateRef = createRef();
  }

  callback = (address, geometry, newValue) => {
    if (address) {
      this.setState({location: address});
      const [city, state] = address.split(', ');
      this.setState({city, state});
    } else if (newValue.length > 0) {
      this.setState({locationNew: newValue,});
      
    } else if (address === '') {
      this.setState({location: ''});
      this.setState({city: '', state: ''});
    }
  };
  handleSubmit = () => {
    let payload = {
      role: 'User',
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
    NavService.navigate('PreLogin');
    return true;
  };

  render() {
    const {
      name,
      phoneNumber,
      address,
      profileImage,
      formattedPhoneNumber,
      city,
      state,
      age,
      emailAddress,
      latitude,
      longitude,
      location,
      isModalVisible,
      cityData,
      stateData,
      locationNew,
      testAdd,
      abcLocation,
    } = this.state;

    const {role, email, phone_number_value} = this.props?.route?.params;

    const onSubmit = () => {
      const {name, address, age, city, state, location, locationNew} =
        this.state;
      const invalidChars = /[.,@]/;
      if (name == '') {
        Toast.show({
          text1: `Full Name field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (invalidChars.test(name)) {
        Toast.show({
          text1: 'Name contains invalid characters (, @ or space)',
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (age == '') {
        Toast.show({
          text1: `Age field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!/^\d+$/.test(age)) {
        Toast.show({
          text1: 'Age must be a numeric value',
          type: 'error',
          visibilityTime: 3000,
        });
      } 
      else if (locationNew.length <= 1) {
        Toast.show({
          text1: `Address field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } 
      else if (!city || city.length <= 1) {
        Toast.show({
          text1: `City field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!state || state.length <= 1) {
        Toast.show({
          text1: `State field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      }
      else {
        if (role == 'User') {
          this.setState({isModalVisible: true});
        } else {
          NavService.navigate('BussniesProfile', {role: role});
          Toast.show({
            text1: 'Profile created successfully',
            type: 'success',
            visibilityTime: 3000,
          });
          Keyboard.dismiss();
        }
      }
    };
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    console.log('abcLocationabcLocation', abcLocation);
    return (
      <CustomBackground
        showLogo={false}
        backPre
        titleText={role == 'User' ? 'Complete Profile' : 'Setup Profile'}
        back={false}>
        <View
          style={{alignItems: 'center', alignSelf: 'center', marginTop: 50}}>
          <View style={{marginTop: 20}}>
            <ImagePicker
              onImageChange={(path, mime, type) => {
                updateImageInGallery(path, mime, type);
              }}>
              <ProfileImage
                innerAsset={profileImage == null ? true : false}
                imageUri={
                  profileImage !== null
                    ? profileImage?.path
                    : appImages.userimage
                }
              />
            </ImagePicker>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <CustomTextInput
              placeholder={'Full Name'}
              value={name}
              keyboardType={'default'}
              onChangeText={value => this.setState({name: value})}
              lable={'Full Name'}
              maxLength={35}
            />
            {email && (
              <CustomTextInput
                editable={false}
                placeholder={'Email Address'}
                value={email ? email : emailAddress}
                keyboardType={'default'}
                onChangeText={value => this.setState({emailAddress: value})}
                lable={'Email Address'}
                maxLength={35}
              />
            )}
            {phone_number_value && (
              <CustomPhoneInput
                lable={'Phone Number'}
                editable={false}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: colors.white,
                  marginTop: 10,
                }}
                placeholderTextColor={colors.white}
                placeholderColor={colors.white}
                placeholder={'Phone Number'}
                value={
                  phone_number_value ? phone_number_value : formattedPhoneNumber
                }
                formattedPhoneNumber={formattedPhoneNumber}
                phoneNumber={phoneNumber}
                onChangePhoneInput={(phoneNumberFormat, phoneNumber) =>
                  this.setState({
                    formattedPhoneNumber: phoneNumberFormat,
                    phoneNumber: phoneNumber,
                  })
                }
              />
            )}

            <CustomTextInput
              placeholder={'Age'}
              value={age}
              keyboardType={'phone-pad'}
              onChangeText={value => this.setState({age: value})}
              lable={'Age'}
              maxLength={3}
            />

            <GooglePlaceAutocomplete
              addressText={location}
              placeholder={address ? address : 'Address'}
              rightIcon={appIcons.location}
              CheckIn={true}
              backgroundColor={'transparent'}
              // val={location}
              isBorderShow
              callback={this.callback}
              wrapperStyles={styles.wrapmper}
              contStyles={styles.contStyles}
              rightImg={true}
              locationNew
            />

            <View style={styles.subview}>
              {/* <CustomButton
                opt
                // nextBtn
                title={city ? city : 'City'}
                buttonStyle={styles.citybtn}
                textStyle={city ? styles.gendercolorafter : styles.gendercolor}
              />
              <CustomButton
                opt
                title={state ? state : 'State'}
                buttonStyle={styles.citybtn}
                textStyle={state ? styles.gendercolorafter : styles.gendercolor}
              /> */}
              <CustomTextInput
                editable={false}
                placeholder={city ? city : 'City'}
                value={city}
                keyboardType={'default'}
                onChangeText={value => this.setState({city: value})}
                maxLength={35}
              />
              <CustomTextInput
                editable={false}
                placeholder={state ? state : 'State'}
                value={state}
                keyboardType={'default'}
                onChangeText={value => this.setState({state: value})}
                maxLength={35}
              />
            </View>
            <View style={{marginTop: 30}}>
              <CustomButton
                title={role == 'User' ? 'Continue' : 'Next'}
                onPress={onSubmit}
                buttonStyle={{borderRadius: 10}}
              />
            </View>
          </View>
        </View>
        <Matched
          sucessfull
          cross
          isModalVisible={isModalVisible}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          onCompleted={this.handleSubmit}
        />
      </CustomBackground>
    );
  }
}

const actions = {loginUser};
export default connect(null, actions)(CompleteProfile);
