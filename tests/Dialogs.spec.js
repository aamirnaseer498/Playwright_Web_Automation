const {test, expect}= require("@playwright/test")

test("Simple Alert with OK", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

// Enabling dialog window handler
await page.on("dialog", async dialog=> {

console.log(dialog.type().toString())
await expect(dialog.type()).toContain("alert")
console.log(dialog.message().toString())
await expect(dialog.message()).toContain("I am an alert box")
await dialog.accept()

})

await page.locator("#alertBtn").click()

await page.close()

})

test("Confirmation Alert with OK/Cancel", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

// Enabling dialog window handler
await page.on("dialog", async dialog=> {

console.log(dialog.type().toString())
await expect(dialog.type()).toContain("confirm")
console.log(dialog.message().toString())
await expect(dialog.message()).toContain("Press a button")
await dialog.dismiss()

})

await page.locator("#confirmBtn").click()

await page.close()

})

test("Prompt Alert with Input Field", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

// Enabling dialog window handler
await page.on("dialog", async dialog=> {

console.log(dialog.type().toString())
await expect(dialog.type()).toContain("prompt")
console.log(dialog.message().toString())
await expect(dialog.message()).toContain("enter your name")
console.log(dialog.defaultValue().toString())
await expect(dialog.defaultValue()).toContain("Harry Potter")
await dialog.accept("Aamir Naseer")

})

await page.locator("#promptBtn").click()

await page.close()

})