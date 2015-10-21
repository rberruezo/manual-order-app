var userLocalStorage = {
  
  logoutUser: function () {
    localStorage.removeItem('user');
  },

  getPersistedUserEmail: function() {
    return userLocalStorage.getPersistedUserAttribute('email');
  },

  getPersistedUserToken: function() {
    return userLocalStorage.getPersistedUserAttribute('token');
  },

  isLoggedIn: function() {
    return userLocalStorage.getPersistedUserToken() != null;
  },

  persistUserAttribute: function(attribute, value) {
    var user = userLocalStorage.getPersistedUser();
    user[attribute] = value;
    localStorage.setItem('user', JSON.stringify(user));
  },

  getPersistedUserAttribute: function(attribute) {
    var user = userLocalStorage.getPersistedUser();
    if (user[attribute] == undefined) {
      return null;
    }
    return user[attribute];
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