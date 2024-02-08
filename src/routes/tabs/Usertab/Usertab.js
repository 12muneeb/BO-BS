import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import TabBar from '../../components/TabbarComponent';
// import {HP, colors, platform} from '../../utils';
// import Home from '../../../screens/Main/Home';
import {colors} from '../../../utils';
import TabBar from '../../../components/TabbarComponent';
import Settings from '../../../screens/Main/User/Settings/Settings';
import Profile from '../../../screens/Main/User/Profile/Profile';
import Home from '../../../screens/Main/User/Home/Home';
import OtherHome from '../../../screens/Main/User/OtherHome';
const Tab = createBottomTabNavigator();

export const Usertab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: colors.gray},
        animation: 'simple_push',
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={'Home'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="OtherHome" component={OtherHome} />
    </Tab.Navigator>
  );
};
