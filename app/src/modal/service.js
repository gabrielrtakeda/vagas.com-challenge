module.exports = function($rootScope) {
  var self = this;

  self.show = (data) => {
    $rootScope.$broadcast('modal.data', data);
  };
};
