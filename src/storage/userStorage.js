import ObjectStorage from 'storage/objectStorage';
import {STORAGE_USER_KEY} from 'constants/constants';

var userStorage = {
  
  removeUser: function () {
    ObjectStorage.remove(STORAGE_USER_KEY);
  },

  setUser: function(user) {
  	ObjectStorage.set(STORAGE_USER_KEY, user);
  },

  getUser: function () {
    return ObjectStorage.get(STORAGE_USER_KEY);
  }

};

export default userStorage;