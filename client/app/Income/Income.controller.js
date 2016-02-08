'use strict';

angular.module('sampleProjectApp')
  .controller('IncomeCtrl', function ($scope,expenceMgr) {
    $scope.showIncomeTable = false;
  	$scope.income = {
      income_id : '',
  		incomeData : [],
  		category : '',
  		payer : '',
  		amount : '',
  		description : '',
      modeOfPay : '',
      date : ''
  	}
    $scope.fnaddIncome = function (){
  		console.log("in IncomeCtrl")
  		var item = {
        id :  $scope.income.income_id,
  			cat : $scope.income.category,
  			pay : $scope.income.payer,
  			amt : $scope.income.amount,
  			desc : $scope.income.description,
        date : $scope.income.date,
        modeofpay : $scope.income.modeOfPay
  		}
      $scope.income.incomeData.push(item);
      $scope.data = expenceMgr.setIncomeData($scope.income.incomeData);
      console.log($scope.data , "data1")
      $scope.showIncomeTable = true;
      return item;
  	}
    $scope.deleteIncome = function(index){
      $scope.income.incomeData.splice(index,1);
    }
  });
