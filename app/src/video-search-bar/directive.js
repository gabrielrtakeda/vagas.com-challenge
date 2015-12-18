module.exports = function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/video-search-bar',
    scope: {},
    controller: require('./searchBarController'),
    controllerAs: 'searchBar',
    link: function(scope, elm, attrs, ctrl) {
      elm.find('.glyphicon-search').on('click', () => {
        elm.find('.q').focus();
      });
    }
  };
};
