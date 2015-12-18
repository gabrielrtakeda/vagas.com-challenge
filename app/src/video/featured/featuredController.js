module.exports = [
  '$sce',
  'featuredService',
  'storageService',
  function (
    $sce,
    featuredService,
    storageService
  ) {
    // Styles
    require('./featured.styl');

    var self = this;
    self.folded = true;
    self.video = {
      width: 535,
      height: 300,
      src: undefined,
      publishedAt: undefined,
      title: undefined,
      description: undefined,
      views: undefined
    };

    self.toggle = () => {
      self.folded = self.folded ? false : true;
    };

    self.setVideoSrc = (id) => {
      self.video.src = youtube.embed + id;
      return self;
    };

    self.setVideoPublishedAt = (publishedAt) => {
      self.video.publishedAt = moment(publishedAt)
        .format('DD [de] MMMM [de] YYYY')
        .toLowerCase();
      return self;
    };

    self.setVideoTitle = (title) => {
      self.video.title = title;
      return self;
    };

    self.setVideoDescription = (description) => {
      self.video.description = $sce.trustAsHtml(nl2br(description));
      return self;
    };

    self.setVideoViews = (views) => {
      self.video.views = commaNumber(views, '.')
        .concat(views !== 1 ? ' views' : ' view');
      return self;
    };

    featuredService.getId((id) => {
      if (id.items.length > 0) {
        var videoId = id.items[0].id.videoId;

        featuredService.getData(videoId, (data) => {
          var currentItem = data.items[0];
          var snippet = currentItem.snippet;
          var statistics = currentItem.statistics;

          self
            .setVideoSrc(videoId)
            .setVideoPublishedAt(snippet.publishedAt)
            .setVideoTitle(snippet.title)
            .setVideoDescription(snippet.description)
            .setVideoViews(statistics.viewCount);
        });
      }
    });
}];
