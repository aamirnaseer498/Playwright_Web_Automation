const {test, expect} = require('@playwright/test')

// async -> it makes the function to return a promise.
// await -> it applies the wait to our actions automatically. Means it will never perform any action like clicking on button until the page or button is loaded successfully.

test("Home Page Test", async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    let pageTitle= await page.title()
    console.log("Page Title is: ", pageTitle)

    await expect(page).toHaveTitle("STORE")

    let pageURL= await page.url()
    console.log("Page URL is: ", pageURL)

    await expect(page).toHaveURL("https://www.demoblaze.com/index.html")

    await page.close()

})