import {Dimensions, FlatList, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {OtherHome1, OtherHome2} from '../../../../utils/dummyData';
import {colors} from '../../../../utils';
import CustomCard from '../../../../components/CustomCard';
import NavService from '../../../../helpers/NavService';
const {height, width} = Dimensions.get('screen');
export class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: OtherHome2,
    };
  }
  render() {
    const {data} = this.state;
    return (
      <AppBackground back title={'Favourite'} curve>
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          <FlatList
            bounces={false}
            style={{flex: 1}}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: width * 0.2,
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={_index => _index.toString()}
            data={data}
            ItemSeparatorComponent={this?.ItemSeparatorComponent}
            renderItem={({item}) => (
              <CustomCard
                onIconPress={id => {
                  const updatedData = data.filter(item => id != item?.id);
                  this.setState({data: updatedData});
                }}
                item={item}
                favourite={true}
                statusColor={colors?.secondary}
                customContainer={{
                  borderRadius: 15,
                  backgroundColor: colors?.white,
                }}
                handleClick={() => NavService?.navigate('EventDetail')}
              />
            )}
          />
        </ScrollView>
      </AppBackground>
    );
  }
}

export default Favourite;
