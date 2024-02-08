import {FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import Switched from '../../../../components/Switched';
import {Tipsdata} from '../../../../utils/dummyData';
import TipsClick from '../../../../components/TipsClick';
import CustomButton from '../../../../components/CustomButton';
import {logoutUser} from '../../../../redux/actions/authAction';
import {connect} from 'react-redux';

import {styles} from './styles';
import Matched from '../../../../container/matched/Matched';
import Toast from 'react-native-toast-message';
export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNoti: false,
      isModalVisible: false,
    };
  }
  // logoutUser = () => {
  //   logoutUser();
  // };
  render() {
    const {isNoti, isModalVisible} = this.state;
    const onSubmit = () => {
      this.setState({isModalVisible: true});
    };

    return (
      <AppBackground menu notification curve title={'Settings'}>
        <View>
          <Switched
          mdl
            title={'Push Notification'}
            isOn={isNoti}
            onToggle={newValue => {
              if (newValue) {
                console.log('newValue', newValue);
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
              this.setState({isNoti: newValue});
            }}
          />
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={Tipsdata}
            renderItem={({item}) => <TipsClick item={item} />}
          />
          <CustomButton
            onPress={onSubmit}
            title={'Delete Account'}
            buttonStyle={styles.btn}
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
