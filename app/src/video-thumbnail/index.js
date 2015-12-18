require('./video-thumbnail.styl');

module.exports = angular.module('video-thumbnail', [])
  .directive('videoThumbnail', require('./directive'))
;
