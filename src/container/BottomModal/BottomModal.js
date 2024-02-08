import React, {Component, createRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, size, family} from '../../utils';
import CustomModal from '../../components/CustomModal';
import {appIcons} from '../../assets';
import Img from '../../components/Img';
import {styles} from './styles';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import Shadows from '../../helpers/Shadows';
import CustomButton from '../../components/CustomButton';
import Switched from '../../components/Switched';
import appStyles from '../../screens/appStyles';
import ActionSheetComponent from '../../components/ActionSheetComponent';

class BottomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startHour: '',
      startMin: '',
      startPeriod: 'AM',
      endHour: '',
      endMin: '',
      endPeriod: 'AM',
      isNoti: false,
      endhrsData: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ],
      starthrsData: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ],
      startminData: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      endminData: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      starthrs: '',
      endhrs: '',
      startmin: '',
      endmin: '',
    };
    this.actionSheetStateRefStarthrs = createRef();
    this.actionSheetStateRefEndhrs = createRef();
    this.actionSheetStateRefEndmin = createRef();
    this.actionSheetStateRefStartmin = createRef();
  }

  handlePeriodChange(type, action) {
    if (type === 'start') {
      this.setState({
        startPeriod: action === 'up' ? 'PM' : 'AM',
      });
    } else {
      this.setState({
        endPeriod: action === 'up' ? 'PM' : 'AM',
      });
    }
  }

  render() {
    const {
      isModalVisible = false,
      currentfocus,
      selected = '',
      onToggle = () => {},
      onCross = () => {},
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
      handleUser,
      handleClick,
    } = this.props;

    const {
      startHour,
      startMin,
      startPeriod,
      endHour,
      endMin,
      endPeriod,
      isNoti,
      starthrs,
      starthrsData,
      endhrs,
      endhrsData,
      startmin,
      startminData,
      endminData,
      endmin,
    } = this.state;

    return (
      <CustomModal visible={isModalVisible} togglePopup={onToggle}>
        <View style={styles.mainContainer}>
          <View style={styles.modalChild}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={onCross}>
              <Img
                local
                src={appIcons.crosson}
                style={{width: 80, height: 6, borderRadius: 8}}
                tintColor={colors.black}
              />
            </TouchableOpacity>
            <Switched
              mainboxrr={{width: '100%'}}
              title={'Monday'}
              onToggle={() => this.setState({isNoti: !isNoti})}
              isOn={isNoti}
            />
            <Text style={styles.txt}>Start Time</Text>

            <View style={styles.timeContainer}>
              <CustomButton
                title={starthrs ? starthrs : 'Hrs'}
                buttonStyle={styles.gender}
                textStyle={
                  starthrs ? styles.gendercolorafter : styles.gendercolor
                }
                onPress={() => this.actionSheetStateRefStarthrs.current.show()}
              />
              <ActionSheetComponent
                ref={this.actionSheetStateRefStarthrs}
                title="Select Hrs"
                dataset={starthrsData}
                onPress={item => {
                  this.setState({
                    starthrs: item,
                  });
                }}
              />
              <CustomButton
                title={startmin ? startmin : 'Mins'}
                buttonStyle={styles.genders}
                textStyle={
                  startmin ? styles.gendercolorafter : styles.gendercolor
                }
                onPress={() => this.actionSheetStateRefStartmin.current.show()}
              />
              <ActionSheetComponent
                ref={this.actionSheetStateRefStartmin}
                title="Select Mins"
                dataset={startminData}
                onPress={item => {
                  this.setState({
                    startmin: item,
                  });
                }}
              />

              <View
                style={{
                  backgroundColor: colors.lightshade,
                  flexDirection: 'row',
                  height: 50,
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 8,
                  marginLeft: 10,
                  marginTop: 18,
                }}>
                <Text style={{color: colors.black}}>{startPeriod}</Text>
                <View
                  style={{
                    width: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 8,
                    marginLeft: 5,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.handlePeriodChange('start', 'up')}>
                    <Text style={styles.arrow}>▲</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.handlePeriodChange('start', 'down')}>
                    <Text style={styles.arrow}>▼</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <Text style={styles.txt}>End Time</Text>
            <View style={styles.timeContainer}>
              <CustomButton
                title={endhrs ? endhrs : 'Hrs'}
                buttonStyle={styles.gender}
                textStyle={
                  endhrs ? styles.gendercolorafter : styles.gendercolor
                }
                onPress={() => this.actionSheetStateRefEndhrs.current.show()}
              />
              <ActionSheetComponent
                ref={this.actionSheetStateRefEndhrs}
                title="Select Hrs"
                dataset={endhrsData}
                onPress={item => {
                  this.setState({
                    endhrs: item,
                  });
                }}
              />
              <CustomButton
                title={endmin ? endmin : 'Hrs'}
                buttonStyle={styles.genders}
                textStyle={
                  endmin ? styles.gendercolorafter : styles.gendercolor
                }
                onPress={() => this.actionSheetStateRefEndmin.current.show()}
              />
              <ActionSheetComponent
                ref={this.actionSheetStateRefEndmin}
                title="Select Mins"
                dataset={endminData}
                onPress={item => {
                  this.setState({
                    endmin: item,
                  });
                }}
              />

              <View
                style={{
                  backgroundColor: colors.lightshade,
                  flexDirection: 'row',
                  height: 50,
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 8,
                  marginLeft: 10,
                  marginTop: 18,
                }}>
                <Text style={{color: colors.black}}>{endPeriod}</Text>
                <View
                  style={{
                    width: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                    paddingVertical: 5,
                    marginLeft: 5,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.handlePeriodChange('end', 'up')}>
                    <Text style={styles.arrow}>▲</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.handlePeriodChange('end', 'down')}>
                    <Text style={styles.arrow}>▼</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <CustomButton
              onPress={handleClick}
              textStyle={{...appStyles.font14}}
              title={'Save'}
              buttonStyle={{marginTop: 10}}
            />
          </View>
        </View>
      </CustomModal>
    );
  }
}

export default BottomModal;
