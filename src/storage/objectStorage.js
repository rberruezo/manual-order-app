var objectStorage = {

  remove: function (key) {
    localStorage.removeItem(key);
  },

  set: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get: function (key) {
    var json = localStorage.getItem(key);
    var object = (json == null) ? {} : JSON.parse(json);
    return object;
  }
  
};

export default objectStorage;