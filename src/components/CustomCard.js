import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Shadows from '../helpers/Shadows';
import {colors, family} from '../utils';
import {appIcons} from '../assets';
import CustomText from './CustomText';
import Img from './Img';
import appStyles from '../screens/appStyles';
import NavService from './NavService';

const {width} = Dimensions.get('screen');

const CustomCard = ({
  onPress = () => {},
  item,
  handleClick,
  onIconPress,
  favourite,
}) => {
  const [like, setLike] = useState(favourite);
  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleClick}
        // onPress={() => NavService.navigate('OtherProfile', {user: item})}
      >
        <Image source={item?.image} style={styles.profileImage} />
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            paddingHorizontal: 8,
            left: 10,
            top: 10,
            borderRadius: 10,
            paddingVertical: 5,
          }}>
          <CustomText
            text={item.category}
            style={{
              color: colors.primary,
              ...appStyles.font13,
              fontFamily: family.Montserrat_SemiBold,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            top: 10,
            paddingHorizontal: 5,
            paddingVertical: 5,
          }}
          // onPress={() => setLike(!like) }

          onPress={() => {
            if (favourite) {
              onIconPress(item?.id);
            } else {
              setLike(!like);
              onIconPress(item?.id);
            }
          }}>
          <Img
            local
            resizeMode={'contain'}
            tintColor={like ? 'red' : 'white'}
            src={item?.heart}
            style={{height: 20, width: 20, marginRight: 10}}
          />
        </TouchableOpacity>
     
      </TouchableOpacity>
      <View style={{flex: 1, marginTop: 10, gap: 10, marginHorizontal: 5}}>
        <View
          style={{...appStyles.directionRow, justifyContent: 'space-between'}}>
          <Text style={styles.post}>{item?.title}</Text>
          <View style={[appStyles.directionRow, {gap: 5}]}>
            <Img
              src={item?.star}
              resizeMode={'contain'}
              local
              style={{height: 15, width: 15}}
            />
            <Text style={styles.post}>{item?.rate}</Text>
          </View>
        </View>

        <Text style={styles.post}>{item?.description}</Text>
        <View style={{flexDirection: 'row', gap: 2}}>
          <Text style={styles.post}>{item?.Capacity}</Text>
          <Text style={styles.post}>{item.Capacitydetail}</Text>
        </View>
        <View style={[appStyles.directionRow, {alignItems: 'center', gap: 5}]}>
          <Img
            resizeMode={'contain'}
            local
            tintColor={colors.white}
            src={item.location}
            style={{height: 15, width: 15}}
          />
          <Text style={styles.post}>{'Lorem Ipsum , Ny'}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  card: {
    ...Shadows.shadow0,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  profileImage: {
    height: 200,
    borderRadius: 10,
    width: '100%',
  },
  textContainer: {
    marginLeft: 10,
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.gray,
    marginTop: 2,
  },
  name: {fontSize: 15, fontWeight: '600'},
  dot: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    tint: colors.black,
  },
  footer: {},
  videoStyle: {
    width: '100%',
    height: 200,
    backgroundColor: colors.gray,
  },
  likes: {
    marginLeft: 10,
    fontSize: 13,
    color: colors.gray,
  },
  post: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: family.Montserrat_Regular,
    color: colors.white,
    justifyContent: 'center',
  },
  menu: {
    backgroundColor: colors.gray,
    width: width * 0.25,
    padding: 5,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    position: 'absolute',
    right: 11,
    top: 15,
    alignItems: 'center',
    zIndex: 1000,
  },
  menuText: {
    fontSize: 13,
    color: colors.black,
    fontWeight: '300',
    lineHeight: 20,
  },
});
