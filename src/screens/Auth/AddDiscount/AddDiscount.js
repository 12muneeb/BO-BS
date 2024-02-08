import {FlatList, Text, View, BackHandler, Platform} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {Discount, Operational} from '../../../utils/dummyData';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils';
import {styles} from './styles';
import Img from '../../../components/Img';
import {appIcons} from '../../../assets';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../../components/CustomButton';
import Matched from '../../../container/matched/Matched';
import NavService from '../../../helpers/NavService';
import {connect} from 'react-redux';
import {loginUser} from '../../../redux/actions/authAction';
import Toast from 'react-native-toast-message';

export class AddDiscount extends Component {
  state = {
    isModalVisible: false,
    data: Discount,
    isVisible: false,
    cardId: null,
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
    NavService.navigate('AddPromotion');
    return true;
  };
  render() {
    const {role} = this.props?.route.params;
    const {isModalVisible, isVisible, data, cardId} = this.state;
    const handleRemove = id => {
      this.setState({isVisible: false});
      if (Platform.OS == 'ios') {
        setTimeout(() => {
          const updatedData = data.filter(item => id != item?.id);
          this.setState({data: updatedData});
        }, 850);
      } else {
        const updatedData = data.filter(item => id != item?.id);
        this.setState({data: updatedData});
      }
    };
    const handleOn = id => {
      this.setState({cardId: id});
      this.setState({isVisible: true});
    };
    const handleClick = () => {
      this.setState({isModalVisible: true});
    };
    const handlePress = () => {
      this.setState({isModalVisible: false});
      setTimeout(() => {
        NavService.navigate('Subscription', {
          role: role,
        });
      }, 850);
    };

    return (
      <AppBackground back title={'promotions & Discounts'}>
        <ScrollView>
          <FlatList
            scrollEnabled={false}
            data={data}
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={styles.card}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.itm}
                  onPress={() => handleOn(item?.id)}>
                  <Img
                    local
                    src={appIcons.crosscut}
                    resizeMode={'contain'}
                    style={styles.cutimg}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <CustomText text={item.name} style={styles.txt1} />
                  <CustomText text={item.discount} style={styles.txt2} />
                </View>
                <CustomText text={item.desc} style={styles.txt3} />
              </View>
            )}
          />
          <View style={styles.btncontent}>
            <CustomButton
              title="Skip"
              buttonStyle={styles.btn}
              textStyle={styles.txtbtn}
              onPress={() => {
                let payload = {
                  role: 'Vendor',
                  email: 'abc@gmail.com',
                  password: '123456',
                };
                Toast.show({
                  text1: 'Sign up successful',
                  type: 'success',
                  visibilityTime: 3000,
                });
                this.props.loginUser(payload);
              }}
            />
            <CustomButton
              title="Next"
              buttonStyle={styles.btn1}
              onPress={handleClick}
            />
          </View>
        </ScrollView>
        <Matched
          cross
          sucessfull
          text={'Successful'}
          desc={'Your business profile has been \n created successfully'}
          btn={'Publish'}
          isModalVisible={isModalVisible}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          onCompleted={handlePress}
        />
        <Matched
          cross
          bin
          text={'Remove Item'}
          desc={'Are you sure you want to Remove this Item'}
          Delete
          btndelete
          isModalVisible={isVisible}
          onToggle={() => this.setState({isVisible: false})}
          onCross={() => this.setState({isVisible: false})}
          handleLeft={() => {
            this.setState({isVisible: false});
          }}
          handleRight={() => handleRemove(cardId)}
        />
      </AppBackground>
    );
  }
}

// export default AddDiscount;

const actions = {loginUser};
export default connect(null, actions)(AddDiscount);
