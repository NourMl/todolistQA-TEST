const { assert } = require('chai')
const homePage = require('../pages/home.page')
loginData = require('../data/logindata')

describe("displayed elements check", function () {
    it("should not display task link and logout link when user is not logged in", () => {

        /**launching the app without logging in to see if the tasks and logout links are displayed
        /*they should not be displayed as long as the user is not logged in
         */
        browser.url('/')
        assert.equal(false, homePage.navbarTaskLink.isDisplayed())
        assert.equal(false, homePage.navbarLogoutLink.isDisplayed())
    })

    it("should display task link and logout link when user is logged in", () => {

        /**launching the app and log in to see if the tasks and logout links are displayed
        /*they should  be displayed as long as the user is logged in
         */
        browser.url('/')
        homePage.enterEmailAddress(loginData.email)
        homePage.enterPassword(loginData.password)
        homePage.clickSubmitButton()
        assert.equal(true, homePage.navbarTaskLink.isDisplayed())
        assert.equal(true, homePage.navbarLogoutLink.isDisplayed())
    })

})