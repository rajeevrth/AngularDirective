var app = angular.module('angularDirectiveApp', []);

app.controller('appController', function ($scope) {
    $scope.rajeev = "Hello, Rajeev";
});

app.directive('mydirective', function () {
    var directive = {};
    directive.restrict = 'AEC';
    directive.scope = {
        userName: '=name'
    };
    directive.template = "<div>{{fullName}}, My First Directive" + "<custdir></custdir>" + "</div>";
    directive.compile = function (element, attributes) {
        element.css("border", "red dashed");
        directive.link =
            {
                pre: function (scope, element, attributes) {
                    console.log("pre link called");
                    scope.fullName = "Holla";
                },
                post: function (scope, element, attributes) {
                    console.log("post link called");
                    scope.userName = "Hello Rajeev, Two way binding with name works";

                    //scope.fullName = "Huhaa";
                }
            }
        return directive.link;
    }

    return directive;
});

app.directive('custdir', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.scope = {};
    directive.template = "<input type='text' ng-model='mywife'>"
    directive.link = function (scope, element, attr) {
        element.css("border", "red dashed");
        scope.mywife = "Sweta";
        if (scope.mywife == "Sweta") {
            element.bind('mouseover', function (e) {
                alert("Happy Married Life");
            });
        }
        else {
            element.bind('mouseover', function (e) {
                alert("uhhhhaaaaa");
            });
        }
    }
    return directive;
});