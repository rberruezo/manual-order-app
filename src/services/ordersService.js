import {API_GET_ORDERS_URL, API_REMOVE_ORDER_URL, API_GET_ORDER_URL} from 'constants/constants';
import LoginStore from 'stores/loginStore';
import Mocks from 'mocks/mocks';

var request = require('superagent');


var ordersService = {
  getAllowedOrders: function () {
  	var requestData = {
  		userToken: ordersService.getUserToken()
  	}
    return new Promise(function (resolve, reject) {
    	request
				.post(API_GET_ORDERS_URL)
  			.send(requestData)
				.end(function (err, res) {
					if (res.status === 404) {
						reject('Service not found');
					} else {
						var response = Mocks.getAllowedOrders(requestData.userToken);
						if (response.status == 200) {
	            resolve(response);
	          } else {
	          	reject('Error: Invalid user or password');
	          }
					}
			});
    });
  },

  getOrder: function (requestData) {
  	requestData.userToken = ordersService.getUserToken();
    return new Promise(function (resolve, reject) {
    	request
				.post(API_GET_ORDER_URL)
  			.send(requestData)
				.end(function (err, res) {
					if (res.status === 404) {
						reject('Service not found');
					} else {
						var response = Mocks.getOrder(requestData.orderId, requestData.userToken);
						if (response.status == 200) {
	            resolve(response);
	          } else {
	          	reject('Error: Invalid user or password');
	          }
					}
			});
    });
  },

  dequeueOrder: function (requestData) {
  	requestData.userToken = ordersService.getUserToken();
    return new Promise(function (resolve, reject) {
    	request
				.post(API_GET_ORDER_URL)
  			.send(requestData)
				.end(function (err, res) {
					if (res.status === 404) {
						reject('Service not found');
					} else {
						var response = Mocks.dequeueOrder(requestData.orderId, requestData.userToken);
						if (response.status === 404) {
							response.errorMessage = 'Service not found';
							alert(response.errorMessage);
						}
						resolve(response);
					}
			});
    });
  },

  submitItemsStatus: function (requestData) {
  	requestData.userToken = ordersService.getUserToken();
  	console.log('submitItemsStatus');
  	console.log(requestData);
    return new Promise(function (resolve, reject) {
    	request
				.post(API_GET_ORDER_URL)
  			.send(requestData)
				.end(function (err, res) {
					if (res.status === 404) {
						res.errorMessage = 'Service not found';
					}
          resolve(res);
			});
    });
  },

  submitOrderStatus: function (requestData) {
  	requestData.userToken = ordersService.getUserToken();
  	console.log('submitOrderStatus');
  	console.log(requestData);
    return new Promise(function (resolve, reject) {
    	request
				.post(API_GET_ORDER_URL)
  			.send(requestData)
				.end(function (err, res) {
					if (res.status !== 404) {
						res.errorMessage = 'Service not found';
					}
          resolve(res);
			});
    });
  },

	getUserToken: function() {
		return LoginStore.getState().user.token;
	}

};

export default ordersService;