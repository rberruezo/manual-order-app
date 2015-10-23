var math = require('mathjs');

var mockedUsers = [
  { email: 'ramiro.berruezo@graion.com', pass: 'password' },
  { email: 'un.email@gmail.com', pass: '1235' },
  { email: 'a@a.com', pass: '1234' }
];

var fakeData = [
	{"createdAt": 1410231218, "order_id": 1, "consumer_name": "Victoria Sarappa", "item_count": 3 },
	{"createdAt": 1510231105, "order_id": 2, "consumer_name": "Juan Rojo", "item_count": 5 },
	{"createdAt": 1306231749, "order_id": 3, "consumer_name": "Clara Orchow", "item_count": 2 },
	{"createdAt": 1508181228, "order_id": 4, "consumer_name": "Alan Pieroni", "item_count": 1 },
	{"createdAt": 1511051238, "order_id": 5, "consumer_name": "Ivan Levin", "item_count": 9 },
	{"createdAt": 1503150753, "order_id": 6, "consumer_name": "Matias Camacho", "item_count": 4 },
	{"createdAt": 1511182302, "order_id": 7, "consumer_name": "Marcia Perdomo", "item_count": 8 },
	{"createdAt": 1511181818, "order_id": 8, "consumer_name": "Nicolas Vaamonde", "item_count": 6 },
	{"createdAt": 1511180729, "order_id": 9, "consumer_name": "Augusto Rodriguez", "item_count": 5 }
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
  	return {
  		data: fakeData,
  		status: 200
  	};
	}

};

export default mocks;