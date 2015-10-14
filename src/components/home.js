import React from 'react';
import LoginActions from 'actions/loginActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<nav>
        <ul>
	        <li> <button>Home</button> </li>
	        <li> <button className="login-enter" onClick={this.handleLogout}>Log out</button> </li>
	      </ul>
      </nav>
    );
  }

  handleLogout = evt => {
    evt.preventDefault();
    LoginActions.logoutUser();
  }
}

export default Home;
