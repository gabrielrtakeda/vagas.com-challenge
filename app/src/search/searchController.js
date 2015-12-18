module.exports = function(
  $sce,
  $scope,
  modalService,
  storageService,
  youtubeSearchService,
  youtubeVideosService
) {
  var self = this;

  // model
  self.q = storageService.has('search-bar.q') ?
    JSON.parse(storageService.get('search-bar.q')).q :
    void 0;
  self.list = [];
  self.spinner = false;
  self.finish = false;

  // Youtube API V3 Configuration
  youtubeSearchService.setQ(urlencode(self.q));
  youtubeSearchService.setParams(''
    .concat('&part=id')
    .concat('&order=relevance')
    .concat('&maxResults=12')
  );
  youtubeVideosService.setParams(''
    .concat('&part=snippet,statistics')
  );

  // private
  var priv = {
    addItemList: (item) => {
      self.list.push(item);
      return priv;
    },

    buildItem: (item) => {
      var snippet = item.snippet;
      return {
        description:  nl2br(snippet.description),
        publishedAt:  snippet.publishedAt,
        src:          $sce.trustAsResourceUrl(youtube.embed + item.id),
        thumbnail:    $sce.trustAsResourceUrl(snippet.thumbnails.medium.url),
        title:        snippet.title,
        viewCount:    item.statistics.viewCount
      };
    },

    extractIds: (items) => {
      return items.map((item) => { return item.id.videoId; }).toString();
    },

    clearList: () => {
      self.list = [];
    },

    get: (listId) => {
      self.spinner = true;
      self.finish = (listId.nextPageToken === void 0);
      youtubeSearchService.setNextPageToken(listId.nextPageToken);
      youtubeSearchService.setPrevPageToken(listId.prevPageToken);

      youtubeVideosService.setIds(priv.extractIds(listId.items));
      youtubeVideosService.get((list) => {
        list.items.map((item) => { priv.addItemList(priv.buildItem(item)); });
        self.spinner = false;
      });
    }
  };

  // public
  self.loadMoreVideos = () => {
    self.spinner = true;
    youtubeSearchService.getNextPage(priv.get);
  };

  self.modal = () => { modalService.show(data); };

  // init
  youtubeSearchService.get(priv.get);

  $scope.$on('search-bar.q', (e, q) => {
    priv.clearList();
    self.q = q;

    youtubeSearchService.setQ(urlencode(self.q));
    youtubeSearchService.get(priv.get);
  });
};
