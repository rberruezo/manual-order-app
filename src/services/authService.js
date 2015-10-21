var math = require('mathjs');

var mockUsers = [
  { email: 'ramiro.berruezo@graion.com', pass: 'password' },
  { email: 'un.email@gmail.com', pass: '1235' },
  { email: 'a@a.com', pass: '1234' }
];

var authService = {
  loginUser: function (user) {

    console.log('Try to login...');
    console.log(user);

    return new Promise(function (resolve, reject) {
      setTimeout(function () {

        // TODO: Call to login service with user object and APP_TOKEN

        mockUsers.map(function(mockUser) {
          if (user.email == mockUser.email && user.pass == mockUser.pass) {
            var mockResponse = {
              user_token: math.randomInt(10000, 99999),
              status: 'OK'
            };
            resolve(mockResponse);
          }
        });

        reject("Error: Invalid user or password");

      }, 250);
    });
  },

  logoutUser: function () {
  	console.log(logoutUser);
  }
};

export default authService;