import {test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"

test("Login Test", async ({page})=>{

const loginObject= new LoginPage(page)

await loginObject.goToLoginPage()
await page.waitForTimeout(3000)
await loginObject.loginToAccount("aamirnaseer498", "aamir")
await page.waitForTimeout(3000)

})