import {API_BASE_URL, API_SIGN_IN_URN} from 'constants/api';
import Mocks from 'mocks/mocks';
import Utilities from 'utilities/utilities';
import request from 'superagent';

var authService = {

  loginUser: function (requestData) {
    return new Promise(function (resolve, reject) {
    	request
				.post(Utilities.produceUri(API_BASE_URL, API_SIGN_IN_URN))
  			.send(requestData)
				.end(function (err, res) {
					var response = JSON.parse(res.text);
					if (err === null) {
						delete requestData.app_token;
						console.log(res);
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