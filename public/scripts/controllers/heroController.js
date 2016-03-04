myApp.controller('HeroController', ['$scope', '$http', function($scope, $http) {

    //$scope.blogFactory = BlogFactory;
    $scope.alias = '';
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.city = '';
    $scope.primary_power = '';

    var heroData = {};

    $scope.heroes = [];


    $scope.saveHero = function() {
        heroData = {
            heroAlias: $scope.alias,
            heroFirstName: $scope.first_name,
            heroLastName: $scope.last_name,
            heroCity: $scope.city,
            heroPrimaryPower: $scope.primary_power
        };

        $http.post('/hero', heroData).then(function(response) {
            // update the page
            $scope.heroes = response.data;
            console.log(response.data);

        });


        //console.log(taskData);

        //$scope.blogFactory.factorySaveBlog(blogData);
    }
}]);