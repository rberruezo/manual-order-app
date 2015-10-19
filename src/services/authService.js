var math = require('mathjs');

var authService = {
  authenticateApp: function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
				var mockAuthResponse = {
					user_token: math.randomInt(10000, 99999),
					status: 'OK'
				};
        resolve(mockAuthResponse);
      }, 250);
    });
  }
};

export default authService;