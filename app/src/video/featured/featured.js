require('./featured.styl');

module.exports = angular.module('video.featured', [])
  .service('featuredService', require('./featuredService'))
  .controller('FeaturedController', require('./featuredController'))
;
