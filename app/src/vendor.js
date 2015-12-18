module.exports = function() {
  /**
   * JS
   */
  // jQuery for Bootstrap
  global.$ = global.jQuery = require('jquery');
  global.api = {
    youtube: 'https://www.googleapis.com/youtube/v3'
  };

  global.youtube = {
    api: 'https://www.googleapis.com/youtube/v3',
    channelId: 'UCRPWH2YmwgbVGz6zJZG1afA',
    embed: 'https://www.youtube.com/embed/',
    key: 'AIzaSyAJl2-4gdP8Y9S_0-oriBC-Wi12c5k3ijo'
  };

  require('bootstrap-webpack');
  require('angular');
  global.urlencode = require('urlencode');
  global.moment = require('moment');
  global.commaNumber = require('comma-number');
  global.nl2br = require('nl2br');

  moment.locale('pt-BR');

  /**
   * Stylus
   */
  require('./styles/iconfonts/ficticia/style.styl');
  require('./styles/layout/layout.styl');
  require('./styles/bootstrap/tooltip.styl');
};
