var app = angular.module('danaApp', [
  'ngRoute', 'ngAnimate'
]);

/**
* Configure the Routes
*/
app.config(function ($routeProvider) {
    $routeProvider
    // Home
    .when("/", { templateUrl: "app/home.html", controller: "PageCtrl" })
    // Pages
    .when("/work", { templateUrl: "app/work.html", controller: "PageCtrl" })
});


app.controller('PageCtrl', function ( $scope) {
    console.log("Page Controller loaded");
    $scope.pageClass = 'page-effect';
});

app.controller("dataImagesWork", function ($scope) {
    $scope.images_work = [
          { num: 1, category: 'marketing', src: "1.jpg", description: 'Description'},//, url_details: "details.html" },
          { num: 2, category: 'branding', src: "2.jpg", description: 'Description'},//, url_details: "details.html" },
          { num: 3, category: 'design', src: "3.jpg", description: 'Description'},//, url_details: "details.html" },
          { num: 4, category: 'photo', src: "4.jpg", description: 'Description'},//, url_details: "details.html" },
          { num: 5, category: 'marketing', src: "5.jpg", description: 'Description'},//, url_details: "details.html" },
          { num: 6, category: 'design', src: "6.jpg", description: 'Description'},//, url_details: "details.html" },
          { num: 7, category: 'photo', src: "7.jpg", description: 'Description'},//, url_details: "details.html" },
          { num: 8, category: 'marketing', src: "8.jpg", description: 'Description'},//, url_details: "details.html" },
          { num: 9, category: 'design', src: "9.jpg", description: 'Description'}];//, url_details: "details.html"}];
});


//'use strict';
app.directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('current');
                        } else {
                            angular.element(li).removeClass('current');
                        }
                    });
                }
            }
            setActive();
            scope.$on('$locationChangeSuccess', setActive);
        }
    }
} ]);






