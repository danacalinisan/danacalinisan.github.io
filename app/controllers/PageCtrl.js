/**
 * Controller that handles page load effects
 */
angular.module( 'danaApp' ).controller( 'PageCtrl',
	function ( $scope ) {
		console.log( "Page Controller loaded" );
		// Animation entrance for each page
		$scope.pageClass = 'page-effect';
		
		// Need to make sure we only send valid forms
		// to formspree
		$scope.submitForm = function (isValid) {
			if (isValid) {
				// Send the form
				alert("sending");
			} else {
				alert("not sending garbage");
			}
		}
	}
);
