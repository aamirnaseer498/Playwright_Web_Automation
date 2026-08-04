import {test, expect} from "@playwright/test"

test("Test 1", async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")
    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle("STORE")

})

test("Test 2", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle("Automation Testing Practice")

})