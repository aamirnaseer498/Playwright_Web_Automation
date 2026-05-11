const {test, expect}= require("@playwright/test")
const { it } = require("node:test")

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

test("Mouse Drag and Drop Action", async ({page})=>{

    await page.goto("https://www.testautomationstudio.com/demo/actions/")

    const item1= await page.locator("ul[id='sortable1'] li:nth-child(1)")

    const item2= await page.locator("ul[id='sortable1'] li:nth-child(5)")

    const container= await page.locator("#sortable2")

    // Approach 1

    await item1.hover()

    await page.mouse.down()

    await container.hover()

    await page.waitForTimeout(2000)

    await page.mouse.up()

    // Approach 2

    await item2.dragTo(container)

    await page.waitForTimeout(5000)

})