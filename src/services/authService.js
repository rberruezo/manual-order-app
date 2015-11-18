import {API_SIGN_IN_URL} from 'constants/api';
import Mocks from 'mocks/mocks';

var request = require('superagent');

var authService = {
  loginUser: function (requestData) {
    return new Promise(function (resolve, reject) {
    	request
				.post(API_SIGN_IN_URL)
  			.send(requestData)
				.end(function (err, res) {
					var response = JSON.parse(res.text);
					if (err === null) {
						delete requestData.app_token;
						/* MOCKED */
						var mockRes = Mocks.login(requestData);
						response.user_token = mockRes.user_token;
						response.status = mockRes.status;
						/**********/
	          resolve(response);
					} else {
						reject(response.error);
					}
			});
    });
  },

  logoutUser: function () {
  	console.log(logoutUser);
  }

};

export default authService;