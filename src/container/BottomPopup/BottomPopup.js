import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Pressable,
} from 'react-native';
import {colors, size, family} from '../../utils';
import CustomModal from '../../components/CustomModal';
import {appIcons} from '../../assets';
import CustomButton from '../../components/CustomButton';
import Img from '../../components/Img';
import {styles} from './styles';
import CustomText from '../../components/CustomText';

const width = Dimensions.get('screen');

const BottomPopup = ({
  isModalVisible = false,
  currentfocus,
  selected = '',
  onToggle = () => {},
  onCross = () => {},
  onSubmit = () => {},
  EditFeedback,
  DeleteFeedback,
  editbtn,
  deletebtn,
  unmatcheduser,
  block,
  report,
  User,
  Blockbtn,
  Reportbtn,
  post,
  handleEdit,
  handleInfo,
  handleUser
}) => {
  return (
    <CustomModal visible={isModalVisible} togglePopup={onToggle}>
      <View style={styles.mainContainer}>
        <View
          style={[
            styles.modalChild,
            {
              backgroundColor: colors.prewhite,
            },
          ]}>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={onCross}>
            <Img
              local
              src={appIcons.crosson}
              style={{width: 80, height: 6, borderRadius: 8}}
              tintColor={colors.black}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingVertical: 25,
              gap: 15,
            }}>
            <TouchableOpacity
              style={styles.content}
              activeOpacity={0.9}
              onPress={handleEdit}>
              <Img
                local
                src={appIcons.edituser}
                resizeMode={'contain'}
                style={styles.img}
              />
              <CustomText text="Edit Personal Details" style={styles.txt} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.content}
              activeOpacity={0.9}
              onPress={handleInfo}>
              <Img
                local
                src={appIcons.info}
                resizeMode={'contain'}
                style={styles.img}
              />
              <CustomText text="Edit Business Details" style={styles.txt} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.content}
              activeOpacity={0.9}
              onPress={handleUser}>
              <Img
                local
                src={appIcons.promotion}
                resizeMode={'contain'}
                style={styles.img}
              />
              <CustomText
                text="Edit Promotion & Discounts"
                style={styles.txt}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomModal>
  );
};

export default BottomPopup;
