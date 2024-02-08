import React, {Component} from 'react';
import {Keyboard, ScrollView, View} from 'react-native';
import AppBackground from '../../../../components/AppBackground';
import {appIcons, appImages} from '../../../../assets';
import CustomText from '../../../../components/CustomText';
import ProfileImage from '../../../../components/ProfileImage';
import appStyles from '../../../appStyles';
import {colors, size} from '../../../../utils';
import {event} from '../../../../utils/dummyData';
import Img from '../../../../components/Img';
import styles from './styles';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomButton from '../../../../components/CustomButton';
import Matched from '../../../../container/matched/Matched';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import NavService from '../../../../helpers/NavService';
import {AirbnbRating, Rating} from 'react-native-ratings';

class RatingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRating: 0,
      isModalVisible: false,
      bio: '',
    };
  }
  ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
    this.setState({showRating: rating});
  };

  render() {
    const {isModalVisible, bio} = this.state;
    const onSubmit = () => {
      if (bio == '') {
        Toast.show({
          text1: 'Please enter Description',
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        this.setState({isModalVisible: true});
      }
    };
    return (
      <AppBackground
        back
        title={'Rating'}
        marginHorizontal={false}
        leftIcon={appIcons.drawer}>
        <CustomText
          text="Write a review about the club."
          style={{
            ...appStyles.family_Montserrat_Semi_Bold,
            color: colors.white,
          }}
        />
        <View
          style={{
            justifyContent: 'flex-start',
            height: 30,
            width: 150,
          }}>
        <AirbnbRating
  reviews={false}
  count={5}
  fractions
  onFinishRating={this.ratingCompleted}
  size={20}
  defaultRating={this.state.showRating} 
/>
        </View>
        <View style={appStyles.margin5Percent}>
          <CustomText
            text="Write Your Feedback."
            style={{
              ...appStyles.family_Montserrat_Semi_Bold,
              color: colors.white,
            }}
          />
          <CustomTextInput
            textAlignVertical="top"
            maxLength={350}
            multiline
            placeholder={'Description'}
            value={bio}
            // color={colors.lightshadow}
            placeholderColor={colors.black}
            keyboardType={'default'}
            onChangeText={value => this.setState({bio: value})}
            inputStyle={{
              height: 150,
              color: 'black',
            }}
            containerStyle={{
              justifyContent: 'flex-start',
              borderRadius: 10,
              width: '100%',
              backgroundColor: colors.white,
              height: 150,
            }}
          />
        </View>
        <CustomButton
          onPress={onSubmit}
          title={'Submit'}
          buttonStyle={{position: 'absolute', bottom: 20}}
        />
        <Matched
          cross
          desc={
            'You have successfully rated a review to your own experience with club'
          }
          completed
          isModalVisible={isModalVisible}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          onCompleted={() => {
            NavService.navigate('EventDetail');
            Keyboard.dismiss()
          }}
        />
      </AppBackground>
    );
  }
}
export default RatingScreen;
