module.exports = function($http) {
  var self = this;

  var privAttrs = {
    errorMessages: {
      get: 'Erro ao requisitar a Lista de mais vídeos'
    },
    url: youtube.api
      .concat('/videos/')
      .concat('?key=' + youtube.key),
    ids: undefined,
    params: ''
  };

  // private
  var priv = {
    getUrl: () => {
      return privAttrs.url
        .concat(privAttrs.ids)
        .concat(privAttrs.params);
      }
  };

  // setters & getters
  self.getIds = () => { return privAttrs.ids; };
  self.setIds = (ids) => {
    privAttrs.ids = '&id=' + ids;
    return self;
  };

  self.getParams = () => { return privAttrs.params; };
  self.setParams = (params) => {
    privAttrs.params = params;
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
};
