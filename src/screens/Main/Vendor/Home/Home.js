import {Dimensions, Linking, Text, TouchableOpacity, View,BackHandler} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {FlatList} from 'react-native-gesture-handler';
import {Discount, colorData} from '../../../../utils/dummyData';
import CustomText from '../../../../components/CustomText';
import styles from './styles';
import {colors} from '../../../../utils';
import Img from '../../../../components/Img';
import {appIcons} from '../../../../assets';
import QRCodeScanner from 'react-native-qrcode-scanner';
import NavService from '../../../../helpers/NavService';
import Matched from '../../../../container/matched/Matched';
import { connect } from 'react-redux';
import {logoutUser} from '../../../../redux/actions/authAction';
const {width} = Dimensions.get('screen');
export class Home extends Component {
  state = {
    isModalVisible : ''
  }
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  onBackPress = () => {
    this.setState({isModalVisible: true})
    return true;
  };
  render() {
    const {isModalVisible} = this.state
    return (
      <AppBackground title={'Home'} notification curve menu>


        <View>
          <CustomText text="Current Capacity" style={styles.txtheading1} />
          <View style={styles.headcard}>
            <View style={styles.subheadcard}>
              <CustomText text={'loreum'} style={styles.headtxt} />
              <CustomText text={'85'} style={styles.headtxt1} />
            </View>
            <View style={styles.ratemain}>
              <View style={styles.ratesubmain}></View>
            </View>
            <TouchableOpacity
              style={styles.scanhead}
              activeOpacity={0.9}
              onPress={() => NavService.navigate('ScanCode')}>
              <Img
                local
                src={appIcons.scan}
                resizeMode={'contain'}
                style={styles.scan}
              />
            </TouchableOpacity>
          </View>
          <CustomText
            text="Top Promotion & Discount"
            style={styles.txtheading1}
          />
          <FlatList
            scrollEnabled={true}
            data={Discount}
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{
              paddingBottom: width * 0.6,
              gap: 8,
            }}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={styles.card}>
                <View style={styles.curve}>
                  <CustomText text={item.name} style={styles.txt1} />
                  <CustomText text={item.discount} style={styles.txt2} />
                </View>
                <CustomText text={item.desc} style={styles.txt3} />
              </View>
            )}
          />
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
