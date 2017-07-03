/**
 * Controller that handles all the images
 */
angular.module('danaApp').controller("ImagesController",
	function ($location, $filter, $rootScope, $scope) {
		$scope.images_work = [{
				num: 1,
				category: 'marketing',
				src: "1.jpg",
				description: 'Description'
    		},
			{
				num: 2,
				category: 'branding',
				src: "2.jpg",
				description: 'Description'
    		},
			{
				num: 3,
				category: 'design',
				src: "3.jpg",
				description: 'Description'
    		},
			{
				num: 4,
				category: 'photo',
				src: "4.jpg",
				description: 'Description'
    		},
			{
				num: 5,
				category: 'marketing',
				src: "5.jpg",
				description: 'Description'
    		},
			{
				num: 6,
				category: 'design',
				src: "6.jpg",
				description: 'Description'
    		},
			{
				num: 7,
				category: 'photo',
				src: "7.jpg",
				description: 'Description'
    		},
			{
				num: 8,
				category: 'marketing',
				src: "8.jpg",
				description: 'Description'
    		},
			{
				num: 9,
				category: 'design',
				src: "9.jpg",
				description: 'Description'
    		}
  ];

		$scope.openWorkDetails = function (workDetails, $event) {
			$rootScope.currentDetails = workDetails;

			$event.preventDefault();
			$("#work-section").fadeOut(1000, function () {
				window.location = "#/details";
			});
		}

		$scope.closeWorkDetails = function ($event) {
			$event.preventDefault();
			$rootScope.currentDetails = {};
			$("#details-section").fadeOut(1000, function () {
				window.location = "#/work";
			});
		}
	}
);