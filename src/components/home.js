import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from 'stores/loginStore';
import LoginActions from 'actions/loginActions';

@connectToStores
class Home extends React.Component {
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
    return (
    	<button className="login-enter" onClick={this.handleLogout}>Log out</button>
    );
  }

  handleLogout = evt => {
    evt.preventDefault();
    LoginActions.logoutUser();
  }
}

export default Home;
