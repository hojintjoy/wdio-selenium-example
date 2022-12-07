

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('[name="email"]');
    }

    get inputPassword() {
        return $('[name="password"]');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get acceptCookie() {
        return $('[role=button]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('mx/sign-in');
    }

    async demo(milliseconds) {
        await browser.pause(milliseconds);
    }

    async debug(milliseconds) {
        await browser.debug();
    }
}

export default new LoginPage();
