module.exports = ['$http', 'storageService', function($http, storageService) {
  var self = this;

  self.errorMessages = {
    id: 'Erro ao requisitar o ID do vídeo em destaque',
    data: 'Erro ao requisitar os dados do vídeo em destaque'
  };

  self.getId = (callback) => {
    if (storageService.has('featured-video.id'))
      callback(
        JSON.parse(storageService.get('featured-video.id'))
      );

    else
      $http({
        method: 'GET',
        url: youtube.api
          .concat('/search/')
          .concat('?key=AIzaSyAJl2-4gdP8Y9S_0-oriBC-Wi12c5k3ijo')
          .concat('&channelId=UCRPWH2YmwgbVGz6zJZG1afA')
          .concat('&part=id')
          .concat('&maxResults=1')
      })
      .success((data) => {
        storageService.set('featured-video.id', data);
        callback(data);
      })
      .error(() => { console.error(self.errorMessages.id); });
 };

 self.getData = (id, callback) => {
    if (storageService.has('featured-video.data'))
      callback(
        JSON.parse(storageService.get('featured-video.data'))
      );

    else
      $http({
        method: 'GET',
        url: youtube.api
          .concat('/videos/')
          .concat('?key=AIzaSyAJl2-4gdP8Y9S_0-oriBC-Wi12c5k3ijo')
          .concat('&part=snippet,statistics')
          .concat('&id=' + id)
      })
      .success((data) => {
        storageService.set('featured-video.data', data);
        callback(data);
      })
      .error(() => { console.error(self.errorMessages.data); });
 };
}];
