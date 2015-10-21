import {API_SIGN_IN_URL} from 'constants/constants';

var request = require('superagent');
var math = require('mathjs');

var mockedUsers = [
  { email: 'ramiro.berruezo@graion.com', pass: 'password' },
  { email: 'un.email@gmail.com', pass: '1235' },
  { email: 'a@a.com', pass: '1234' }
];

var authService = {
  loginUser: function (user) {
    // console.log('Try to login...');
    // console.log(user);
    return new Promise(function (resolve, reject) {
    	request
				.post(API_SIGN_IN_URL)
  			.send(user)
				.end(function (err, res) {
					if (res.status === 404) {
						reject('Service not found');
					} else {
						// resolve(JSON.parse(res.text));
						// console.log(JSON.parse(res.body.data));
						var mockedResponse = authService.mockedResponse(user);
						// console.log(mockedResponse);
						if (mockedResponse.status == 200) {
	            resolve(mockedResponse);
	          } else {
	          	reject('Error: Invalid user or password');
	          }
					}
			});
    });
  },

  logoutUser: function () {
  	console.log(logoutUser);
  },

  mockedResponse: function(user) {
  	for (var i = 0; i < mockedUsers.length; i++) {
		  if (user.email == mockedUsers[i].email && user.pass == mockedUsers[i].pass) {
		    return {
		      user_token: math.randomInt(10000, 99999),
		      status: 200
		    };
		  }
		}
		return {status: 500};		
  }
};

export default authService;