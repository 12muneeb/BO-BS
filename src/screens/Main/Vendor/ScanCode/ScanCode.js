import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import {appIcons} from '../../../../assets';
import {styles} from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import CustomButton from '../../../../components/CustomButton';
import appStyles from '../../../appStyles';
export class ScanCode extends Component {
  render() {
    onSuccess = e => {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    };
    return (
      <AppBackground back title={'Scan Barcode'}>
        <QRCodeScanner
          onRead={this.onSuccess}
          bottomContent={
            <CustomButton
              textStyle={{...appStyles.font13}}
              title={'Scan Now'}
            />
          }
        />
      </AppBackground>
    );
  }
}

export default ScanCode;
