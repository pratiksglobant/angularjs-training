'use strict';

angular.module('sampleProjectApp').service('expenceMgr', function ($http, $q) {
  // this.getData = function () {
  //       var deferred = $q.defer();
  //      return $http.get('app/Data/expenceData.json')
  //          .then(function (response) {
  //              // promise is fulfilled
  //              //console.log(response.data.records);
  //              deferred.resolve(response.data.records);
  //              // promise is returned
  //              return deferred.promise;
  //          }, function (response) {
  //              // the following line rejects the promise
  //              deferred.reject(response);
  //              // promise is returned
  //              return deferred.promise;
  //          });

  //  }
  this.setIncomeData = function (data) {
    var incomeData;
    incomeData = angular.copy(data);
    return incomeData;
  };
});
//# sourceMappingURL=expenceMgr.service.js.map
