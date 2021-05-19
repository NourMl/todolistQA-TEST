class Tasks{

    get taskName(){return $('.row .col:nth-child(1)').$('[type="text"]')}
    get taskDescription(){return $('.row .col:nth-child(2)').$('[type="text"]')}
    get addTask(){return $('.row .col:nth-child(3)').$('<button />')}
    get taskStatusButton() { return $('#root > div > div > ul > li > span:nth-child(2) > div')}
    get deleteTaskLink() {return $('=Supprimer')}
    


    /**
     * Enter the task name into the place holder
     * @param {String} text task name to be intered
     */
    enterTaskName(text){
        this.taskName.waitForDisplayed()
        this.taskName.setValue(text)
    }

     /**
     * Enter the task description into the place holder
     * @param {String} text task description to be intered
     */
    enterTaskDescription(text){
        this.taskDescription.setValue(text)
    }

    /**
     * clicks on submit button
     */
    clickAddTaskButton(){
        this.addTask.click()
    }

    /**
     * clicks on task status button
     */
    clickTaskStatusButton(){
    this.taskStatusButton.waitForDisplayed()
    this.taskStatusButton.click()
    }

    /**
     * clicks on delete task link
     */
     deleteTask(){
        this.deleteTaskLink.waitForDisplayed()
        this.deleteTaskLink.click()
    }
    
}
module.exports = new Tasks()
