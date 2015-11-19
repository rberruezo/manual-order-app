import {API_BASE_URL, API_SIGN_IN_URN} from 'constants/api';
import Utilities from 'utilities/utilities';
import request from 'superagent';

var authService = {

  loginUser: function (requestData) {
    return new Promise(function (resolve, reject) {
    	request
				.post(Utilities.produceUri(API_BASE_URL, API_SIGN_IN_URN))
  			.send(requestData)
				.end(function (err, res) {
					if (err === null) {
						delete requestData.app_token;
						var response = {
							email: JSON.parse(res.text).email,
							user_token: res.header['x-auth-token']
						}
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