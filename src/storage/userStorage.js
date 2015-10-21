import ObjectStorage from 'storage/objectStorage';

var user_key_name = 'manual_app_user';

var userStorage = {
  
  removeUser: function () {
    ObjectStorage.remove(user_key_name);
  },

  setUser: function(user) {
  	ObjectStorage.set(user_key_name, user);
  },

  getUser: function () {
    return ObjectStorage.get(user_key_name);
  }

};

export default userStorage;