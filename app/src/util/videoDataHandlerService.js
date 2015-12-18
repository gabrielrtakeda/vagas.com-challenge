module.exports = function($sce) {
  var self = this;

  self.merge = (old, fresh) => {
    var _tmp = {};
    var prop;
    for (prop in old) { _tmp[prop] = old[prop]; }
    for (prop in fresh) {
      var v = fresh[prop];

      if (prop === 'src')
        v = $sce.trustAsResourceUrl(v);

      if (prop === 'description')
        v = $sce.trustAsHtml(v);

      _tmp[prop] = v;
    }
    return _tmp;
  };
};
