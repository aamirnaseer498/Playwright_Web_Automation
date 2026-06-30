const {test, expect}= require("@playwright/test")


test("Screen Recording", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

await expect(await page.locator("#name")).toBeVisible()
await expect(await page.locator("#name")).toBeEnabled()
await expect(await page.locator("#name")).toBeEditable()
await expect(await page.locator("#name")).toBeEmpty()

await page.locator("#name").fill("Aamir")

await page.waitForTimeout(2500)

await page.close()

})