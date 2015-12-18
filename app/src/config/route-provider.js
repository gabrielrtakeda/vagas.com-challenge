module.exports = ($routeProvider) => {
  $routeProvider
    .when('/', { templateUrl: 'partials/destaques' })
    .when('/destaques', { templateUrl: 'partials/destaques' })
    .when('/videos', { templateUrl: 'partials/videos' })
    .when('/search', { templateUrl: 'partials/search' })
    .otherwise({ redirectTo: '/' });
};
