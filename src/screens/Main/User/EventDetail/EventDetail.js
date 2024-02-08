import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import {appIcons, appImages} from '../../../../assets';
import {styles} from './styles';
import CustomText from '../../../../components/CustomText';
import CustomTabView from '../../../../components/CustomTabView';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {Discount, Operational, Review} from '../../../../utils/dummyData';
import StarRating from 'react-native-star-rating';
import NavService from '../../../../helpers/NavService';
import BottomPopup from '../../../../container/BottomPopup/BottomPopup';
import Swiper from 'react-native-swiper';
import CustomButton from '../../../../components/CustomButton';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors} from '../../../../utils';
const {width, height} = Dimensions.get('screen');
export class EventDetail extends Component {
  constructor() {
    super();
    this.state = {
      isActive: 0,
      starCount: 3,
      matchProfile: false,
    };
  }
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  onStarRatingPress = rating => {
    this.setState({starCount: rating});
  };
  render() {
    const {isActive, matchProfile} = this?.state;
    const buttonTabs = [
      {
        id: 0,
        btn: 'About',
      },
      {
        id: 1,
        btn: 'Promotion & Discount',
      },
      {
        id: 2,
        btn: 'Reviews',
      },
    ];
    const handleTabs = id => {
      this?.setState({isActive: id});
    };
    return (
      <>
        <View
          style={{
            flex: 0.4,
            borderRadius: 20,
            borderBottomLeftRadius: 10,
          }}>
          <Swiper
            dotColor={colors.primary}
            activeDotColor={colors.white}
            style={styles.wrapper}
            showsButtons={false}>
            <View style={styles.slide1}>
              <Img src={appImages.bannerimage} local style={styles.bannerimg} />
            </View>
            <View style={styles.slide2}>
              <Img src={appImages.bannerimage} local style={styles.bannerimg} />
            </View>
            <View style={styles.slide3}>
              <Img src={appImages.bannerimage} local style={styles.bannerimg} />
            </View>
          </Swiper>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              NavService.goBack();
            }}
            style={{
              position: 'absolute',
              alignItems: 'center',
              backgroundColor: 'transparent',
              borderRadius: 0,
              left: 15,
              width: 45,
              height: 45,
              marginTop: getStatusBarHeight() + 10,

              justifyContent: 'center',
              // ...Shadows.shadow3,
            }}>
            <Image
              source={appIcons.back}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
                tintColor: colors.white,
              }}
            />
          </TouchableOpacity>
        </View>
        <AppBackground backgroundimage>
          {/* // handleOn={() => this.setState({matchProfile: true})}> */}
          <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <View style={{paddingBottom: 100}}>
              <View style={styles.container}>
                <View style={styles.content1}>
                  <View style={styles.subcontent}>
                    <CustomText text="Club Name" style={styles.txt} />
                    <CustomText text=" Abc" style={styles.txt} />
                  </View>
                  <View style={styles.subcontent}>
                    <Img
                      local
                      src={appIcons.star}
                      resizeMode={'contain'}
                      style={styles.img}
                    />
                    <CustomText text="4.6 |" style={styles.txt1} />
                    <CustomText text=" 50 Reviews" style={styles.txt1} />
                  </View>
                </View>
                <View style={styles.subcontent}>
                  <CustomText text="Category" style={styles.txt} />
                  <CustomText text=" Lorem Ipsum" style={styles.txt1} />
                </View>
                <View style={styles.content1}>
                  <View style={styles.subcontent}>
                    <CustomText text="Current Capacity" style={styles.txt} />
                  </View>
                  <View style={styles.subcontent1}>
                    <CustomText text="85" style={styles.txt2} />
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: colors.white,
                        height: 10,
                        borderRadius: 100,
                      }}>
                      <View
                        style={{
                          backgroundColor: '#FFB300',
                          width: '80%',
                          height: 10,
                          borderRadius: 100,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.content3}>
                  <Img
                    local
                    src={appImages.profile}
                    resizeMode={'contain'}
                    style={styles.profile}
                  />
                  <View style={{marginLeft: 8}}>
                    <CustomText text="Jay Smith" style={styles.txt} />
                    <CustomText text="Business Vendor" style={styles.txt1} />
                  </View>
                </View>
                <CustomTabView
                  item={buttonTabs}
                  width={width - 0}
                  // btnWidth={(width - 70) / 2.5}
                  isActive={isActive}
                  onPress={handleTabs}
                />

                {isActive === 0 ? (
                  <>
                    <View style={styles.bordersty}>
                      <View style={styles.subcontent}>
                        <CustomText
                          text="Business Details"
                          style={styles.txt}
                        />
                      </View>
                      <View style={styles.content1}>
                        <CustomText text="Email Address" style={styles.txt3} />
                        <CustomText
                          text="info@example.com"
                          style={styles.txt4}
                        />
                      </View>
                    </View>
                    <View style={styles.content2}>
                      <CustomText text="Phone Number" style={styles.txt3} />
                      <CustomText text="+1 123 456 789 0" style={styles.txt4} />
                    </View>
                    <View style={styles.bordersty}>
                      <View style={styles.subcontent}>
                        <CustomText text="Description" style={styles.txt} />
                      </View>
                      <View style={styles.content1}>
                        <CustomText
                          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                          style={styles.desc}
                        />
                      </View>
                    </View>
                    <View style={styles.bordersty}>
                      <View style={styles.subcontent}>
                        <CustomText
                          text="Operational Hour"
                          style={styles.txt}
                        />
                      </View>
                      <FlatList
                        scrollEnabled={false}
                        data={Operational}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        keyExtractor={(_item, index) => index.toString()}
                        renderItem={({item, index}) => (
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <CustomText text={item.day} style={styles.txt4} />
                            <CustomText text={item.time} style={styles.txt4} />
                          </View>
                        )}
                      />
                    </View>
                    <View style={styles.bordersty}>
                      <View style={styles.subcontent}>
                        <CustomText text="Location" style={styles.txt} />
                      </View>
                      <View style={styles.content1}>
                        <Img
                          local
                          src={appImages.map}
                          resizeMode={'cover'}
                          style={{width: '95%', height: 150, borderRadius: 10}}
                        />
                      </View>
                    </View>
                  </>
                ) : null}
                {isActive === 1 ? (
                  <>
                    <View style={styles.bordersty}>
                      <View style={styles.content1}>
                        <CustomText
                          text="Promotions & Discount"
                          style={styles.txt3}
                        />
                      </View>
                    </View>
                    <FlatList
                      scrollEnabled={false}
                      data={Discount}
                      showsVerticalScrollIndicator={false}
                      bounces={false}
                      keyExtractor={(_item, index) => index.toString()}
                      renderItem={({item, index}) => (
                        <View style={styles.card1}>
                          <View style={styles.curve}>
                            <CustomText text={item.name} style={styles.txt6} />
                            <CustomText
                              text={item.discount}
                              style={styles.txt7}
                            />
                          </View>
                          <CustomText text={item.desc} style={styles.txt8} />
                        </View>
                      )}
                    />
                  </>
                ) : null}
                {isActive === 2 ? (
                  <>
                    <View style={styles.bordersty}>
                      <View style={styles.reviewcontainer}>
                        <Text style={styles.rating}>4.6</Text>
                        <StarRating
                          disabled={true}
                          empty
                          fullStar={appIcons.star}
                          emptyStar={appIcons.emptystar}
                          iconSet={'Ionicons'}
                          maxStars={5}
                          rating={this.state.starCount}
                          selectedStar={rating =>
                            this.onStarRatingPress(rating)
                          }
                          fullStarColor={'red'}
                          halfStarEnabled={true}
                          starSize={18}
                          starStyle={{top: 0, marginHorizontal: 1}}
                        />
                        <Text style={styles.subtitle}>Based On 50 Reviews</Text>
                      </View>
                      <FlatList
                        scrollEnabled={false}
                        data={Review}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        keyExtractor={(_item, index) => index.toString()}
                        renderItem={({item, index}) => (
                          <>
                            <View style={styles.content1}>
                              <View style={styles.subcontent}>
                                <Img
                                  local
                                  src={appImages.profile}
                                  resizeMode={'contain'}
                                  style={styles.profileimg}
                                />
                                <View style={{marginLeft: 10}}>
                                  <CustomText
                                    text={item.name}
                                    style={styles.txt}
                                  />
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                    }}>
                                    <StarRating
                                      disabled={true}
                                      empty
                                      fullStar={appIcons.star}
                                      emptyStar={appIcons.emptystar}
                                      iconSet={'Ionicons'}
                                      maxStars={5}
                                      rating={this.state.starCount}
                                      selectedStar={rating =>
                                        this.onStarRatingPress(rating)
                                      }
                                      fullStarColor={'red'}
                                      halfStarEnabled={true}
                                      starSize={13}
                                      starStyle={{top: 0}}
                                    />
                                    <CustomText
                                      text="4.6"
                                      style={styles.star}
                                    />
                                  </View>
                                </View>
                              </View>
                              <View style={styles.subcontent}>
                                <CustomText
                                  text={item.day}
                                  style={styles.txt1}
                                />
                              </View>
                            </View>
                            <View style={styles.chat}>
                              <CustomText
                                text={item.desc}
                                style={styles.txt1}
                              />
                            </View>
                          </>
                        )}
                      />
                    </View>
                    <CustomButton
                      onPress={() => {
                        NavService.navigate('Review');
                      }}
                      buttonStyle={{
                        width: '100%',
                        marginTop: 40,
                      }}
                      title={'Give a Review'}
                    />
                  </>
                ) : null}
              </View>
            </View>
          </ScrollView>
          <BottomPopup
            isModalVisible={matchProfile}
            currentfocus={this}
            onToggle={() => this.setState({matchProfile: false})}
            onCross={() => this.setState({matchProfile: false})}
            onSubmit={() => this.setState({matchProfile: false})}
            handleEdit={() => NavService.navigate('EditProfileDetails')}
            handleInfo={() => NavService.navigate('EditBussniesProfile')}
            handleUser={() => NavService.navigate('EditPromotionDiscount')}
          />
        </AppBackground>
      </>
    );
  }
}

export default EventDetail;
