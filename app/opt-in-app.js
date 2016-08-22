/*global angular */
angular.module('optApp', ['ngAnimate'])
  .directive('optIn', () => {
    return {
      restrict: 'E',
      templateUrl: 'opt-in-template.html',
      transclude: true,
      replace: true
      }
    });
