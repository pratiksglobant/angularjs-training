'use strict';

angular.module('sampleProjectApp').config(function ($stateProvider) {
  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'app/main/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  });
});
//# sourceMappingURL=main.js.map
