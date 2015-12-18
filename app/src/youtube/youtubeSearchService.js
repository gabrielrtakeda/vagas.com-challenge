module.exports = function($http) {
  var self = this;

  var privAttrs = {
    errorMessages: {
      get: 'Erro ao requisitar a Lista de mais vídeos',
      getNextPage: 'Erro ao requisitar a próxima página da Lista de mais vídeos',
      getPrevPage: 'Erro ao requisitar a página anterior da Lista de mais vídeos'
    },
    url: youtube.api
      .concat('/search/')
      .concat('?key=' + youtube.key)
      .concat('&channelId=' + youtube.channelId),
    params: '',
    q: '',
    nextPageToken: undefined,
    prevPageToken: undefined
  };

  // private
  var priv = {
    getUrl: () => {
      return privAttrs.url
        .concat(self.getQ())
        .concat(privAttrs.params);
    },

    getNextPageUrl: () => {
      return priv.getUrl()
        .concat('&pageToken=' + privAttrs.nextPageToken);
    },

    getPrevPageUrl: () => {
      return priv.getUrl()
        .concat('&pageToken=' + privAttrs.prevPageToken);
    }
  };

  // setters & getters
  self.getQ = () => { return self.hasQ() ? privAttrs.q : ''; };
  self.hasQ = () => { return privAttrs.q.replace('&q=', '').length > 0; };
  self.setQ = (q) => {
    privAttrs.q = '&q=' + q;
    return self;
  };

  self.getParams = () => { return privAttrs.params; };
  self.setParams = (params) => {
    privAttrs.params = params;
    return self;
  };

  self.getNextPageToken = () => { return privAttrs.nextPageToken; };
  self.setNextPageToken = (pageToken) => {
    privAttrs.nextPageToken = pageToken;
    return self;
  };

  self.getPrevPageToken = () => { return privAttrs.prevPageToken; };
  self.setPrevPageToken = (pageToken) => {
    privAttrs.prevPageToken = pageToken;
    return self;
  };

  // public
  self.get = (callback) => {
    $http({
      method: 'GET',
      url: priv.getUrl()
    })
    .success((data) => { callback(data); })
    .error(() => { console.error(privAttrs.errorMessages.get); });
  };

  self.getNextPage = (callback) => {
    $http({
      method: 'GET',
      url: priv.getNextPageUrl()
    })
    .success((data) => { callback(data); })
    .error(() => { console.error(privAttrs.errorMessages.getNextPage); });
  };

  self.getPrevPage = (callback) => {
    $http({
      method: 'GET',
      url: priv.getPrevPageUrl()
    })
    .success((data) => { callback(data); })
    .error(() => { console.error(privAttrs.errorMessages.getPrevPage); });
  };
};
