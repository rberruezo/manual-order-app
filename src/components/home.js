import React from 'react';
import LoginActions from 'actions/loginActions';
import UserService from 'services/userService';

require('../styles/navbar.styl');

var Griddle = require('griddle-react');

var fakeData =  [
	{"id": 0, "name": "Mayer Leonard", "city": "London", "country": "United Kingdom", "favoriteNumber": 7 },
	{"id": 1, "name": "Victoria Sarappa", "city": "Rosario", "country": "Argentina", "favoriteNumber": 3 },
	{"id": 2, "name": "Juan Rojo", "city": "New York", "country": "USA", "favoriteNumber": 5 },
	{"id": 3, "name": "Clara Orchow", "city": "Buenos Aires", "country": "Argentina", "favoriteNumber": 2 },
	{"id": 4, "name": "Alan Pieroni", "city": "Krakow", "country": "Poland", "favoriteNumber": 1 },
	{"id": 5, "name": "Ivan Levin", "city": "Madrid", "country": "Spain", "favoriteNumber": 9 },
	{"id": 6, "name": "Matias Camacho", "city": "Moscow", "country": "Rusia", "favoriteNumber": 4 },
	{"id": 7, "name": "Marcia Perdomo", "city": "Beijing", "country": "China", "favoriteNumber": 8 },
	{"id": 8, "name": "Nicolas Vaamonde", "city": "San Fransisco", "country": "USA", "favoriteNumber": 6 },
	{"id": 9, "name": "Augusto Rodriguez", "city": "Brasilia", "country": "Brazil", "favoriteNumber": 5 }
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.email = UserService.loggedUser();
  }

  render() {
    return (
    	<div>
				<nav>
	        <ul>
		        <li>
		        	Hello, {this.email}
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

				<Griddle results={fakeData} tableClassName="table" showFilter={true} showSettings={true} columns={["name", "city", "country"]}/>

			</div>
    );
  }

  handleLogout = evt => {
    evt.preventDefault();
    LoginActions.logoutUser();
  }
}

export default Home;

