'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  var MainController = function MainController($http) {
    var _this = this;

    _classCallCheck(this, MainController);

    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(function (response) {
      _this.awesomeThings = response.data;
      // console.log(this.awesomeThings, "awesomeThings")
    });
  };

  angular.module('sampleProjectApp').controller('MainController', MainController);
})();
//# sourceMappingURL=main.controller.js.map
