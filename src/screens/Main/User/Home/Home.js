import {Text, TouchableOpacity, View, BackHandler, Alert} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import MapContainer from '../../../../container/MapContainer/MapContainer';
import Map from '../../../../container/Map';
import {CustomSearchInput} from '../../../../components/CustomTextInput';
import {appIcons} from '../../../../assets';
import {colors} from '../../../../utils';
import Img from '../../../../components/Img';
import NavService from '../../../../helpers/NavService';
import {connect} from 'react-redux';
import {logoutUser} from '../../../../redux/actions/authAction';
import Matched from '../../../../container/matched/Matched';

export class Home extends Component {
  state = {
    isModalVisible: '',
    alertVisible: '',
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
    this.setState({isModalVisible: true});
    return true;
  };
  render() {
    const {isModalVisible, alertVisible} = this.state;
    const {user} = this.props;
    console.log('useddddr', user?.role);
    const handleMarkerPress = (latitude, longitude) => {
      console.log('Marker presdddddtude:', latitude, 'Longitude:', longitude);
      if (user.role == 'Guest') {
        this.setState({alertVisible: true});
      } else {
        NavService.navigate('EventDetail', {
          latitude,
          longitude,
        });
      }
      // }
    };
    return (
      <AppBackground
        OtherHomePress={() => {
          if (user.role == 'Guest') {
            this.setState({alertVisible: true});
          } else {
            NavService.navigate('OtherHome');
          }
        }}
        Searchtext
        title={'Home'}
        menu
        rightimage
        rightIconimage={appIcons.notification}
        rightimageonPress={() => {
          if (user.role === 'Guest') {
            this.setState({alertVisible: true});
          } else {
            NavService.navigate('Notifications');
          }
        }}>
        <View style={{flex: 1}}>
          <Map mark onMarkerPress={handleMarkerPress} />
        </View>
        <Matched
          cross
          text={'App Close'}
          desc={'Are you sure you want to exit the app'}
          btndelete
          isModalVisible={isModalVisible}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          handleLeft={() => {
            this.setState({isModalVisible: false});
          }}
          handleRight={() => {
            this.setState({isModalVisible: false});
            setTimeout(() => {
              BackHandler.exitApp();
            }, 850);
          }}
        />
        <Matched
          text={'Alert!'}
          btn={'LOGIN'}
          desc={'You are not allowed to enter it. Please Log in.'}
          isModalVisible={alertVisible}
          onToggle={() => this.setState({alertVisible: false})}
          onCross={() => this.setState({alertVisible: false})}
          handleLeft={() => {
            this.setState({isModalVisible: false});
          }}
          onCompleted={() => {
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
export default connect(mapStateToProps, actions)(Home);
