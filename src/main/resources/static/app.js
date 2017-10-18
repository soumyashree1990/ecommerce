var app = angular.module('authenticationApp', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'templates/login.html',
            controller: 'login'
        })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'templates/login.html',
                controller: 'login'
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'templates/signup.html',
                controller: 'signup'
            })
            .when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'templates/home.html',
                controller: 'dashboard'
            })
            .when('/', {
                title: 'Login',
                templateUrl: 'templates/login.html',
                controller: 'login',
                role: '0'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }]);]);