const {test, expect}= require("@playwright/test")

test("Extracting Rows & Columns from Table", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const tableColumns= await page.locator("#productTable thead th")
    console.log("Total Columns: " + await tableColumns.count())
    expect (await tableColumns.count()).toBe(4)

    const tableRows= await page.locator("#productTable tbody tr")
    console.log("Total Rows: " + await tableRows.count())
    expect (await tableRows.count()).toBe(5)

    await page.close()

})

test("Selecting a item from Table", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const tableRows= await page.locator("#productTable tbody tr")

    const matchedRow= await tableRows.filter({
        hasText: "Laptop"
    })

    await matchedRow.locator("input").check()

    await expect(matchedRow.locator("input")).toBeChecked()

    await page.close()

})

test("Selecting multiple items from Table", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const tableRows= await page.locator("#productTable tbody tr")

    await selectProduct(tableRows, "Smartphone")
    await selectProduct(tableRows, "Laptop")
    await selectProduct(tableRows, "Smartwatch")

    await page.close()

})

async function selectProduct(rows, productName){

    const matchedRow= await rows.filter({
        hasText: productName
    })

    await matchedRow.locator("input").check()

    await expect(matchedRow.locator("input")).toBeChecked()

}

// npx playwright test Tables.spec.js --project=chromium --headed