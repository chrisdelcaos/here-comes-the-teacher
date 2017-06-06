angular.module('appRoutes',['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'app/views/pages/users/login.html'
        })
        .when('/about', {
            templateUrl: 'app/views/pages/about.html'
        })
        .when('/register', {
            templateUrl: 'app/views/pages/users/login.html'
        })
        .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode({
            enabled: true,
            requireBased: false
        });
    });