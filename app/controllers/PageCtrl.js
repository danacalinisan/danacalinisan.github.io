/**
 * Controller that handles page load effects
 */
angular.module('danaApp').controller('PageCtrl',
	function ($scope) {
		console.log("Page Controller loaded");
		// Animation entrance for each page
		$scope.pageClass = 'page-effect';

		// Need to make sure we only send valid forms
		// to formspree
		$scope.submitForm = function (isValid) {
			if (isValid) {
				// Send the form
				$.ajax({
					url: "https://formspree.io/danacamillee@hotmail.com",
					method: "POST",
					data: {
						name: $("#contactForm").find("input[name='name']").val(),
						_replyto: $("#contactForm").find("input[name='email']").val(),
						message: $("#contactForm").find("textarea[name='message']").val()
					},
					dataType: "json",
					success: function () {
						alert("success, apparently");
					}
				});
			}
		}
	}
);