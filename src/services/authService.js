var mockAuthResponse = {
	user_token: '54636',
	status: 'OK'
}

var authService = {
  authenticateApp: function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(mockAuthResponse);
      }, 250);
    });
  }
};

export default authService;