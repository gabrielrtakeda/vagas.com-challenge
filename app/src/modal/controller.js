module.exports = function($sce, $rootScope, $scope, videoDataHandlerService) {
  var self = this;
  self.video = {
    width: 535,
    height: 300,
    description: undefined,
    publishedAt: undefined,
    src: undefined,
    thumbnail: undefined,
    title: undefined,
    viewCount: undefined
  };
  self.viewCount = 'qqq';

  $rootScope.$on('modal.data', (e, data) => {
    self.video.description  = $sce.trustAsHtml(data.description);
    self.video.publishedAt  = moment(data.publishedAt).format('DD [de] MM [de] YYYY');
    self.video.src          = $sce.trustAsResourceUrl(data.src);
    self.video.thumbnail    = $sce.trustAsResourceUrl(data.thumbnail);
    self.video.title        = data.title;
    self.video.viewCount    = data.viewCount;
  });
};
