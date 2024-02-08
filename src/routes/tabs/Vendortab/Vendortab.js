import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBar from '../../../components/TabbarComponent';
import { colors } from '../../../utils';
import Settings from '../../../screens/Main/Vendor/Settings/Settings';
import Home from '../../../screens/Main/Vendor/Home/Home';
import Profile from '../../../screens/Main/Vendor/Profile/Profile';
const Tab = createBottomTabNavigator();

export const Vendortab = () => {
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
     
    </Tab.Navigator>
  );
};
