
const {test, expect} = require ("@playwright/test")


// Example 1

test ("Locators1", async ({page})=>{

await page.goto("https://www.demoblaze.com/index.html")

await page.locator("id=login2").click()

await page.locator("#loginusername").fill("aamirnaseer")

await page.locator("#loginpassword").fill("test@123")

await page.locator("//button[normalize-space()='Log in']").click()

let logOutButton= await page.locator("//a[@id='logout2']")
await expect(logOutButton).toBeVisible()

await page.close()

})



// Example 2

test ("Locators2", async ({page})=>{

await page.goto("https://www.demoblaze.com/index.html")

let links= await page.$$("//a")

for (let link of links){

    console.log(await link.textContent())

}

await page.close()

})



// Example 3

test ("Locators3", async ({page})=>{

await page.goto("https://www.demoblaze.com/index.html")

await page.waitForSelector("//div[@id='tbodyid']//div//h4//a")

let products= await page.$$("//div[@id='tbodyid']//div//h4//a")

for (let product of products){

    let productName= await product.textContent()
    console.log(productName)

}

await page.close()

})