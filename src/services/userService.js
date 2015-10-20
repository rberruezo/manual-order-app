var math = require('mathjs');

var mockUsers = [
  { email: 'ramiro.berruezo@graion.com', pass: 'password' },
  { email: 'un.email@gmail.com', pass: '1235' },
  { email: 'a@a.com', pass: '1234' }
];

var userService = {
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
            userService.setUserEmail(user.email);
            userService.setUserToken(mockResponse.user_token);
            resolve(mockResponse);
          }
        });

        reject("Error: Invalid user or password");

      }, 250);
    });
  },

  logoutUser: function () {
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_token');
  },

  loggedUser: function() {
    return localStorage.getItem('user_email');
  },

  isLoggedIn: function() {
    return localStorage.getItem('user_email') != null;
  },

  setUserEmail: function(email) {
    localStorage.setItem('user_email', email);
  },

  getUserEmail: function() {
    return localStorage.getItem('user_email');
  },

  setUserToken: function(token) {
    localStorage.setItem('user_token', token);
  },

  getUserToken: function() {
    return localStorage.getItem('user_token');
  },

  isUserTokenSet: function() {
    return localStorage.getItem('user_token') != null;
  }
};

export default userService;