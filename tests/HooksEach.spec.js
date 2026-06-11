const {test, expect} = require ("@playwright/test")

let page

test.beforeEach("Login", async ({browser})=>{

    page= await browser.newPage()

    await page.goto("https://demoblaze.com/index.html")

    await page.locator("#login2").click()

    await page.locator("#loginusername").fill("Aamir Naseer")

    await page.locator("#loginpassword").fill("aamir")

    await page.locator("button[onclick='logIn()']").click()

    await page.waitForTimeout(2500)

})

test.afterEach("Log Out", async ()=>{

    await page.locator("#logout2").click()

    await page.waitForTimeout(2500)

})

test("Home Page", async ()=>{

    const mobiles= await page.$$(".hrefch")
    
    expect(mobiles).toHaveLength(9)

    await page.waitForTimeout(2500)
})

test("Add to Cart", async ()=>{

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()

    await page.locator(".btn.btn-success.btn-lg").click()

    page.on("Dialog", async dialog=>{

        expect(dialog.message()).toContain("Product added.")
        
        await dialog.accept()

    })

    await page.waitForTimeout(2500)

})