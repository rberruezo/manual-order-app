var math = require('mathjs');

var mockedUsers = [
  { email: 'ramiro.berruezo@graion.com', pass: 'password' },
  { email: 'un.email@gmail.com', pass: '1235' },
  { email: 'a@a.com', pass: '1234' }
];

var fakeData = [
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

var mocks = {

	login: function(user) {
  	for (var i = 0; i < mockedUsers.length; i++) {
		  if (user.email == mockedUsers[i].email && user.pass == mockedUsers[i].pass) {
		    return {
		      user_token: 'UT-' + math.randomInt(10000, 99999),
		      status: 200
		    };
		  }
		}
		return {status: 500};		
  },

  getFakeData: function() {
  	return fakeData;
	}

};

export default mocks;