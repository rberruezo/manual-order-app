import {API_GET_ORDERS_URL} from 'constants/constants';
import Mocks from 'mocks/mocks';

var request = require('superagent');

var ordersService = {
  getAllowedOrders: function (requestData) {
    return new Promise(function (resolve, reject) {
    	request
				.post(API_GET_ORDERS_URL)
  			.send(requestData)
				.end(function (err, res) {
					if (res.status === 404) {
						reject('Service not found');
					} else {
						var response = Mocks.getFakeData();
						if (response.status == 200) {
	            resolve(response);
	          } else {
	          	reject('Error: Invalid user or password');
	          }
					}
			});
    });
  }

};

export default ordersService;