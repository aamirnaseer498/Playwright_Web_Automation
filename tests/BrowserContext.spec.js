import {test, expect, chromium} from "@playwright/test"

test("Independent Pages", async ()=>{

    const browser= await chromium.launch()
    const browserContext= await browser.newContext()

    const page1= await browserContext.newPage()
    const page2= await browserContext.newPage()

    console.log("Total Pages: ", browserContext.pages().length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page1.waitForTimeout(5000)
    expect(await page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://orangehrm.com/")
    await page2.waitForTimeout(5000)
    expect(await page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

})

test("Linked Pages", async ()=>{

    const browser= await chromium.launch()
    const browserContext= await browser.newContext()

    const page= await browserContext.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    expect(await page).toHaveTitle("OrangeHRM")

    await page.waitForTimeout(3000)

    const pagePromise= browserContext.waitForEvent("page")
    await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newPage= await pagePromise
    expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

    await newPage.waitForTimeout(3000)

    await browser.close()

})