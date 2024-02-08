import React, {Component} from 'react';
import {
  Linking,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  Dimensions,
  Share,
  Platform,
} from 'react-native';
import AppBackground from '../../../../components/AppBackground';
import {appIcons} from '../../../../assets';
import styles from './styles';
import Img from '../../../../components/Img';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils';
import appStyles from '../../../appStyles';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import CustomButton from '../../../../components/CustomButton';
import Matched from '../../../../container/matched/Matched';
import NavService from '../../../../helpers/NavService';
import {logoutUser} from '../../../../redux/actions/authAction';
import {connect} from 'react-redux';

const {width} = Dimensions.get('screen');

class Settings extends Component {
  constructor(props) {
    super(props);
    const {user} = this?.props;
    this.state = {
      index: 0,
      set: '',
      geo: '',
      sharing: false,
      isNotification: '',
      isGeoLocation: '',
      isModalVisible: false,
    };
  }

  shareMessage = async () => {
    const {isGeoLocation, isNotification, sharing} = this.state;

    if (sharing) return;

    this.setState({sharing: true}); // Set the sharing flag to true

    setTimeout(async () => {
      try {
        const result = await Share.share({
          message: 'Hello, I am sharing this text!',
        });

        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            console.log(`Shared via ${result.activityType}`);
          } else {
            console.log('Shared successfully');
          }
        } else if (result.action === Share.dismissedAction) {
          console.log('Share sheet dismissed');
        }
      } catch (error) {
        console.error('Error sharing:', error.message);
      } finally {
        setTimeout(() => this.setState({sharing: false}), 500); // Reset the sharing flag after a delay
      }
    }, 100);
  };

  render() {
    const {isGeoLocation, isNotification, sharing, isModalVisible} = this.state;
    const onSubmit = () => {
      this.setState({isModalVisible: true});
    };
    const {navigation} = this.props;

    return (
      <AppBackground
        title={'Settings'}
        menu
        notification
        marginHorizontal={false}>
        <View style={appStyles.margin1Percent}>
          <View style={styles.viewStyle1}>
            <Img
              tintColor={colors.primary}
              local
              src={appIcons.notification}
              style={[styles.buttonInnerImage, {left: width / 50}]}
            />
            <CustomText text="Push Notifications  " style={styles.textStyle1} />
            <Switch
              style={{
                transform: [
                  {scaleX: Platform.OS == 'android' ? 0.99 : 0.8},
                  {scaleY: Platform.OS == 'android' ? 0.99 : 0.8},
                ],
              }}
              trackColor={{false: '#E4E4E4', true: colors.primary}}
              thumbColor={isNotification ? 'white' : 'white'}
              ios_backgroundColor={isNotification ? colors.red : colors.white}
              value={isNotification}
              onValueChange={newValue => {
                if (newValue) {
                  Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Notification is on',
                    visibilityTime: 2000,
                  });
                } else {
                  Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Notification is off',
                    visibilityTime: 2000,
                  });
                }
                this.setState({isNotification: newValue});
              }}
            />
          </View>
          <CustomButton
            onPress={onSubmit}
            buttonStyle={{...appStyles.margin1Percent}}
            title={'Delete Account'}
          />
        </View>
        <Matched
          cross
          bin
          text={'Delete Account'}
          desc={'Are you sure you want to delete your account '}
          Delete
          btndelete
          isModalVisible={isModalVisible}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          handleLeft={() => {
            this.setState({isModalVisible: false});
          }}
          handleRight={() => {
            this.props.logoutUser();
          }}
        />
      </AppBackground>
    );
  }
}

function mapStateToProps({authReducer: {user}}) {
  return {
    user: user,
  };
}
const actions = {logoutUser};
export default connect(mapStateToProps, actions)(Settings);
