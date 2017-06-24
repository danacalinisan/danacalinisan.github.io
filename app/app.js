var app = angular.module( 'danaApp', [
  'ngRoute', 'ngAnimate'
] );

/**
 * Configure the Routes
 */
app.config( function ( $routeProvider ) {
	$routeProvider
		// Home
		.when( "/", {
			templateUrl: "app/home.html",
			controller: "PageCtrl"
		} )
		// Work Page
		.when( "/work", {
			templateUrl: "app/work.html",
			controller: "PageCtrl"
		} )
		// Experience Page
		.when( "/experience", {
			templateUrl: "app/experience.html",
			controller: "PageCtrl"
		} )
		// Contact Page
		.when( "/contact", {
			templateUrl: "app/contact.html",
			controller: "PageCtrl"
		} )
		// Work Details Page
		.when( "/details", {
			templateUrl: "app/details.html",
			controller: "dataImagesWork"
		} )
} );
