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
    // Work Page
    .when("/work", { templateUrl: "app/work.html", controller: "PageCtrl" })
    // Experience Page
    .when("/experience", { templateUrl: "app/experience.html", controller: "PageCtrl" })
    // Contact Page
    .when("/contact", { templateUrl: "app/contact.html", controller: "PageCtrl" })
});


app.controller('PageCtrl', function ($scope) {
    console.log("Page Controller loaded");
    // Animation entrance for each page
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






