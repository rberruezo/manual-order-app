import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from 'stores/loginStore';
import LoginActions from 'actions/loginActions';
import OrderTable from 'components/ordersTable';

require('../styles/navbar.styl');

@connectToStores
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  	this.setState(this.props);
  }

  static getStores(props) {
    return [LoginStore];
  }

  static getPropsFromStores(props) {
    return LoginStore.getState();
  }

  render() {
    return (
    	<div>
				<nav>
	        <ul>
		        <li>
							Hello, {this.state.user.email}
		        </li>
		        <div className="logout-button">
		        	<button className="login-enter" onClick={this.handleLogout}>Log out</button>
		        </div>
		      </ul>
	      </nav>
				<OrderTable/>
			</div>
    );
  }

  handleLogout = evt => {
    evt.preventDefault();
    LoginActions.logoutUser();
  }
}

export default Home;

