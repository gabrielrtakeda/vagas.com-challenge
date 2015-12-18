module.exports = ['$window', function($window) {
  return {
    templateUrl: 'directives/modal',
    restrict: 'E',
    scope: {},
    controller: require('./controller'),
    controllerAs: 'modalController',
    link: function (scope, element, attrs, ctrl) {
      var _modal = element.children('#modal');
      var _window = $($window);

      scope.$on('modal.data', (e, data) => { _modal.modal('show'); });
      _modal.on('shown.bs.modal', () => { _window.resize(); });
    }
  };
}];
