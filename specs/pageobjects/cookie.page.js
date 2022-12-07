
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CookiePage extends Page {

    get accpetCookieDiv () {
        return $('.it-eprivacy-banner-actions');
    }

    get accpetCookieButton() {
        return $('.it-eprivacy-banner-actions').$('button*=Accept')
    }

    async accpetCookieButtonClick () {
         await this.accpetCookieButton.click();
    }
}

export default new CookiePage();
