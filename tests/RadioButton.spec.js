const {test, expect}= require("@playwright/test")

test("Radio Button", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(await page.locator("#male")).not.toBeChecked()
    await expect(await page.locator("#male").isChecked).toBeFalsy

    await page.locator("#male").check()

    await expect(await page.locator("#male")).toBeChecked()
    await expect(await page.locator("#male").isChecked).toBeTruthy()

    await page.close()

})