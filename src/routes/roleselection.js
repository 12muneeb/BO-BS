import React, {Component} from 'react';
import {connect} from 'react-redux';
// @navigations

import {_AppLayout} from '../redux/actions';
import AuthNavigation from './stacks/authNavigation';
import {loginUser, setUserType} from '../redux/actions/authAction';
import VendorStack from './stacks/VendorStack/VendorStack';
import UserStack from './stacks/UserStack/UserStack';
class RoleSelection extends Component {
  render() {
    const loggedInUser = this.props?.user;
    console.log('loggg', loggedInUser?.role);
    return (
      <>
        {loggedInUser &&
        (loggedInUser?.role == 'User' || loggedInUser.role == 'Guest') ? (
          <UserStack initialRoute={undefined} />
        ) :
         loggedInUser && loggedInUser?.role == 'Vendor' ? (
          <VendorStack />
        ) : (
          <AuthNavigation initialRoute={undefined} />
        )}
      </>
    );
  }
}

function mapStateToProps({authReducer: {user, userType}}) {
  return {
    user,
    userType,
  };
}
const actions = {loginUser, setUserType};

export default connect(mapStateToProps, actions)(RoleSelection);
