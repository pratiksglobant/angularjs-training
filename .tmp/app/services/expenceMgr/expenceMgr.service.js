'use strict';

angular.module('sampleProjectApp').service('expenceMgr', function ($http, $q) {

  var promise = $http.get('/assets/data/expencedata.json').then(function (resp) {
    return resp.data;
  });

  return promise;
});
//# sourceMappingURL=expenceMgr.service.js.map
