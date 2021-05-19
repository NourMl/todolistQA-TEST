
class Home{
    get emailAddress(){return $('[type="email"]')}
    get password(){return $('[type="password"]')}
    get submit(){return $('[type="submit"]')}
    get errorMessage(){return $('#authErrorMessage')}
    get navbarParent() { return $('ul') }
    get navbarTaskLink() { return this.navbarParent.$(`li:nth-child(2)`)}
    get navbarLogoutLink() { return this.navbarParent.$(`li:nth-child(3)`)}



    /**
     * Enter the email address into the place holder
     * @param {String} text email address to be intered
     */
     enterEmailAddress(text){
        this.emailAddress.waitForDisplayed()
        this.emailAddress.setValue(text)
    }

     /**
     * Enter the password into the place holder
     * @param {String} text password to be intered
     */
      enterPassword(text){
        this.password.setValue(text)
    }

    /**
     * clicks on submit button
     */
     clickSubmitButton(){
        this.submit.click()
    }



}

module.exports = new Home()
