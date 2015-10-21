var userLocalStorage = {
  
  logoutUser: function () {
    localStorage.removeItem('user');
  },

  persistUser: function(user) {
    localStorage.setItem('user', JSON.stringify(user));
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

export default userLocalStorage;