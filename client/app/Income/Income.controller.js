'use strict';

angular.module('sampleProjectApp')
  .controller('IncomeCtrl', function ($scope,incomeData) {
    $scope.showIncomeTable = false;
    var uid = 4;
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

    incomeData.then(function(data) {
      $scope.data = data.income_data
      for(var i=0;i<$scope.data.length;i++){
         $scope.income.incomeData.push($scope.data[i]);
      }
      console.log($scope.income.incomeData);
    })

     $scope.reset = function(){
      $scope.income.category = null;
      $scope.income.payer = null;
      $scope.income.amount = null;
      $scope.income.description = null;
      $scope.income.modeOfPay = null;
      $scope.income.date = null;
     }

    $scope.fnaddIncome = function (){
  		console.log("in IncomeCtrl")
  		var item = {
        id :  uid++,
  			cat : $scope.income.category,
  			pay : $scope.income.payer,
  			amt : $scope.income.amount,
  			desc : $scope.income.description,
        date : $scope.income.date,
        modeofpay : $scope.income.modeOfPay
  		}
      $scope.income.incomeData.push(item);
      console.log($scope.data , "data1")
      $scope.showIncomeTable = true;
      $scope.reset();
      return item;
  	}
    $scope.deleteIncome = function(index){
      confirm("This Cluster will get deleted permanently");
      $scope.income.incomeData.splice(index,1);
    }
  });
