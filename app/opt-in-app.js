/*global angular */
angular.module('opApp', ['ngAnimate'])
  .directive('optIn', () => {
    return {
      restrict: 'E',
      templateUrl: 'opt-in-template.html'
      }
    });
