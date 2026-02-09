const {test, expect}= require("@playwright/test")


test("Frames using Frame Object", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frames= await page.frames()

    console.log("Total Available Frames:", frames.length)

    for(let frame of frames){
        console.log("Frame Name:", await frame.title())
        console.log("Frame URL:", await frame.url())
    }

    const frame= await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame.locator("input[name='mytext1']").fill("Playwright")

    await page.close()

})

test("Frames using Frame Locator", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frames= await page.frames()

    console.log("Total Available Frames:", frames.length)

    for(let frame of frames){
        console.log("Frame Name:", await frame.title())
        console.log("Frame URL:", await frame.url())
    }

    const frame= await page.frameLocator("frame[src='frame_1.html']")

    await frame.locator("input[name='mytext1']").fill("Playwright")

    await page.close()

})

test("Nested Frames", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frames= await page.frames()

    console.log("Total Available Frames:", frames.length)

    for(let frame of frames){
        console.log("Frame Name:", await frame.title())
        console.log("Frame URL:", await frame.url())
    }

    const frame= await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"})

    await frame.locator("input[name='mytext3']").fill("Playwright")

    const childFrames= frame.childFrames()

    console.log("Total Child Frames:", childFrames.length)
    console.log("Child Frame Name:", await childFrames[0].title())
    console.log("Child Frame URL:", await childFrames[0].url())

    await childFrames[0].locator("//*[@id='i9']/div[3]/div").check()

    await page.close()

})