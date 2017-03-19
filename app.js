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
        /*link and compile do not work together, 
        In the directive definition object, if you only define link, that's like shorthand for having an empty compile function with an 
        empty preLink function with your code in the postLink function. As soon as you define compile, link is ignored by angular, 
        because compile should return the linking functions.
        If you only return one function from compile, then it'll be executed post link.
        Or, put differently, link is just a shortcut to the postLink function that gets called after the scope has been linked by compile.*/

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

                        //Scope is = means two way binding, whatever modification being done in directive is reflected in html
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