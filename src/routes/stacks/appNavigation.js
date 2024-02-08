// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// drawerComponentt
import UserAppStack from '../drawer/appDrawer';
// @stack screens
// import HomeStack from '.././stacks/HomeStack';
// import GroupStack from '.././stacks/GroupStack';
// import CategoryStack from '.././stacks/CategoryStack';
// import CheckOutfitStack from './CheckOutfitStack';
// screens
// import Home from '../../screens/Main/Home';

const Stack = createNativeStackNavigator();

const AppNavigation = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName="UserAppStack"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
        animation: 'slide_from_right',

      }}>
      <Stack.Screen name="UserAppStack" component={UserAppStack} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
