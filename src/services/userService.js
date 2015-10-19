import AuthActions from 'actions/authActions';

var mockData = {
  status: 'OK'
};

var mockUsers = [
  { email: 'ramiro.berruezo@graion.com', pass: 'password' },
  { email: 'un.email@gmail.com', pass: '1235' },
  { email: 'a@a.com', pass: '1234' }
];

var userService = {
  loginUser: function (user) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {

        // TODO: Call to login service with postData
        var postData = {
          email: user.email,
          pass: user.pass,
          token: userService.getUserToken()
        }

        mockUsers.map(function(mockUser) {
          if (user.email == mockUser.email && user.pass == mockUser.pass) {
            localStorage.setItem('user_email', user.email);
            resolve({status: 'OK'});
          }
        });

        reject("Error: Invalid user or password");

      }, 250);
    });
  },

  logoutUser: function () {
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_token');
    AuthActions.authenticateApp();
  },

  loggedUser: function() {
    return localStorage.getItem('user_email');
  },

  isLoggedIn: function() {
    return localStorage.getItem('user_email') != null;
  },

  setUserToken: function(token) {
    localStorage.setItem('user_token', token);
  },

  getUserToken: function() {
    return localStorage.getItem('user_token');
  }
};

export default userService;