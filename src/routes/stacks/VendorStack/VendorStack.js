// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserAppStack from '../../drawer/appDrawer';
import Home from '../../../screens/Main/Vendor/Home/Home';
import ScanCode from '../../../screens/Main/Vendor/ScanCode/ScanCode';
import PaymentSetting from '../../../screens/Main/Vendor/PaymentSetting/PaymentSetting';
import AddNewPayment from '../../../screens/Main/Vendor/AddNewPayment/AddNewPayment';
import Subscribe from '../../../screens/Main/Vendor/Subscribe/Subscribe';
import AddPromotionDiscount from '../../../screens/Main/Vendor/AddPromotion&Discount/AddPromotionDiscount';
import EditBussniesProfile from '../../../screens/Main/Vendor/EditBussniesProfile/EditBussniesProfile';
import EditProfileDetails from '../../../screens/Main/Vendor/EditPersonalDetails/EditProfileDetails';
import EditPromotionDiscount from '../../../screens/Main/Vendor/EditPromotionDiscount/EditPromotionDiscount';
import EditDiscountProm from '../../../screens/Main/Vendor/EditDiscountProm/EditDiscountProm';
import Notifications from '../../../screens/Main/Vendor/Notiification/Notification';
const Stack = createNativeStackNavigator();

const VendorStack = ({initialRoute}) => {
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ScanCode" component={ScanCode} />
      <Stack.Screen name="PaymentSetting" component={PaymentSetting} />
      <Stack.Screen name="AddNewPayment" component={AddNewPayment} />
      <Stack.Screen name="Subscribe" component={Subscribe} />
      <Stack.Screen
        name="AddPromotionDiscount"
        component={AddPromotionDiscount}
      />
      <Stack.Screen
        name="EditBussniesProfile"
        component={EditBussniesProfile}
      />
      <Stack.Screen name="EditProfileDetails" component={EditProfileDetails} />
      <Stack.Screen name="EditDiscountProm" component={EditDiscountProm} />
      <Stack.Screen name="Notifications" component={Notifications} />

      <Stack.Screen
        name="EditPromotionDiscount"
        component={EditPromotionDiscount}
      />
    </Stack.Navigator>
  );
};

export default VendorStack;
