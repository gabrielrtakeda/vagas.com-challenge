module.exports = angular.module('youtube', [])
  .service('youtubeVideosService', require('./youtubeVideosService'))
  .service('youtubeSearchService', require('./youtubeSearchService'))
;
