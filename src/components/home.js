import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from 'stores/loginStore';
import LoginActions from 'actions/loginActions';
import Mocks from 'mocks/mocks';

require('../styles/navbar.styl');

var Griddle = require('griddle-react');

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
				<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
				<script src="//fb.me/react-0.13.2.js"></script>
				<script src="//fb.me/JSXTransformer-0.13.2.js"></script>
				<script type="text/javascript" src="scripts/griddle.js"></script>

				<Griddle results={Mocks.getFakeData()} tableClassName="table" showFilter={true} showSettings={true} columns={["name", "city", "country"]}/>

			</div>
    );
  }

  handleLogout = evt => {
    evt.preventDefault();
    LoginActions.logoutUser();
  }
}

export default Home;

