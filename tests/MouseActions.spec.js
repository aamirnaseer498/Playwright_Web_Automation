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