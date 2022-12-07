

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    get signoutSuccessCheck() {
        return $('.atext-root-aN9').$('h1')
    }

    get signoutLink() {
        return $('.accountMenuItems-root-wdF').$('button');
    }

    get avatarIcon() {
        return $('.accountTrigger-root-SCn').$('button');
    }

    get menuProduct() {
        return $('.megaMenuItem-megaMenuItem-XoX').$('a*=Product');
    }
    get getProductListDiv() {
        return $('.category-galleryItems-wn5')
    }
    get getAddToCartDivButton() {
        return $('.item-root-T6M:nth-child(3)').$('button*=al carrito')
    }
    get getReviewCheckoutButton() {
        return $('.miniCart-footer-HOu').$('button')
    }

    get getMiniCartIcon() {
        return $('.cartTrigger-triggerContainer-2Hg').$('button')
    }
    get getMiniCartDiv() {
        return $('.cartTrigger-triggerContainer-2Hg').$('button')
    }

    get getCheckoutButton() {
        return $('.priceSummary-checkoutButton_container-cvm').$('button')
    }

    get getaPlaceOrderButton() {
        return $('.checkoutPage-checkoutSummary-goc').$('button')
    }

    get getOrderSuccessfullPageDivHeading() {
        return $('.orderConfirmationPage-topSection-s0E').$('h1')
    }

    async clickSignoutLink() {

        await this.signoutLink.click();
    }

    async clickAccounticon() {
        await this.avatarIcon.click();
    }

    async clickMenuLinkProduct() {
        await this.menuProduct.click();
    }

    async clickAddToCartDivButton() {
        await this.getAddToCartDivButton.click();
    }

    async clickOnMiniCartIcon() {
        await this.getMiniCartIcon.click();
    }

    async clickOnReviewCheckOutButton() {
        await this.getReviewCheckoutButton.click();
    }

    async clickOnCheckout() {
        await this.getCheckoutButton.click();
    }

    async clickOnPlaceOrder() {
        await this.getaPlaceOrderButton.click();
    }

}

export default new HomePage();
