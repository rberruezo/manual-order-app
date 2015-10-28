import {PENDING_ORDER_IS_BEING_PLACED} from 'constants/orderStatus';

var math = require('mathjs');

var mockedUsers = [
  { email: 'ramiro.berruezo@graion.com', pass: 'password' },
  { email: 'un.email@gmail.com', pass: '1235' },
  { email: 'a@a.com', pass: '1234' }
];

var mockedOrders = {
	701: {"createdAt": 1410231218, "orderId": 701, "consumerName": "Victoria Sarappa", "itemCount": 3, "status": 11 },
	702: {"createdAt": 1510231105, "orderId": 702, "consumerName": "Juan Rojo", "itemCount": 5, "status": 11 },
	703: {"createdAt": 1306231749, "orderId": 703, "consumerName": "Clara Orchow", "itemCount": 2, "status": 11 },
	704: {"createdAt": 1508181228, "orderId": 704, "consumerName": "Alan Pieroni", "itemCount": 1, "status": 11 },
	705: {"createdAt": 1511051238, "orderId": 705, "consumerName": "Ivan Levin", "itemCount": 9, "status": 11 },
	706: {"createdAt": 1503150753, "orderId": 706, "consumerName": "Matias Camacho", "itemCount": 4, "status": 11 },
	707: {"createdAt": 1511182302, "orderId": 707, "consumerName": "Marcia Perdomo", "itemCount": 8, "status": 11 },
	708: {"createdAt": 1511181818, "orderId": 708, "consumerName": "Nicolas Vaamonde", "itemCount": 6, "status": 11 },
	709: {"createdAt": 1511180729, "orderId": 709, "consumerName": "Augusto Rodriguez", "itemCount": 5, "status": 11 }
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
		var order = mockedOrders[order_id];
		return {
			order: order,
			status: 200
		};
	},

	dequeueOrder: function(order_id, user_token) {
		mockedOrders[order_id].status = PENDING_ORDER_IS_BEING_PLACED;
		var order = mockedOrders[order_id];
		order.extra = 'extra-information';
		return {
			order: order,
			status: 200
		};
	}

};

export default mocks;