import {API_GET_ORDERS_URL} from 'constants/constants';
import LoginStore from 'stores/loginStore';
import Mocks from 'mocks/mocks';

var request = require('superagent');


var ordersService = {
  getAllowedOrders: function () {
  	var requestData = {
  		user_token: ordersService.getUserToken()
  	}
    return new Promise(function (resolve, reject) {
    	request
				.post(API_GET_ORDERS_URL)
  			.send(requestData)
				.end(function (err, res) {
					if (res.status === 404) {
						reject('Service not found');
					} else {
						var response = Mocks.getAllowedOrders(requestData.user_token);
						if (response.status == 200) {
	            resolve(response);
	          } else {
	          	reject('Error: Invalid user or password');
	          }
					}
			});
    });
  },

  removeOrder: function (requestData) {
  	requestData.user_token = ordersService.getUserToken();
    return new Promise(function (resolve, reject) {
    	request
				.post(API_GET_ORDERS_URL)
  			.send(requestData)
				.end(function (err, res) {
					if (res.status === 404) {
						reject('Service not found');
					} else {
						var response = Mocks.removeOrder(requestData.order_id, requestData.user_token);
						if (response.status == 200) {
	            resolve(response);
	          } else {
	          	reject('Error: Invalid user or password');
	          }
					}
			});
    });
  },

	getUserToken: function() {
		return LoginStore.getState().user.token;
	}

};

export default ordersService;