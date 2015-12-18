module.exports = angular.module('video.fluid', [])
  .directive('fluidVideo', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/fluid-video',
      scope: {
        width: '@width',
        height: '@height',
        src: '@src'
      },
      link: function(scope, elm, attrs, ctrl) {
        var $ = jQuery;
        var container = elm.find('.fluid-video-container');
        var video = elm.find('.fluid-video');
        video
          .data('ratio', attrs.height / attrs.width)
          .removeAttr('height')
          .removeAttr('width');

        $(window).resize(function() {
            var newWidth = container.width();
            video
              .width(newWidth)
              .height(newWidth * video.data('ratio'));
        }).resize();
      }
    };
  })
;
