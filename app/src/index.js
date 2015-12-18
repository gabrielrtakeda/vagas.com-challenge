module.exports = angular
  .module('app', [
    // 3rd party
    // 'lumx',
    require('angular-route'),
    require('angular-animate'),
    require('angular-ui-bootstrap'),

    // Modules
    require('./session-storage/index').name,
    require('./youtube/index').name,
    require('./util/index').name,
    require('./video/video').name,
    require('./modal/index').name,
    require('./layouts').name,
    require('./video-thumbnail/index').name,
    require('./more-videos/index').name,
    require('./number/index').name,
    require('./videos/index').name,
    require('./search/index').name,
    require('./video-search-bar/index').name
  ])

  .config([
    '$routeProvider',
    '$locationProvider',
    '$sceDelegateProvider',
    function(
      $routeProvider,
      $locationProvider,
      $sceDelegateProvider
    ) {
      $sceDelegateProvider.resourceUrlWhitelist(
        require('./config/resource-url').whitelist
      );
      require('./config/route-provider')($routeProvider);
      $locationProvider.html5Mode(true);
    }
  ])
;
