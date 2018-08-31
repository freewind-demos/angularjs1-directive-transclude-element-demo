const app = angular.module('app', [])
app.directive('helloElement', function () {
    return {
        restrict: 'E',
        transclude: 'element',
        replace: true,
        template: '<div>Hello, <span ng-transclude style="background-color: yellow"></span>!</div>'
    }
})
app.directive('helloTrue', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        template: '<div>Hello, <span ng-transclude style="background-color: yellow"></span>!</div>'
    }
})