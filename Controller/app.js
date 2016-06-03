var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: "Directives/home.html",

       controller: "homeController"
    })
    
    .when("/about", {
        templateUrl: "Directives/about.html",
        controller: "aboutController"
    })

    .when("/contact", {
        templateUrl: "Directives/contact.html",
        controller: "contactController"
    })

});

myApp.controller("mainController", ["$scope", "$location", "$log",
function ($scope, $location, $log) {



}]);