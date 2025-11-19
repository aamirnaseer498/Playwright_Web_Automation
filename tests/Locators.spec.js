
const {test, expect} = require ("@playwright/test")

test ("Locators", async ({page})=>{

await page.goto("https://www.demoblaze.com/index.html")

await page.locator("id=login2").click()

await page.locator("#loginusername").fill("aamirnaseer")

await page.locator("#loginpassword").fill("test@123")

await page.locator("//button[normalize-space()='Log in']").click()

let logOutButton= await page.locator("//a[@id='logout2']")
await expect(logOutButton).toBeVisible()

await page.close()

})