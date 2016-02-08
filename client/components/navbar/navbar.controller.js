'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Dashboard',
    'state': 'main'
  },
  {
    'title' : 'Income',
    'state' : 'Income'
  },
  {
    'title' : 'Expence',
    'state' : 'Expence'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('sampleProjectApp')
  .controller('NavbarController', NavbarController);
