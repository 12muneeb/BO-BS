// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserAppStack from '../../drawer/appDrawer';
// import Home from '../../../screens/Main/User/Home/Home';
import EditProfile from '../../../screens/Main/User/EditProfile/EditProfile';
import Notifications from '../../../screens/Main/User/Notiification/Notification';
import OtherHome from '../../../screens/Main/User/OtherHome/OtherHome';
import EventDetail from '../../../screens/Main/User/EventDetail/EventDetail';
import Review from '../../../screens/Main/User/Review/Review';
import Favourite from '../../../screens/Main/User/Favourite';
const Stack = createNativeStackNavigator();

const UserStack = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName="UserAppStack"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="UserAppStack" component={UserAppStack} />
      {/* <Stack.Screen name="Home" component={Home} /> */}

      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="OtherHome" component={OtherHome} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Favourite" component={Favourite} />
    </Stack.Navigator>
  );
};

export default UserStack;
