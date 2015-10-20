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
    localStorage.removeItem('user');
  },

  setUserEmail: function(email) {
    userService.persistUserAttribute('email', email);
  },

  getUserEmail: function() {
    return userService.getPersistedUserAttribute('email');
  },

  setUserToken: function(token) {
    userService.persistUserAttribute('token', token);
  },

  getUserToken: function() {
    return userService.getPersistedUserAttribute('token');
  },

  isLoggedIn: function() {
    return userService.getUserToken() != null;
  },

  persistUserAttribute: function(attribute, value) {
    var user = userService.getPersistedUser();
    user[attribute] = value;
    localStorage.setItem('user', JSON.stringify(user));
  },

  getPersistedUserAttribute: function(attribute) {
    var user = userService.getPersistedUser();
    if (user[attribute] == undefined) {
      return null;
    }
    return user[attribute];
  },

  getPersistedUser: function () {
    var user_json = localStorage.getItem('user');
    console.log(user_json);
    if (user_json == null) {
      return {};
    }
    return JSON.parse(user_json);
  }
};

export default userService;