import {test, expect} from "@playwright/test"

// test("Test 1", async ({page})=>{

//     console.log("This is test 1")

// })

// test("Test 2", async ({page})=>{

//     console.log("This is test 2")

// })

// test("Test 3", async ({page})=>{

//     console.log("This is test 3")

// })

// test("Test 4", async ({page})=>{

//     test.fixme()

//     console.log("This is test 4")

// })

// test("Test 5", async ({page, browserName})=>{

//     console.log("This is test 5")

//     if(browserName === "firefox"){
//         test.fail()
//     }

// })

test("Test 6", async ({page})=>{

    test.slow()

    await page.goto("https://www.demoblaze.com/index.html")

    console.log("This is test 6")

})