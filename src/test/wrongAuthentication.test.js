const { assert } = require('chai')
const homePage = require('../pages/home.page')
loginData = require('../data/logindata')


describe("wrong authentication keys ", function () {
    it("should display an error message", () => {
        browser.url('/')

        /**enter wrong authentication keys
         * app should display an error message
         */
        homePage.enterEmailAddress(loginData.wrongEmail)
        homePage.enterPassword(loginData.wrongPassword)
        homePage.clickSubmitButton()
        assert.equal(true, homePage.errorMessage.isDisplayed())
        assert.equal('Désolé, les identifiants sont incorrects.', homePage.errorMessage.getText())

    })
})