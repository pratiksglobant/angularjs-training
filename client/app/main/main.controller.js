'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
     // console.log(this.awesomeThings, "awesomeThings")
    });
  }
}

angular.module('sampleProjectApp')
  .controller('MainController', MainController);

})();
