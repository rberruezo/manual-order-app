import {API_SIGN_IN_URL} from 'constants/apiUrls';
import Mocks from 'mocks/mocks';

var request = require('superagent');

var authService = {
  loginUser: function (requestData) {
    return new Promise(function (resolve, reject) {
    	request
				.post(API_SIGN_IN_URL)
  			.send(requestData)
				.end(function (err, res) {
					if (res.status === 404) {
						reject('Service not found');
					} else {
						delete requestData.app_token;
						var response = Mocks.login(requestData);
						if (response.status == 200) {
	            resolve(response);
	          } else {
	          	reject('Error: Invalid user or password');
	          }
					}
			});
    });
  },

  logoutUser: function () {
  	console.log(logoutUser);
  }

};

export default authService;