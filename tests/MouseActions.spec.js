const {test, expect}= require("@playwright/test")

test("Mouse Hover Action", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const pointMeButton= await page.locator(".dropbtn")
    const mobiles= await page.locator("//a[normalize-space()='Mobiles']")

    await pointMeButton.hover()
    
    await page.waitForTimeout(2000)

    await mobiles.hover()

    await page.waitForTimeout(5000)

})

test("Mouse Right Click Action", async ({page})=>{

    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html")

    const mouseButton= await page.locator("//span[@class='context-menu-one btn btn-neutral']")

    await mouseButton.click({button: "right"})

    await page.waitForTimeout(5000)

})

test("Mouse Double Click Action", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const copyButton= await page.locator("//button[normalize-space()='Copy Text']")

    await copyButton.dblclick()

    const inputField= await page.locator("//input[@id='field2']")

    await expect(inputField).toHaveValue("Hello World!")

    await page.waitForTimeout(5000)

})