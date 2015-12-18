module.exports = function(
  $rootScope,
  $location,
  storageService
) {
  var self = this;

  self.q = storageService.has('search-bar.q') ?
    JSON.parse(storageService.get('search-bar.q')).q :
    undefined;

  self.submit = () => {
    storageService.set('search-bar.q', {q: self.q});
    $rootScope.$broadcast('search-bar.q', self.q);
    $location.path('/search');
  };
};
