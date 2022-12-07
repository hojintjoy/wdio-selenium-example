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

    it('should load products list when click on menu link productos', async () => {
        await homePage.clickMenuLinkProduct();
        await LoginPage.demo(5000);
        await expect(homePage.getProductListDiv).toBeExisting();
    });

    it('should add to the cart when click on add to cart button, view minicart, View cart, checkout and place order', async () => {
        await homePage.clickAddToCartDivButton();
        await LoginPage.demo(3000);
        await homePage.clickOnMiniCartIcon();
        await LoginPage.demo(3000);
        //Note: move to subsections later.
        await homePage.clickOnReviewCheckOutButton();
        await LoginPage.demo(5000);
        await homePage.clickOnCheckout();
        await LoginPage.demo(4000);
        await homePage.clickOnPlaceOrder();
        await LoginPage.demo(4000);
        await expect(homePage.getOrderSuccessfullPageDivHeading).toBeExisting();
        await LoginPage.demo(4000);
    });
});


