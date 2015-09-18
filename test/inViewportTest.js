var viewport;

describe('in viewport test', function() {

	beforeEach(function() {
		viewport = new inViewport();
	});

	it('should return an empty set', function() {
		var set = viewport.getViewports();
		expect(set).to.be.empty;
	});

	it('should return a set of given viewports', function() {
		var exampleViewports = {
			'mobile': 586,
			'portrait': 768,
			'desktop': 1024
		};
		viewport.setViewports(exampleViewports);
		expect(viewport.getViewports()).to.equal(exampleViewports);
	});

	it('should return a single given viewport', function() {
		viewport.addViewport('mobile', 320);
		expect(viewport.getViewports()).to.deep.equal({'mobile': 320});
	});

	it('should handle float values', function() {
		window.outerWidth = 300;
		var check = viewport.is(1024.5);

		expect(check).to.be.false;
	});

	it('should handle string values', function() {
		window.outerWidth = 1000;
		var check = viewport.is('999px');

		expect(check).to.be.true;
	});

	it('should handle string values with higher than operators', function() {
		window.outerWidth = 1201;
		var check = viewport.is('>1200px');

		expect(check).to.be.true;
	});

	it('should handle string values with lower than operators', function() {
		window.outerWidth = 1000;
		var check = viewport.is('<1200px');

		expect(check).to.be.true;
	});

	it('should handle string values with lower and even than operators', function() {
		window.outerWidth = 1200;
		var check = viewport.is('<=1200px');

		expect(check).to.be.true;
	});

	it('should handle string values with larger and even than operators', function() {
		window.outerWidth = 1000;
		var check = viewport.is('>=1000px');

		expect(check).to.be.true;
	});
});