import React from 'react';
import {RouteHandler} from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from 'stores/loginStore';
import Login from 'components/login';
import Home from 'components/home';
import UserService from 'services/userService'; 

@connectToStores
class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [LoginStore];
  }

  static getPropsFromStores(props) {
    return LoginStore.getState();
  }

  render() {
    if (UserService.isLoggedIn()) {
      return (<Home />)
    } else {
      return (<Login />)
    }
    <RouteHandler/>
  }

}

export default Main;
