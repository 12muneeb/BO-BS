import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import CustomBackground from '../../../../components/CustomBackground';
import CustomButton from '../../../../components/CustomButton';
import CustomTextInput, {
  CustomPhoneInput,
} from '../../../../components/CustomTextInput';
import ImagePicker from '../../../../components/ImagePicker';
import ProfileImage from '../../../../components/ProfileImage';
import NavService from '../../../../helpers/NavService';
import {colors} from '../../../../utils';
import {loginUser} from '../../../../redux/actions/authAction';
import {appImages, appIcons} from '../../../../assets';
import styles from './styles';
import Matched from '../../../../container/matched/Matched';
import AppBackground from '../../../../components/AppBackground';
import GooglePlaceAutocomplete from '../../../../components/GooglePlaceAutocomplete';

class CompleteProfile extends Component {
  state = {
    name: 'John Smith',
    phoneNumber: '',
    profileImage: null,
    //
    email: this?.props?.route?.params?.email,
    address: 'Washington DC',
    formattedPhoneNumber: '',
    age: '50',
    latitude: '',
    city: 'USA',
    state: 'Texsla',
    emailAddress: '',
    longitude: '',
    location: '',
    locationNew: '',
    isModalVisible: false,
  };
  callback = (address, geometry, newValue) => {
    if (address) {
      this.setState({location: address});
      const [city, state] = address.split(', ');
      this.setState({city, state});
    } else if (newValue.length > 0) {
      this.setState({locationNew: newValue});
    } else if (address === '') {
      this.setState({location: ''});
      this.setState({city: '', state: ''});
    }
  };

  render() {
    const {
      name,
      phoneNumber,
      address,
      profileImage,
      //
      formattedPhoneNumber,
      city,
      state,
      age,
      emailAddress,
      latitude,
      longitude,
      location,
      isModalVisible,
      locationNew,
    } = this.state;
  
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
        } 
        else if (!/^\d+$/.test(age)) {
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
         NavService.goBack()
            Keyboard.dismiss();
          }
        }
      
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    return (
      <AppBackground title={'Edit Profile'} back>
        <View
          style={{alignItems: 'center', alignSelf: 'center', marginTop: 10}}>
          <View style={{marginTop: 20}}>
            <ImagePicker
              onImageChange={(path, mime, type) => {
                updateImageInGallery(path, mime, type);
              }}>
              <ProfileImage
                innerAsset={profileImage == null ? true : false}
                imageUri={
                  profileImage !== null ? profileImage?.path : appIcons.editpick
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
              // keyboardType={'email-address'}
              onChangeText={value => this.setState({name: value})}
              lable={'Full Name'}
              maxLength={35}
            />

            <CustomTextInput
              placeholder={'Age'}
              value={age}
              keyboardType={'phone-pad'}
              // keyboardType={'email-address'}
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
              <CustomTextInput
                 editable={false}
                containerStyle={{width: '95%'}}
                placeholder={'City'}
                value={city}
                keyboardType={'default'}
                // keyboardType={'email-address'}
                onChangeText={value => this.setState({city: value})}
                lable={'City'}
                maxLength={10}
              />
              <CustomTextInput
                editable={false}
                containerStyle={{width: '95%'}}
                placeholder={'State'}
                value={state}
                keyboardType={'default'}
                // keyboardType={'email-address'}
                onChangeText={value => this.setState({state: value})}
                lable={'State'}
                maxLength={10}
              />
            </View>
            <View style={{marginTop: 30}}>
              <CustomButton
                title={'Save'}
                onPress={onSubmit}
                buttonStyle={{borderRadius: 10, height: 55}}
              />
            </View>
          </View>
        </View>
     
      </AppBackground>
    );
  }
}

const actions = {loginUser};
export default connect(null, actions)(CompleteProfile);
