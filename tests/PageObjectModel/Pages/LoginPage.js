exports.LoginPage =
class LoginPage{

    constructor(page){

        this.page= page
        this.loginLink= "#login2"
        this.userNameField= "#loginusername"
        this.passwordField= "#loginpassword"
        this.loginButton= "button[onclick='logIn()']"

    }

    async goToLoginPage(){

        await this.page.goto("https://www.demoblaze.com/index.html")

    }

    async loginToAccount(userName, password){

        await this.page.locator(this.loginLink).click()
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.passwordField).fill(password)
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.loginButton).click()

    }

}