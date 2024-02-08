import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../../components/AppBackground';
import CustomBackground from '../../../../components/CustomBackground';
import CustomTextInput from '../../../../components/CustomTextInput';
import DropDownPicker from '../../../../components/DropDownPicker';
import {colors, family} from '../../../../utils';
import {styles} from './styles';
import CustomText from '../../../../components/CustomText';
import {Operational} from '../../../../utils/dummyData';
import Img from '../../../../components/Img';
import {appIcons} from '../../../../assets';
import CustomButton from '../../../../components/CustomButton';
import ProfileImage from '../../../../components/ProfileImage';
import ImagePicker from '../../../../components/ImagePicker';
import BottomPopup from '../../../../container/BottomPopup/BottomPopup';
import NavService from '../../../../helpers/NavService';
import BottomModal from '../../../../container/BottomModal/BottomModal';
import GooglePlaceAutocomplete from '../../../../components/GooglePlaceAutocomplete';
import Toast from 'react-native-toast-message';
import {SelectList} from 'react-native-dropdown-select-list';

const {width} = Dimensions.get('screen');
export class EditBussniesProfile extends Component {
  state = {
    name: 'Mike',
    phoneNumber: '',
    profileImage: null,
    //
    Select_Country: '',
    address: 'USA',
    formattedPhoneNumber: '',
    age: '',
    latitude: '',
    city: '',
    state: '',
    emailAddress: '',
    longitude: '',
    location: '',
    isModalVisible: false,
    bio: 'loreum Ipsum',
    category: 'Shopping',
    matchProfile: false,
    isModalVisible: false,
  };
  Country = ['Pakistan', 'India', 'Bangladesh'];
  callback = (address, geometry) => {
    if (address) {
      this.setState({
        latitude: geometry?.location.lat,
        location: address,
        longitude: geometry?.location.lng,
      });
    } else {
      this.setState({location: ''});
    }
  };
  render() {
    const {
      name,
      phoneNumber,
      address,
      profileImage,
      Country,
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
      Select_Country,
      bio,
      category,
      matchProfile,
      selected,
    } = this.state;
    const {role} = this.props?.route?.params;
    const onSubmit = () => {
      const {name, address, age, city, state, location, Select_Country} =
        this.state;
      if (name == '') {
        Toast.show({
          text1: `Name field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (category == '') {
        Toast.show({
          text1: `Category field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!selected) {
        Toast.show({
          text1: "Capacity field can't be empty",
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (bio == '') {
        Toast.show({
          text1: `Bio field can't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } 
      // else if (location == '') {
      //   Toast.show({
      //     text1: `Location field can't be empty`,
      //     type: 'error',
      //     visibilityTime: 3000,
      //   });
      // } 
      else {
        NavService.goBack();
      }
    };
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    const data = [
      {key: '1', value: '50-100'},
      {key: '2', value: '100-200'},
      {key: '3', value: '200-300'},
      {key: '4', value: '300-400'},
      {key: '4', value: '400-500'},
      {key: '4', value: '500-600'},
    ];
    return (
      <AppBackground back title={'Business profile'}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View>
            <View style={{marginTop: 20}}>
              <ImagePicker
                onImageChange={(path, mime, type) => {
                  updateImageInGallery(path, mime, type);
                }}>
                <View style={{alignItems: 'center'}}>
                  <ProfileImage
                    borderColor={colors.black}
                    upload
                    borderRadiii
                    customStyle={{
                      height: 160,
                      width: '90%',
                      borderRadius: 10,
                      marginTop: 10,
                      marginHorizontal: 5,
                    }}
                    tintColor={colors.red}
                    borderWWidth={profileImage?.path ? 0 : 1}
                    resizeMode={'cover'}
                    backgroundColor={colors.white}
                    style={
                      profileImage?.path
                        ? {height: '100%', width: '100%', borderRadius: 10}
                        : {
                            height: 160,
                            width: '90%',
                            backgroundColor: 'transparent',
                          }
                    }
                    innerAsset={profileImage == null ? true : false}
                    imageUri={
                      profileImage !== null
                        ? profileImage?.path
                        : appIcons.block
                    }
                  />
                </View>
              </ImagePicker>
            </View>
            <CustomTextInput
              placeholder={'Club Name ABC'}
              value={name}
              keyboardType={'default'}
              // keyboardType={'email-address'}
              onChangeText={value => this.setState({name: value})}
              lable={'Business Name'}
              maxLength={35}
              lft
            />
            <CustomTextInput
              placeholder={'Category'}
              value={category}
              keyboardType={'default'}
              // keyboardType={'email-address'}
              onChangeText={value => this.setState({category: value})}
              lable={'Category'}
              maxLength={35}
              lft
            />
            <SelectList
              // onSelect={() => alert(this.state.selected)}
              setSelected={selected => this.setState({selected})}
              fontFamily={family.Montserrat_Light}
              data={data}
              arrowicon={
                <Img
                  local
                  src={appIcons.down}
                  tintColor={colors.white}
                  style={{width: 15, height: 15}}
                  resizeMode={'contain'}
                />
              }
              search={false}
              boxStyles={styles.dropdown}
              placeholder="Capacity"
              disabledCheckBoxStyles={styles.label}
              dropdownStyles={styles.label}
              dropdownTextStyles={{color: colors.white}}
              inputStyles={{color: colors.white}}
            />
            <CustomTextInput
              placeholder={'Bio/Description'}
              value={bio}
              keyboardType={'default'}
              // keyboardType={'email-address'}
              onChangeText={value => this.setState({bio: value})}
              lable={'Bio/Description'}
              maxLength={35}
              lft
            />
            <GooglePlaceAutocomplete
              rightImg
              addressText={location}
              handleAddressText={location => {
                this.setState({location: '', latitude: '', longitude: ''});
              }}
              placeholder={address ? address : 'Location'}
              rightIcon={appIcons.location}
              CheckIn={true}
              backgroundColor={'transparent'}
              // val={location}
              isBorderShow
              callback={this.callback}
              wrapperStyles={styles.wrapmper}
              contStyles={styles.contStyles}
            />
            <CustomText text="Operational Hours" style={styles.heading} />
            <FlatList
              scrollEnabled={true}
              data={Operational}
              showsVerticalScrollIndicator={false}
              bounces={false}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => this.setState({isModalVisible: true})}>
                  <View style={styles.header}>
                    <CustomText text={item.day} style={styles.day} />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <CustomText text={item.time} style={styles.time} />
                      <Img
                        local
                        src={appIcons.horizontal}
                        resizeMode={'contain'}
                        style={styles.horizontal}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
            <CustomButton
              title={'Save'}
              buttonStyle={styles.btn}
              onPress={onSubmit}
            />
          </View>
        </ScrollView>
        <BottomPopup
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => this.setState({matchProfile: false})}
          onCross={() => this.setState({matchProfile: false})}
          onSubmit={() => this.setState({matchProfile: false})}
        />
        <BottomModal
          isModalVisible={isModalVisible}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          onSubmit={() => this.setState({isModalVisible: false})}
          handleClick={() => this.setState({isModalVisible: false})}
        />
      </AppBackground>
    );
  }
}

export default EditBussniesProfile;
