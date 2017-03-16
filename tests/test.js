describe("app", function() {
	var scope, ctrl;

	beforeEach(module('app'));

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();

		ctrl = $controller('mainController', {
			$scope: scope
		});
	}));

	it('errorWidth', function() {
		expect(scope.errorWidth).toEqual(false);
	});
	it('errorHeight', function() {
		expect(scope.errorHeight).toEqual(false);
	});
});