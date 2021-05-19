const { assert } = require('chai')
const homePage = require('../pages/home.page')
const tasksPage= require('../pages/tasks.page')
loginData = require('../data/logindata')
taskData = require('../data/taskdata')

describe("tasks operations ", function () {
    it("should verify if the task added is saved in the local storage", () => {
        browser.url('/')
        homePage.enterEmailAddress(loginData.email)
        homePage.enterPassword(loginData.password)
        homePage.clickSubmitButton()
        tasksPage.enterTaskName(taskData.taskName)
        tasksPage.enterTaskDescription(taskData.taskDescription)
        tasksPage.clickAddTaskButton()

        /** put tasks saved in local storage into an array "tasks"
         * then check if the task we created is included in tasks
         */
        tasks = browser.execute("return localStorage.getItem('tasks')")
        assert.equal('Non complétée', tasksPage.taskStatusButton.getText())
        assert.include(tasks,'[{"name":"task 1","description":"Check my mailbox","completed":false}]')
      
    })

    it("should verify if task status changing is saved in local storage", () => {
        tasksPage.clickTaskStatusButton()
        assert.equal('Complétée', tasksPage.taskStatusButton.getText())
        assert.include(tasks,'[{"name":"task 1","description":"Check my mailbox","completed":true}]')        

    })

    it("should verify if task is deleted from local storage", () => {
        tasksPage.deleteTask()
        assert.notInclude(tasks,'[{"name":"task 1","description":"Check my mailbox","completed":false}]')

    })
})