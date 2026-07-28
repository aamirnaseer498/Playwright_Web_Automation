import {test, expect} from "@playwright/test"
import {LoginPage} from "../Pages/LoginPage"
import {HomePage} from "../Pages/HomePage"

test("Test Case 1", async ({page})=>{

const loginObject= new LoginPage(page)

await loginObject.goToLoginPage()
await page.waitForTimeout(3000)
await loginObject.loginToAccount("aamirnaseer498", "aamir")
await page.waitForTimeout(3000)

const homePage= new HomePage(page)

await homePage.addProductToCard("Samsung galaxy s6")
await page.waitForTimeout(3000)
await homePage.goToCart()
await page.waitForTimeout(3000)

})