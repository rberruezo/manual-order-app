import React from 'react';
import {RouteHandler} from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from 'stores/loginStore';
import Login from 'components/login';
import Home from 'components/home';

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
    if (!this.isLoggedIn()) {
      return (<Login />)
    } else {
      return (<Home />)
    }
    <RouteHandler/>
  }

	isLoggedIn() {
		// console.log('Main.js -- isLoggedIn - user');
		// console.log(LoginStore.getState().user);
    return LoginStore.getState().is_logged_in;
  }

}

export default Main;
