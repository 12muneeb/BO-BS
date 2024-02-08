import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {Alert, Dimensions, FlatList, View} from 'react-native';
import CustomList from '../../../../components/CustomList';
import {
  _dataStats,
  _messagePage,
  _notifications,
  _ongoingGoals,
} from '../../../../utils/dummyData';
import styles from './styles';
import {colors, family, size} from '../../../../utils';
import CustomText from '../../../../components/CustomText';
const {height, width} = Dimensions?.get('screen');
export class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      isActive: 0,
    };
  }
  ItemSeparatorComponent = () => {
    return <View style={styles.lineSeparator} />;
  };
  render() {
    const {isActive} = this?.state;

    return (
      <AppBackground back title={'Notifications'} marginHorizontal={false}>
        <View style={styles?.container}>
          <FlatList
            bounces={false}
            style={{flex: 1, marginTop: height / 64}}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: width * 0.03,
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={_index => _index.toString()}
            data={_notifications}
            ItemSeparatorComponent={this?.ItemSeparatorComponent}
            renderItem={({item}) => (
              <>
                <CustomText
                  color={colors?.white}
                  text={item?.assosiate_date_info?.date}
                  font={family?.Montserrat_SemiBold}
                  size={size?.small}
                />
                <FlatList
                  bounces={false}
                  style={{flex: 1, marginTop: height / 64}}
                  contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: width * 0.32,
                  }}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={_index => _index.toString()}
                  data={item?.assosiate_date_info?.data}
                  ItemSeparatorComponent={this?.ItemSeparatorComponent}
                  renderItem={({item}) => (
                    <CustomList
                      _item={item}
                      statusColor={colors?.secondary}
                      customContainer={{
                        borderRadius: 15,
                        backgroundColor: colors?.white,
                      }}
                      // onPress={() => NavService?.navigate('GoDetails')}
                    />
                  )}
                />
              </>
            )}
          />
        </View>
      </AppBackground>
    );
  }
}

export default Notifications;
