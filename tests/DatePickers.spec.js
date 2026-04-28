const {test, expect}= require("@playwright/test")

// test("Manually Enter Date Value", async ({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator("#datepicker").fill("09/19/2026")

//     await page.waitForTimeout(5000)

// })

test("Select Date by Interacting Elements", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const year= "2026"
    const month= "September"
    const day= "19"

    await page.locator("#datepicker").click()

    while(true){

        const currentYear= await page.locator(".ui-datepicker-year").textContent()
        const currentMonth= await page.locator(".ui-datepicker-month").textContent()

        if(currentYear==year && currentMonth==month){
            break
        }

        await page.locator("a[title='Next']").click()

        await page.waitForTimeout(1000)

    }

    const dates= await page.$$("//a[@class='ui-state-default']")

    for(const date of dates){

        if(await date.textContent()==day){
            await date.click()
            break
        }

    }

    await page.waitForTimeout(5000)

})