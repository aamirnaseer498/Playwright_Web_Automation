const {test, expect} = require("@playwright/test")

test("Keyboard Actions", async ({page})=>{

await page.goto("https://gotranscript.com/text-compare")

await page.locator("textarea[placeholder='Paste one version of the text here.']").fill("Welcome to Automation Testing using Playwright")

await page.keyboard.press("Control+A")

await page.waitForTimeout(2000)

await page.keyboard.press("Control+C")

await page.waitForTimeout(2000)

await page.keyboard.down("Tab")
await page.keyboard.up("Tab")

await page.waitForTimeout(2000)

await page.keyboard.press("Control+V")

await page.waitForTimeout(5000)

})