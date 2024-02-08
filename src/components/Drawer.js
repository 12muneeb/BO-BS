import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Dimensions,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors, family, size} from '../utils';
import NavService from '../helpers/NavService';
import {appIcons, appImages, appLogos} from '../assets';
import ProfileImage from '../components/ProfileImage';
import {logoutUser} from '../redux/actions/authAction';
import CustomText from './CustomText';
// import ModalPopup from '../containers/Popup/modalPopup/modalPopup';
import Img from './Img';
import Matched from '../container/matched/Matched';
const {width, height} = Dimensions?.get('screen');
const menuItems = [
  {
    icon: appIcons.home,
    title: 'Home',
    nav: 'Home',
  },
  {
    icon: appIcons.profile,
    title: 'My Profile',
    nav: 'Profile',
  },
  {
    icon: appIcons.terms,
    title: 'Terms & Conditions',
    browser: 'https://www.google.com',
  },

  {
    icon: appIcons.privacy,
    title: 'Privacy Policy',
    browser: 'https://www.google.com',
  },

  {
    icon: appIcons.logout,
    title: 'Logout',
    nav: 'logout',
  },
];
const UserItems = [
  {
    icon: appIcons.home,
    title: 'Home',
    nav: 'Home',
  },
  {
    icon: appIcons.profile,
    title: 'My Profile',
    nav: 'Profile',
  },
  {
    icon: appIcons.heart,
    title: 'Favourite',
    nav: 'Favourite',
  },
  {
    icon: appIcons.terms,
    title: 'Terms & Conditions',
    browser: 'https://www.google.com',
  },

  {
    icon: appIcons.privacy,
    title: 'Privacy Policy',
    browser: 'https://www.google.com',
  },

  {
    icon: appIcons.logout,
    title: 'Logout',
    nav: 'logout',
  },
];
class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      profileImage: null,
      isModalVisible: false,
      alertVisible: false,
    };
  }
  handleClose = () => {
    this?.setState({isVisible: false});
  };
  handleLogout = () => {
    this?.props?.logoutUser();
  };
  render() {
    const {profileImage, isVisible, isModalVisible, alertVisible} = this.state;
    const {user} = this.props;
    console.log('useddddr', user?.role);
    const RenderItem = ({item, index}) => {
      const {title, icon, nav} = item;
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            if (user?.role == 'Guest') {
              if (title === 'Logout') {
                NavService?.closeDrawer();
                setTimeout(() => {
                  this.setState({isModalVisible: true});
                }, 850);
              } else {
                NavService?.closeDrawer();
                setTimeout(() => {
                  this.setState({alertVisible: true});
                }, 850);
              }
            } else {
              if (title === 'Logout') {
                NavService?.closeDrawer();
                setTimeout(() => {
                  this.setState({isModalVisible: true});
                }, 850);
                // this?.setState({isVisible: true});
              } else if (item?.browser) {
                Linking.openURL(item?.browser);
              } else {
                title === 'Home'
                  ? NavService.navigate('BottomTabs', {screen: 'Home'})
                  : this.props.navigation.navigate(nav);
              }
            }
          }}
          style={{
            width: item?.title == 'Logout' ? '70%' : '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: height / 90,
            paddingHorizontal: width / 12,
            backgroundColor: item?.title == 'Logout' ? colors?.primary : null,
            paddingLeft: item?.title == 'Logout' ? 55 : null,
            gap: 10,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <View
            style={{
              paddingVertical: 10,
              borderRadius: 7,
              marginBottom: 5,
            }}>
            <Image
              source={icon}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: colors.white,
              }}
            />
          </View>
          <CustomText
            style={{marginTop: -5}}
            text={title}
            font={family?.Poppins_Medium}
            size={size?.xsmall}
            color={colors?.white}
          />
        </TouchableOpacity>
      );
    };
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors.preblack,
          alignItems: 'center',
          paddingTop: getStatusBarHeight(),
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          borderRightColor: colors?.white,
          borderRightWidth: 2,
          marginTop: getStatusBarHeight(),
        }}>
        <TouchableOpacity
          onPress={() => NavService?.closeDrawer()}
          style={{height: 20, width: 20, alignSelf: 'flex-end', right: 30}}>
          <Img
            local
            resizeMode={'contain'}
            src={appIcons.drawerback}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            paddingBottom: 30,
            gap: 5,
            paddingHorizontal: 20,
            position: 'relative',
            top: 20,
            borderBottomWidth: 1.5,
            borderBottomColor: colors?.white,
          }}>
          <View
            style={{
              height: 120,
              width: 120,

              borderRadius: 100,
              alignItems: 'center',
              borderWidth: 1.5,
              borderStyle: 'dashed',
              borderColor: colors.secondary,
              justifyContent: 'center',
            }}>
            <Img
              local
              src={appImages.profile}
              resizeMode={'contain'}
              style={{width: 100, height: 100, borderRadius: 50}}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              gap: 5,
            }}>
            <CustomText
              text={'John Smith'}
              font={family?.Poppins_Medium}
              size={size?.small}
              color={colors?.white}
            />
            <CustomText
              style={{marginTop: -4}}
              text={user?.email}
              font={family?.Poppins_Medium}
              size={size?.xsmall}
              color={colors?.white}
            />
          </View>
        </View>
        <View style={{flex: 1, marginTop: height / 20, width: '100%'}}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={user.role == 'User' ? UserItems : menuItems}
            style={{
              height: '100%',
            }}
            renderItem={props => <RenderItem {...props} />}
          />
        </View>

        <Matched
          text={'Logout Account'}
          desc={'Are you sure you want to logout your account '}
          btndelete
          isModalVisible={isModalVisible}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          handleLeft={() => {
            this.setState({isModalVisible: false});
          }}
          handleRight={() => {
            this.setState({isModalVisible: false}, () => {
              this.props.logoutUser();
            });
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
            this.setState({alertVisible: false});
          }}
          onCompleted={() => {
            this.props.logoutUser();
          }}
        />
      </View>
    );
  }
}

function mapStateToProps({authReducer: {user}}) {
  return {
    user: user,
  };
}
const actions = {logoutUser};
export default connect(mapStateToProps, actions)(Drawer);
