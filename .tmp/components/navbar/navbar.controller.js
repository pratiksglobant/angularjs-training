'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var NavbarController =
//end-non-standard

function NavbarController() {
  _classCallCheck(this, NavbarController);

  this.menu = [{
    'title': 'Dashboard',
    'state': 'main'
  }, {
    'title': 'Income',
    'state': 'Income'
  }, {
    'title': 'Expence',
    'state': 'Expence'
  }];
  this.isCollapsed = true;
};

angular.module('sampleProjectApp').controller('NavbarController', NavbarController);

//start-non-standard
//# sourceMappingURL=navbar.controller.js.map
