var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/hero', {
            templateUrl: '/views/templates/hero.html',
            controller: 'HeroController'
        })
        .otherwise({
            redirectTo: 'hero'
        });
}]);


// .js file that shows the views