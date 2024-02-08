import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import NavService from '../helpers/NavService';
import CustomButton from './CustomButton';
import Shadows from '../helpers/Shadows';
import {colors, family} from '../utils';
import {appIcons, appImages} from '../assets';
import CustomText from './CustomText';
import Img from './Img';
import appStyles from '../screens/appStyles';
import {connect} from 'react-redux';
import {logoutUser, loginUser} from '../redux/actions/authAction';
import Matched from '../container/matched/Matched';

const {width} = Dimensions.get('screen');
class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardStatus: false,
      isVisible: false,
      alertBar: false,
    };
  }
  componentDidMount() {
    this.showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      this.setState({keyboardStatus: true});
    });
    this.hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      this.setState({keyboardStatus: false});
    });
  }
  componentWillUnmount() {
    this.showSubscription.remove();
    this.hideSubscription.remove();
  }
  render() {
    const isGuest = user?.user_role === 'Guest';
    const {isVisible, alertBar, keyboardStatus} = this.state;
    const {state, navigation, user} = this.props;
    const togglePopUp = () => {
      this.setState({isVisible: !isVisible});
    };
    const navigateFromPopUp = nav => {
      togglePopUp();
      NavService.navigate(nav);
    };
    const handleguest = () => {
      this.setState({alertBar: true});
      this.setState({isValue: 'Alert'});
    };
    const handleClose = () => {
      this.setState({isVisible: false});
    };
    const handleClosed = () => {
      this.setState({alertBar: false});
    };

    return (
      <>
        <ImageBackground
          source={appImages.tabbar}
          style={[
            {
              width: width,
              height: width * 0.265,
              position: 'absolute',
              bottom: -3,
              justifyContent: 'flex-end',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,
              elevation: 5,
            },
            keyboardStatus ? styles.hideTabNavigation : null,
          ]}
          imageStyle={{
            width: width,
            height: width * 0.35,
          }}>
          <Modal
            isVisible={isVisible}
            onBackButtonPress={togglePopUp}
            onBackdropPress={togglePopUp}
            backdropOpacity={0.6}>
            <View style={styles.mainContainer}>
              <View style={styles.buttonWrapper}>
                <CustomButton
                  title="CREATE POST"
                  onPress={() => navigateFromPopUp('CreatePost')}
                  buttonStyle={styles.buttonStyle}
                  textStyle={{fontSize: 16}}
                />
                <CustomButton
                  title="SCAN A SHOE"
                  onPress={() => navigateFromPopUp('ScanQR')}
                  buttonStyle={[
                    styles.buttonStyle,
                    styles.buttonPerfectionNext,
                  ]}
                  textStyle={{fontSize: 16}}
                />
              </View>
            </View>
          </Modal>
          <View
            style={{
              flexDirection: 'row',
              overflow: 'hidden',
              justifyContent: 'space-between',
            }}>
            {state.routes.map((route, index) => {
              const isFocused = state.index === index;

              const onPress = () => {
                if (user.role == 'Guest') {
                  if (route.name === 'Home') handleguest();

                  if (route.name === 'Settings') handleguest();
                  if (route.name === 'Profile') handleguest();
                }
                // else if(user.role == 'Vendor'){
                if (route.name === 'Home')
                  navigation.navigate('BottomTabs', {screen: 'Home'});
                if (route.name === 'Settings')
                  navigation.navigate('BottomTabs', {screen: 'Settings'});
                if (route.name === 'Profile')
                  navigation.navigate('BottomTabs', {screen: 'Profile'});
                // };
              };

              let imageSrc = appIcons.homeUnSelected;
              if (route.name === 'Home') imageSrc = appIcons.home;

              if (route.name === 'Settings') imageSrc = appIcons.setting;
              if (route.name === 'Profile') imageSrc = appIcons.userprofile;
              if (route.name === 'OtherHome') return null;

              return (
                <React.Fragment key={index + 1}>
                  <TouchableOpacity
                    accessibilityState={isFocused ? {selected: true} : {}}
                    accessibilityRole="button"
                    activeOpacity={0.8}
                    onPress={onPress}
                    style={styles.tabs}>
                    {isFocused && (
                      <Img
                        local
                        resizeMode={'contain'}
                        src={appIcons.tabbardot}
                        style={{
                          position: 'absolute',
                          height: 10,
                          width: 30,
                          top: 0,
                          alignSelf: 'center',
                          tintColor: isFocused ? colors.primary : colors.gray,
                        }}
                      />
                    )}
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 15,
                      }}>
                      <Image
                        source={imageSrc}
                        style={{
                          height: 30,
                          width: 30,
                          tintColor: isFocused ? colors.primary : colors.gray,
                        }}
                        resizeMode="contain"
                      />
                      <CustomText
                        text={route.name}
                        style={{
                          color: isFocused ? colors.primary : colors.lightgray,
                          ...appStyles.font12,
                          fontFamily: family.Montserrat_SemiBold,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </React.Fragment>
              );
            })}
          </View>
          <Matched
            text={'Alert!'}
            btn={'LOGIN'}
            desc={'You are not allowed to enter it. Please Log in.'}
            isModalVisible={alertBar}
            onToggle={() => this.setState({alertBar: false})}
            onCross={() => this.setState({alertBar: false})}
            onCompleted={() => {
              this.props.logoutUser();
            }}
          />
        </ImageBackground>
      </>
    );
  }
}
function mapStateToProps({authReducer}) {
  return {
    user: authReducer?.user,
  };
}

const actions = {loginUser, logoutUser};
export default connect(mapStateToProps, actions)(TabBar);
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: width * 0.4,
    borderRadius: 10,
  },
  buttonPerfectionNext: {
    backgroundColor: colors.secondary,
    marginLeft: 15,
  },
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 65,
    marginBottom: 10,
  },
  hideTabNavigation: {
    width: 0,
    height: 0,
    position: 'absolute',
    bottom: 0,
  },
});
