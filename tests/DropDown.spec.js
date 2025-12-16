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

    await page.close()

})

test("Drop Down Assertion 1", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const options= await page.locator("#country option")

    console.log("Number of options: " + await options.count())

    await expect(options).toHaveCount(10)

    await page.close()

})

test("Drop Down Assertion 2", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const options= await page.locator("#country option")

    await console.log((await options.allTextContents()).toString())

    await expect(((await options.allTextContents()).toString().includes("China"))).toBeTruthy()

    await page.close()

})