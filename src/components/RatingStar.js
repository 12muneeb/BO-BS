import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {appIcons} from '../assets';
import appStyles from '../screens/appStyles';

class RatingStar extends React.Component {

  render() {
    const {rating, starSize, starColor} = this.props;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i <= rating ? appIcons.heart : appIcons.home}
          style={{width: starSize, height: starSize, tintColor: starColor}}
        />,
      );
    }

    return <View style={styles.container}>{stars}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    ...appStyles.margin1Percent,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RatingStar;
