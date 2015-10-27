var math = require('mathjs');

var mockedUsers = [
  { email: 'ramiro.berruezo@graion.com', pass: 'password' },
  { email: 'un.email@gmail.com', pass: '1235' },
  { email: 'a@a.com', pass: '1234' }
];

var mockedOrders = {
	701: {"created_at": 1410231218, "order_id": 701, "consumer_name": "Victoria Sarappa", "item_count": 3 },
	702: {"created_at": 1510231105, "order_id": 702, "consumer_name": "Juan Rojo", "item_count": 5 },
	703: {"created_at": 1306231749, "order_id": 703, "consumer_name": "Clara Orchow", "item_count": 2 },
	704: {"created_at": 1508181228, "order_id": 704, "consumer_name": "Alan Pieroni", "item_count": 1 },
	705: {"created_at": 1511051238, "order_id": 705, "consumer_name": "Ivan Levin", "item_count": 9 },
	706: {"created_at": 1503150753, "order_id": 706, "consumer_name": "Matias Camacho", "item_count": 4 },
	707: {"created_at": 1511182302, "order_id": 707, "consumer_name": "Marcia Perdomo", "item_count": 8 },
	708: {"created_at": 1511181818, "order_id": 708, "consumer_name": "Nicolas Vaamonde", "item_count": 6 },
	709: {"created_at": 1511180729, "order_id": 709, "consumer_name": "Augusto Rodriguez", "item_count": 5 }
};

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

  getAllowedOrders: function(user_token) {
  	return {
  		orders: mockedOrders,
  		status: 200
  	};
	},

	removeOrder: function(order_id, user_token) {
		delete mockedOrders[order_id];
		return {status: 200};
	},

	getOrder: function(order_id, user_token) {
		var data = mockedOrders[order_id];
		data.status = 7;
		data.extra = 'extra-information';
		return {
			order: data,
			status: 200
		};
	}

};

export default mocks;