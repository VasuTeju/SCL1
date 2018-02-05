// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';
import search from './searchModule';

class SclHomePage extends BasePage {
    constructor() {
        super();
        // include modules...
        this.search = search;
        
        this.posts = $$('div.post');
        this.postTitleLinks = $$('h2 a');
        this.siteTitle = $('h1 a');
 
        // pagination
        this.prevPageLink = element(by.cssContainingText('a', '← Older Entries'));
        this.url = 'http://app.com';
        // pageLoaded is used by `.loaded()` to test that we're on a page
        this.pageLoaded = this.and(
            this.hasText(this.siteTitle, 'title')
            
        );
        
    }

    /**
     * check if a post title exists
     * @param  {string} postTitle
     * @return {bool}
     */
    postTitleExists(postTitle) {
        return element(by.cssContainingText('a', postTitle)).isPresent();
    }
    
    
}
export default new SclHomePage();