require('./search.styl');

module.exports = angular.module('search', [])
  .service('searchService', require('./searchService'))
  .controller('SearchController', require('./searchController'))
;
