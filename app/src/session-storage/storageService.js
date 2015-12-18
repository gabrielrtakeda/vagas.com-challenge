module.exports = function($window) {
  var self = this;

  self.set = (key, data) => {
    if (typeof data === 'string') data = JSON.parse(data);
    data.sessionExpire = moment().add(15, 'm').format('X');

    $window.sessionStorage.setItem(key, JSON.stringify(data));
    return self;
  };

  self.get = (key, data) => {
    return $window.sessionStorage.getItem(key);
  };

  self.has = (key) => {
    var item = $window.sessionStorage.getItem(key);

    if (item !== null) {
      if (self.isValidExpirationDate(item)) {
        return true;
      }
      else {
        $window.sessionStorage.removeItem(key);
        return false;
      }
    }
    return false;
  };

  self.hasChain = (keyArray) => {
    for (var key of keyArray) {
      if (!self.has(key))
        return false;
    }
    return true;
  };

  self.isValidExpirationDate = (item) => {
    var unixTimestamp = JSON.parse(item).sessionExpire;
    return parseInt(unixTimestamp) > parseInt(moment().format('X'));
  };
};
