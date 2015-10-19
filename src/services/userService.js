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
        mockUsers.map(function(mockUser) {
          if (user.email == mockUser.email && user.pass == mockUser.pass) {
            localStorage.setItem('email', user.email);
            resolve({status: 'OK'});
          }
        });
        reject("Error: Invalid user or password");
      }, 250);
    });
  },

  logoutUser: function () {
    localStorage.removeItem('email');
  },

  loggedUser: function() {
    return localStorage.getItem('email');
  },

  isLoggedIn: function() {
    return localStorage.getItem('email') != null;
  },

  setUserToken: function(token) {
    localStorage.setItem('token', token);
  },

  getUserToken: function() {
    return localStorage.getItem('token');
  }
};

export default userService;