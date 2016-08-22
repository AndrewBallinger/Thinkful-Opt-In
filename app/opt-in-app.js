/*global angular */
angular.module('optApp', [])
  .directive('optIn', () => {
    return {
      restrict: 'E',
      templateUrl: 'opt-in-template.html',
      transclude: true,
      replace: true
      }
    });
