import {test, expect} from "@playwright/test"

test("Page Screenshot", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")
    await page.screenshot({path: "tests/Screenshots/" + Date.now() + "HomePage.png"})

})

test("Full Page Screenshot", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")
    await page.waitForTimeout(5000)
    await page.screenshot({path: "tests/Screenshots/" + Date.now() + "FullPage.png", fullPage: true})

})

test("Element Screenshot", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")
    await page.waitForTimeout(5000)
    await page.locator("//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[2]/div[1]").screenshot({path: "tests/Screenshots/" + Date.now() + "Mobile.png"})

})