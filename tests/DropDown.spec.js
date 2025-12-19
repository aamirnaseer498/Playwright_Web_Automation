const {test, expect}= require("@playwright/test")

// test("Drop Down 1", async ({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator("#country").selectOption({label: "Germany"})

//     await page.close()

// })

// test("Drop Down 2", async ({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator("#country").selectOption("Germany")

//     await page.close()

// })

// test("Drop Down 3", async ({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator("#country").selectOption({value: "uk"})

//     await page.close()

// })

// test("Drop Down 4", async ({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator("#country").selectOption({index: 6})

//     await page.close()

// })

test("Drop Down 5", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const options= await page.$$("#country option")

    for(const option of options){

        let value= await option.textContent()
        value= value.trim()
    
        console.log(value)

        if(value.includes("Australia")){
            await page.selectOption("#country", value)
            break
        }
    
    }

    await page.close()

})

// test("Drop Down Assertion 1", async ({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     const options= await page.locator("#country option")

//     console.log("Number of options: " + await options.count())

//     await expect(options).toHaveCount(10)

//     await page.close()

// })

// test("Drop Down Assertion 2", async ({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     const options= await page.locator("#country option")

//     await console.log((await options.allTextContents()).toString())

//     await expect(((await options.allTextContents()).toString().includes("China"))).toBeTruthy()

//     await page.close()

// })

// test("Drop Down Assertion 3", async ({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     let status= false

//     const options= await page.$$("#country option")

//     for(const option of options){

//         let value= await option.textContent()
//         console.log(value)
        
//         if(value.includes("Canada")){
//             status= true
//             break
//         }

//     }

//     await expect(status).toBeTruthy()

//     await page.close()

// })