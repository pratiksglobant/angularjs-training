'use strict';

angular.module('sampleProjectApp').controller('ExpenceCtrl', function ($scope, expenceMgr) {
  $scope.showExpenceTable = false;
  var uid = 4;
  var sum = 0;
  var expenceTotals = 0;
  $scope.expence = {
    expence_id: uid,
    expenceData: [],
    category: '',
    payer: '',
    amount: '',
    description: '',
    modeOfPay: '',
    date: ''
  };

  expenceMgr.then(function (data) {

    $scope.data = data.expence_data;
    for (var i = 0; i < $scope.data.length; i++) {
      $scope.expence.expenceData.push($scope.data[i]);
    }
  });

  $scope.reset = function () {
    $scope.expence.category = null;
    $scope.expence.payer = null;
    $scope.expence.amount = null;
    $scope.expence.description = null;
    $scope.expence.modeOfPay = null;
    $scope.expence.date = null;
  };
  $scope.fnaddExpence = function () {
    console.log($scope.expence.expence_id);
    var item = {
      id: uid++,
      cat: $scope.expence.category,
      pay: $scope.expence.payer,
      amt: $scope.expence.amount,
      desc: $scope.expence.description,
      date: $scope.expence.date,
      modeofpay: $scope.expence.modeOfPay
    };

    $scope.expence.expenceData.push(item);
    for (var i = 0; i < $scope.expence.expenceData.length; i++) {

      expenceTotals = expenceTotals + $scope.expence.expenceData[i].amt;
    }
    //$scope.data = expenceData.setIncomeData($scope.expence.expenceData);
    console.log(expenceTotals);
    $scope.showExpenceTable = true;
    $scope.reset();
    return item;
  };

  $scope.deleteExpence = function (index) {
    confirm("This Cluster will get deleted permanently");
    $scope.expence.expenceData.splice(index, 1);
  };
});
//# sourceMappingURL=Expence.controller.js.map
