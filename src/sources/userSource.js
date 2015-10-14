var mockData = {
  status: 'OK'
};

var mockUsers = [
  { email: 'ramiro.berruezo@graion.com', pass: 'password' },
  { email: 'un.email@gmail.com', pass: '1235' }
];

var userSource = {
  fetch: function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(mockData);
      }, 250);
    });
  },

  loginUser: function (user) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        mockUsers.map(function(mockUser) {
          if (user.email == mockUser.email && user.pass == mockUser.pass) {
            resolve({status: 'OK'});
          }
        });
        reject("Error: Invalid user or password");
      }, 250);
    });
  }
};

export default userSource;