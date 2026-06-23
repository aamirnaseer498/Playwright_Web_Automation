import {test, expect} from "@playwright/test"

test("Page Screenshot", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")
    await page.screenshot({path: "tests/Screenshots/" + Date.now() + "HomePage.png"})

})