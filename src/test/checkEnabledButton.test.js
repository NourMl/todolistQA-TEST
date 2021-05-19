const { assert } = require('chai')
const homePage = require('../pages/home.page')
const tasksPage= require('../pages/tasks.page')
loginData = require('../data/logindata')


describe("check buttons status ", function () {
    it("check login button disabled", () => {
        browser.url('/')

        /**clicking the submit button without entering any key in the email/password place holders
         * submit button should be disabled 
         */
        homePage.clickSubmitButton()
        assert.equal(false, homePage.submit.isEnabled())
        
    })

    it("check add task button disabled", () => {
        browser.url('/')

        /**
         * login in order to go to the tasks page
         */
        homePage.enterEmailAddress(loginData.email)
        homePage.enterPassword(loginData.password)
        homePage.clickSubmitButton()
        
        /**clicking the add task button without entering any key in the task name/description place holders
         * submit button should be disabled 
         */
        tasksPage.clickAddTaskButton()
        assert.equal(false, tasksPage.addTask.isEnabled())

    })
})