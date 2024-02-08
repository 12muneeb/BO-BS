import {Dimensions, FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import {appIcons, appImages} from '../../../../assets';
import {styles} from './styles';
import CustomText from '../../../../components/CustomText';
import CustomTabView from '../../../../components/CustomTabView';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {
  Discount,
  Operational,
  OtherHome1,
  Review,
  homeData,
} from '../../../../utils/dummyData';
import StarRating from 'react-native-star-rating';
import NavService from '../../../../helpers/NavService';
import BottomPopup from '../../../../container/BottomPopup/BottomPopup';
import CustomCard from '../../../../components/CustomCard';
import {colors} from '../../../../utils';
const {width, height} = Dimensions.get('screen');
export class OtherHome extends Component {
  constructor() {
    super();
    this.state = {
      isActive: 0,
      starCount: 3,
      matchProfile: false,
    };
  }
  onStarRatingPress = rating => {
    this.setState({starCount: rating});
  };
  render() {
    const {matchProfile} = this?.state;

    return (
      <AppBackground
        OtherHomePress={() => {
          NavService.navigate('BottomTabs', {screen: 'Home'});
        }}
        title={'Home'}
        curve
        Searchtext
        menu
        notification
        rightIcn={appIcons.otherhome}>
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          <FlatList
            bounces={false}
            style={{flex: 1, marginTop: height / 64}}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: width * 0.32,
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={_index => _index.toString()}
            data={OtherHome1}
            ItemSeparatorComponent={this?.ItemSeparatorComponent}
            renderItem={({item}) => (
              <CustomCard
                item={item}
                statusColor={colors?.secondary}
                customContainer={{
                  borderRadius: 15,
                  backgroundColor: colors?.white,
                }}
                onIconPress={() => {}}
                handleClick={() => NavService?.navigate('EventDetail')}
              />
            )}
          />
        </ScrollView>
      </AppBackground>
    );
  }
}

export default OtherHome;
