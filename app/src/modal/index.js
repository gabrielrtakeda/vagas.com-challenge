require('./modal.styl');

module.exports = angular.module('modal', [])
  .service('modalService', require('./service'))
  .directive('modal', require('./directive'))
;
