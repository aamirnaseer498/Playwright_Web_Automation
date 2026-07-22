import {test, expect} from "@playwright/test"

test("Test1 @sanity", async ({page})=>{

    console.log("This is test 1")

})

test("Test2 @regression", async ({page})=>{

    console.log("This is test 2")

})

test("Test2 @sanity @regression", async ({page})=>{

    console.log("This is test 3")

})