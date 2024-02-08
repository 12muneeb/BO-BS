import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import styles from './styles';
import AppBackground from '../../../../components/AppBackground';
import CustomTextInput, {
  CustomPhoneInput,
} from '../../../../components/CustomTextInput';
import ImagePicker from '../../../../components/ImagePicker';
import ProfileImage from '../../../../components/ProfileImage';
import NavService from '../../../../helpers/NavService';
import {colors} from '../../../../utils';
import {appImages, appIcons} from '../../../../assets';
import CustomButton from '../../../../components/CustomButton';
import GooglePlaceAutocomplete from '../../../../components/GooglePlaceAutocomplete';
import Toast from 'react-native-toast-message';
export class EditProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
      phoneNumber: '+921345345',
      profileImage: null,

      email: 'mm@gmail.com',
      address: 'USA',
      formattedPhoneNumber: '4535345345',
      age: '15',
      latitude: '',
      city: 'America',
      state: 'USA',
      emailAddress: 'm@gmail.com',
      longitude: '',
      location: '',
      locationNew: '',
      isModalVisible: false,
    };
  }
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

    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    const onSubmit = () => {
      const {name, address, age, city, state, location} = this.state;
      if (name == '') {
        Toast.show({
          text1: `Full Name field can't be empty`,
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
      // else if (location == '') {
      //   Toast.show({
      //     text1: `Address field can't be empty`,
      //     type: 'error',
      //     visibilityTime: 3000,
      //   });
      // } 
      else if (locationNew.length <= 1) {
        Toast.show({
          text1: `Address field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } 
   else   if (!city || city.length <= 1) {
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
        Keyboard.dismiss()
      }
    }
    
    return (
      <AppBackground back title={'Edit personal Details'}>
        <View style={{marginTop: 20, alignSelf: 'center'}}>
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery(path, mime, type);
            }}>
            <ProfileImage
              innerAsset={profileImage == null ? true : false}
              imageUri={
                profileImage !== null ? profileImage?.path : appImages.userimage
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
          lft
            placeholder={'Full Name'}
            value={name}
            keyboardType={'default'}
            // keyboardType={'email-address'}
            onChangeText={value => this.setState({name: value})}
            lable={'Full Name'}
            maxLength={35}
          />

          <CustomTextInput
          lft
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
              buttonStyle={{borderRadius: 10}}
            />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default EditProfileDetails;
