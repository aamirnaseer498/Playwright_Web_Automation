const {test, expect} = require("@playwright/test")

test("Upload Single File", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("#singleFileInput").setInputFiles("tests/UploadFiles/qa.png")

await page.locator("form[id='singleFileForm'] button[type='submit']").click()

await page.waitForTimeout(5000)

})

test("Upload Multiple Files", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("#multipleFilesInput").setInputFiles(["tests/UploadFiles/qa.png", "tests/UploadFiles/backiee-345622.jpg", "tests/UploadFiles/1000431612.jpeg"])

await page.locator("form[id='multipleFilesForm'] button[type='submit']").click()

await page.waitForTimeout(5000)

})