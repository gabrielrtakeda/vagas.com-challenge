module.exports = function($http) {
  var self = this;

  self.errorMessages = {
    list: 'Erro ao requisitar a Lista de mais vídeos',
    listId: 'Erro ao requisitar ID\'s da Lista de mais vídeos',
    nextPageList: 'Erro ao requisitar a próxima página da Lista de busca',
    nextPageIdList: 'Erro ao requisitar ID\'s da próxima página da Lista de busca',
    prevPageList: 'Erro ao requisitar a página anterior da Lista de busca',
    prevPageIdList: 'Erro ao requisitar ID\'s da página anterior da Lista de busca'
  };

  // private
  var priv = {
    getListUrl: (ids) => {
      return youtube.api
        .concat('/videos/')
        .concat('?key=AIzaSyAJl2-4gdP8Y9S_0-oriBC-Wi12c5k3ijo')
        .concat('&part=snippet,statistics')
        .concat('&id=' + ids);
    },

    getListIdUrl: (q) => {
      return youtube.api
        .concat('/search/')
        .concat('?key=AIzaSyAJl2-4gdP8Y9S_0-oriBC-Wi12c5k3ijo')
        .concat('&channelId=UCRPWH2YmwgbVGz6zJZG1afA')
        .concat('&part=id')
        .concat('&q=' + urlencode(q))
        .concat('&order=relevance')
        .concat('&maxResults=12');
    },

    getNextPageListIdUrl: (q, pageToken) => {
      return priv.getListIdUrl(q)
        .concat('&pageToken=' + pageToken);
    },

    getPrevPageListIdUrl: (q, pageToken) => {
      return priv.getNextPageListIdUrl(q, pageToken);
    }
  };

  // public
  self.getListId = (q, callback) => {
    $http({
      method: 'GET',
      url: priv.getListIdUrl(q)
    })
    .success((data) => { callback(data); })
    .error(() => { console.error(self.errorMessages.listId); });
  };

  self.getList = (ids, callback) => {
    $http({
      method: 'GET',
      url: priv.getListUrl(ids)
    })
    .success((data) => { callback(data); })
    .error(() => { console.error(self.errorMessages.list); });
  };

  self.getNextPageListId = (q, pageToken, callback) => {
    $http({
      method: 'GET',
      url: priv.getNextPageListIdUrl(q, pageToken)
    })
    .success((data) => { callback(data); })
    .error(() => { console.error(self.errorMessages.nextPageIdList); });
  };

  self.getNextPageList = (q, pageToken, callback) => {
    $http({
      method: 'GET',
      url: priv.getNextPageListIdUrl(q, pageToken)
    })
    .success((data) => { callback(data); })
    .error(() => { console.error(self.errorMessages.nextPageList); });
  };

  self.getPrevPageListId = (q, pageToken, callback) => {
    $http({
      method: 'GET',
      url: priv.getPrevPageListIdUrl(q, pageToken)
    })
    .success((data) => { callback(data); })
    .error(() => { console.error(self.errorMessages.prevPageIdList); });
  };
};
