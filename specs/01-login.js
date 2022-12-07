import LoginPage from './pageobjects/login.page';
import CookiePage from './pageobjects/cookie.page';
import cookiePage from './pageobjects/cookie.page';
import homePage from './pageobjects/home.page';

describe('01-Sign-in BI-connect application', () => {
    it('should get accept cookie consense', async () => {
        await LoginPage.open();
        await LoginPage.demo(1000);
        await expect(cookiePage.accpetCookieDiv).toBeExisting();
        await LoginPage.demo(1000);
    });

    it('should login with valid credentials', async () => {
        await cookiePage.accpetCookieButtonClick();
        await LoginPage.demo(5000);
        await LoginPage.login('nhojin@corra.com', 'Starwars_300');
        await LoginPage.demo(2000);
    });

    it('should logout the page when click on the logout successfully', async () => {

        await homePage.clickAccounticon();
        await LoginPage.demo(5000);
        await expect(homePage.avatarIcon).toBeExisting();
        await LoginPage.demo(3000);
        await homePage.clickSignoutLink();
        await LoginPage.demo(5000);
        //await expect(homePage.signoutSuccessCheck).toBeExisting();

    });
});


