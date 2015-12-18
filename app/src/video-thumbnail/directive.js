module.exports = function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/video-thumbnail',
    scope: {
      description: '@description',
      publishedAt: '@publishedAt',
      src: '@src',
      thumbnail: '@thumbnail',
      title: '@title',
      viewCount: '@viewCount'
    },
    controller: require('./controller'),
    controllerAs: 'videoThumbnail',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.updateData(attrs);
    }
  };
};
