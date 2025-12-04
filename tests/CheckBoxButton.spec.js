// npx playwright test CheckBoxButton.spec.js --project=chromium --headed

const {test, expect}= require("@playwright/test")

test("CheckBox Button", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#monday").check()

    await expect(await page.locator("#monday")).toBeChecked()
    await expect(await page.locator("#sunday")).toBeChecked()

    await page.close()

})