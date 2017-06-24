/**
 * Controller that handles page load effects
 */
angular.module( 'danaApp' ).controller( 'PageCtrl',
	function ( $scope ) {
		console.log( "Page Controller loaded" );
		// Animation entrance for each page
		$scope.pageClass = 'page-effect';
	}
);
