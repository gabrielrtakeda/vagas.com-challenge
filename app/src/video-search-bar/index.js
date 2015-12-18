require('./video-search-bar.styl');

module.exports = angular.module('video-search-bar', [])
  .directive('videoSearchBar', require('./directive'))
;
