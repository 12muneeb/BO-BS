import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabs} from '../tabs/BottomTabs';
import DrawerComp from '../../components/Drawer';
import {useSelector} from 'react-redux';
import {Usertab} from '../tabs/Usertab/Usertab';
import {Vendortab} from '../tabs/Vendortab/Vendortab';

const Drawer = createDrawerNavigator();

const UserAppStack = () => {
  const loggedInUser = useSelector(({authReducer}) => authReducer?.user);
  console.log(loggedInUser, 'loggedInUserloggedInUser');

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: '80%',
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <DrawerComp {...props} />}
      initialRouteName={'Home'}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="BottomTabs"
        component={
          loggedInUser?.role == 'Vendor'  ?  Vendortab  : Usertab
        }
      />
    </Drawer.Navigator>
  );
};

export default UserAppStack;
