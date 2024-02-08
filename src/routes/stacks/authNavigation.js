// @app
// import * as React from 'react';
import React from 'react';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// @stack screens
import AppStarter from '../../screens/AppStarter';
import Login from '../../screens/Auth/Login';
import Signup from '../../screens/Auth/Signup';
import Otp from '../../screens/Auth/Otp';
import CompleteProfile from '../../screens/Auth/CompleteProfile';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import ChangePassword from '../../screens/Auth/ChangePassword/ChangePassword';
import PreLogin from '../../screens/Auth/PreLogin';
import LoginPhone from '../../screens/Auth/LoginPhone';
import BussniesProfile from '../../screens/Auth/BussniesProfile/BussniesProfile';
import AddPromotion from '../../screens/Auth/AddPromotion/AddPromotion';
import AddDiscount from '../../screens/Auth/AddDiscount/AddDiscount';
import Subscription from '../../screens/Auth/Subscription/Subscription';
import CardDetail from '../../screens/Auth/CardDetail/CardDetails';
import AddNewCard from '../../screens/Auth/AddNewCard/AddNewCard';
const RootStack = createNativeStackNavigator();

const AuthNavigation = ({initialRoute}) => {
  return (
    <RootStack.Navigator
      initialRouteName={'AppStarter'}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: false,
        animation: 'slide_from_right',

      }}>
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="AppStarter"
        component={AppStarter}
      />
       <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="PreLogin"
        component={PreLogin}
      />
       <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="AddPromotion"
        component={AddPromotion}
      />
         <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="LoginPhone"
        component={LoginPhone}
      />
         <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="AddDiscount"
        component={AddDiscount}
      />
        <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="BussniesProfile"
        component={BussniesProfile}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Login"
        component={Login}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Signup"
        component={Signup}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Otp"
        component={Otp}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="CompleteProfile"
        component={CompleteProfile}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ChangePassword"
        component={ChangePassword}
      />
       <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Subscription"
        component={Subscription}
      />
       <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="CardDetail"
        component={CardDetail}
      />
         <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="AddNewCard"
        component={AddNewCard}
      />
    </RootStack.Navigator>
  );
};

export default AuthNavigation;
