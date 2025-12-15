const {test, expect}= require("@playwright/test")

test("Drop Down 1", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption({label: "Germany"})

    await page.close()

})

test("Drop Down 2", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption("Germany")

    await page.close()

})

test("Drop Down 3", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption({value: "uk"})

    await page.close()

})

test("Drop Down 4", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption({index: 6})

    await page.waitForTimeout(3000)

    await page.close()

})