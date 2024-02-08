import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
} from 'react-native';

import {colors} from '../../utils';
import CustomModal from '../../components/CustomModal';
import {appIcons, appImages} from '../../assets';
import CustomButton from '../../components/CustomButton';
import Img from '../../components/Img';
import styles from './styles';
import CustomText from '../../components/CustomText';

const {width, height} = Dimensions.get('screen');
const Matched = ({
  isModalVisible = false,
  title,
  desc,
  text,
  btn,
  sucessfull,
  bin,
  handleLeft,
  handleRight,
  btndelete,
  cross,
  completed,
  onToggle = () => {},
  onCompleted = () => {},
  onCross = () => {},
}) => {
  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      <View style={styles.viewStyle1}>
        <View
          style={{
            backgroundColor: colors.preblack,
            alignItems: 'center',
            paddingBottom: 35,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: 'center',
          }}>
          <CustomText
            text={text ? text : 'SUCCESSFULL'}
            style={styles.touchttitle}
          />
          {cross && (
            <TouchableOpacity
              style={{position: 'absolute', right: 20}}
              onPress={onCross}>
              <Img
                local
                src={appIcons.cross}
                resizeMode={'contain'}
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          )}
        </View>
        {sucessfull && (
          <ImageBackground
            source={appImages.created}
            style={styles.imgbg1}
            resizeMode="contain"></ImageBackground>
        )}
        {completed && (
          <View style={styles.completed1}>
            <Img
              tintColor={'white'}
              local
              resizeMode={'contain'}
              src={appIcons.tick}
              style={styles.completed}
            />
          </View>
        )}
        {bin && (
          <ImageBackground
            source={appIcons.delete}
            style={styles.imgbg1}
            resizeMode="contain"></ImageBackground>
        )}
        <Text style={styles.txtStyle2}>
          {desc ? desc : 'Your Profile has been created \n successfully.'}
        </Text>

        {btndelete ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 10,
              gap: 20,
            }}>
            <CustomButton
              onPress={handleLeft}
              
              title={btn ? btn : 'No'}
              buttonStyle={{width: 150}}
              textStyle={styles.txtbtn}
            />
            <CustomButton
              onPress={handleRight}
              title={btn ? btn : 'Yes'}
              buttonStyle={{width: 150}}
              textStyle={styles.txtbtn}
            />
          </View>
        ) : (
          <CustomButton
            onPress={onCompleted}
            title={btn ? btn : 'Continue'}
            buttonStyle={styles.btnstyle}
            textStyle={styles.txtbtn}
          />
        )}
      </View>
    </CustomModal>
  );
};

export default Matched;
