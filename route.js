var routeApp = angular.module('angularDirectiveApp', ["ngRoute"]);

routeApp.config(function ($routeProvider) {
    $routeProvider.when("/hello",
        {
            template:"<h1>Hello World, Route is working</h1>" 
        }).
        otherwise({
        redirectTo: '/home'
    });

});