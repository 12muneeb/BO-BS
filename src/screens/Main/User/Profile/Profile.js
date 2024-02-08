import {Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {colors, size} from '../../../../utils';
import Img from '../../../../components/Img';
import {appIcons, appImages} from '../../../../assets';
import appStyles from '../../../appStyles';
import styles from './styles';
import CustomText from '../../../../components/CustomText';
import NavService from '../../../../helpers/NavService';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const item1 = [
      {
        heading: 'Email Address',
        subHeading: 'info@gmail.com',
      },
      {
        heading: 'Phone Number',
        subHeading: '+(123) 456 789',
      },
      {
        heading: 'Age',
        subHeading: '100',
      },
      {
        heading: 'Address',
        subHeading: 'America',
      },
      {
        heading: 'City',
        subHeading: 'USA',
      },
      {
        heading: 'State',
        subHeading: 'Texsla',
      },
    ];
    const item = this.state;
    console.log(item.heading, 'itemmmmm');
    return (
      <AppBackground
        title={'Profile'}
        menu
        rightIconimage={appIcons.edit}
        rightimage
        rightimageonPress={() => {
          NavService.navigate('EditProfile');
        }}>
        <View style={{flex: 1, backgroundColor: '#191919', gap: 10}}>
          <View
            style={{
              ...appStyles.alignCenter,
              ...appStyles.margin3Percent,
              gap: 15,
            }}>
            <View
              style={{
                backgroundColor: colors.profilebackground,
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 100,
              }}>
              <Img
                local
                src={appImages.profile}
                resizeMode={'contain'}
                style={{height: 100, width: 100, borderRadius: 100}}
              />
            </View>
            <CustomText text="John Smith" style={styles.name} />
          </View>

          <View style={styles.mainheading}>
            <View style={{}}>
              <CustomText
                color={colors.white}
                text={item1[0].heading}
                size={size.xxsmall}
                style={appStyles.family_Montserrat_Semi_Bold}
              />
            </View>

            <View style={styles.rightContainer}>
              <CustomText
                text={item1[0].subHeading}
                numberOfLines={3}
                style={styles.subheading}
              />
            </View>
          </View>
          <View style={styles.mainheading}>
            <View style={{}}>
              <CustomText
                color={colors.white}
                text={item1[1].heading}
                size={size.xxsmall}
                style={appStyles.family_Montserrat_Semi_Bold}
              />
            </View>

            <View style={styles.rightContainer}>
              <CustomText
                style={styles.subheading}
                text={item1[1].subHeading}
                numberOfLines={3}
              />
            </View>
          </View>
          <View style={styles.mainheading}>
            <View style={{}}>
              <CustomText
                color={colors.white}
                text={item1[2].heading}
                size={size.xxsmall}
                style={appStyles.family_Montserrat_Semi_Bold}
              />
            </View>

            <View style={styles.rightContainer}>
              <CustomText
                text={item1[2].subHeading}
                style={styles.subheading}
                numberOfLines={3}
              />
            </View>
            
          </View>
          <View style={styles.mainheading}>
            <View style={{}}>
              <CustomText
                color={colors.white}
                text={item1[3].heading}
                size={size.xxsmall}
                style={appStyles.family_Montserrat_Semi_Bold}
              />
            </View>

            <View style={styles.rightContainer}>
              <CustomText
                text={item1[3].subHeading}
                style={styles.subheading}
                numberOfLines={3}
              />
            </View>
            
          </View>
          <View style={styles.mainheading}>
            <View style={{}}>
              <CustomText
                color={colors.white}
                text={item1[4].heading}
                size={size.xxsmall}
                style={appStyles.family_Montserrat_Semi_Bold}
              />
            </View>

            <View style={styles.rightContainer}>
              <CustomText
                text={item1[4].subHeading}
                style={styles.subheading}
                numberOfLines={3}
              />
            </View>
          </View>
          <View style={styles.mainheading}>
            <View style={{}}>
              <CustomText
                color={colors.white}
                text={item1[5].heading}
                size={size.xxsmall}
                style={appStyles.family_Montserrat_Semi_Bold}
              />
            </View>

            <View style={styles.rightContainer}>
              <CustomText
                text={item1[5].subHeading}
                style={styles.subheading}
                numberOfLines={3}
              />
            </View>
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default Profile;
