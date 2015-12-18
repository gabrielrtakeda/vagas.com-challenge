require('./src/vendor')();

var appModule = require('./src/index');

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name], {});
});
