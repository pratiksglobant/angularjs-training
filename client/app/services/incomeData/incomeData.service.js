'use strict';

angular.module('sampleProjectApp')
  .service('incomeData', function ($http, $q) {
  	var promise = $http.get('/assets/data/incomedata.json').then(function(resp) {
                    return resp.data;
                    });

      return promise;
  });
