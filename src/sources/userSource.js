var mockData = {
  status: 'OK'
};

var userSource = {
  fetch: function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(mockData);
      }, 250);
    });
  }
};

export default userSource;