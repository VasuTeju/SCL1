/**
 * 
 */
import sclHomePage from '../pages/sclHomePage';


describe('TC001', () =>  {
	beforeEach(() =>  {
		sclHomePage.goto();
	});

	it('should return search results', () =>  {
		sclHomePage.search.forText('certificate number');

		expect(sclHomePage.search.resultsPage.isPresent()).toBe(true);
		expect(sclHomePage.posts.count()).toBeGreaterThan(0);
	});
	
	it('should 2nd feild return search results', () =>  {

		expect(sclHomePage.search.resultsPage.isPresent()).toBe(true);
		expect(sclHomePage.posts.count()).toBeGreaterThan(0);
	});


	it('should 2nd feild return search results', () =>  {
	expect(sclHomePage.search.resultsPage.isPresent()).toBe(true);
	expect(sclHomePage.posts.count()).toBeGreaterThan(0);
});
});