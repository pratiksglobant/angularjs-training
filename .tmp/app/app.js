'use strict';

angular.module('sampleProjectApp', ['sampleProjectApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap']).config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map
