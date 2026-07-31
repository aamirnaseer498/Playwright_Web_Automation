import {test, expect} from "@playwright/test"

test("Test 1", async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")
    expect(page).toHaveTitle("STORE")

})

test("Test 2", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    expect(page).toHaveTitle("Automation Testing Practice")

})