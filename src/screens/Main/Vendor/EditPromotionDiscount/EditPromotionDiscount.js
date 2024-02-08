import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {Discount} from '../../../../utils/dummyData';
import Img from '../../../../components/Img';
import CustomText from '../../../../components/CustomText';
import {styles} from './styles';
import {appIcons, appImages} from '../../../../assets';
import NavService from '../../../../helpers/NavService';
import Matched from '../../../../container/matched/Matched';
export class EditPromotionDiscount extends Component {
  state = {
    data: Discount,
    isModalVisible: false,
    cardId: null,
  };
  render() {
    const {data, isModalVisible, cardId} = this.state;
    const handleRemove = id => {
      this.setState({isModalVisible: false});
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
    const handleClick = id => {
      this.setState({cardId: id});
      this.setState({isModalVisible: true});
    };
    return (
      <AppBackground back title={'Edit promotions & Discounts'}>
        <FlatList
          scrollEnabled={true}
          data={data}
          showsVerticalScrollIndicator={false}
          bounces={false}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.card}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.itm}
                onPress={() => NavService.navigate('EditDiscountProm')}>
                <Img
                  local
                  src={appIcons.pen}
                  resizeMode={'contain'}
                  style={styles.cutimg}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.itm1}
                onPress={() => handleClick(item?.id)}>
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

        <Matched
          cross
          bin
          text={'Remove Item'}
          desc={'Are you sure you want to Remove this Item'}
          Delete
          btndelete
          isModalVisible={isModalVisible}
          onToggle={() => this.setState({isModalVisible: false})}
          onCross={() => this.setState({isModalVisible: false})}
          handleLeft={() => {
            this.setState({isModalVisible: false});
          }}
          handleRight={() => handleRemove(cardId)}
        />
      </AppBackground>
    );
  }
}

export default EditPromotionDiscount;
