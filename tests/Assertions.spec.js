const {test, expect}= require("@playwright/test")


test("Hard Assertion", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    // Assertion 1
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F")

    // Assertion 2
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    // Assertion 3
    let headerLogo= await page.locator(".header-logo")
    await expect(headerLogo).toBeVisible()

    // Assertion 4
    let searchField= await page.getByPlaceholder("Search store")
    await expect(searchField).toBeEnabled()

    // Assertion 5
    let maleRadioButton= await page.locator("#gender-male")
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    let feMaleRadioButton= await page.locator("#gender-female")
    await expect(feMaleRadioButton).not.toBeChecked()

    let newsletterCheckBoxButton= await page.locator("#NewsLetterSubscriptions_0__IsActive")
    await expect(newsletterCheckBoxButton).toBeChecked()

    // Assertion 6
    let registerButton= await page.locator("#register-button")
    await expect(registerButton).toHaveAttribute("name","register-button")

    // Assertion 7
    let registerText= await page.locator("div[class='page-title'] h1")
    await expect(registerText).toHaveText("Register")
    await expect(registerText).toContainText("ter")

    // Assertion 8
    let emailField= await page.locator("#Email")
    await emailField.fill("abc@gmail.com")
    await expect(emailField).not.toBeEmpty()
    await expect(emailField).toHaveValue("abc@gmail.com")

    // Assertion 9
    let genderContainer= await page.locator("#gender span")
    await expect(genderContainer).toHaveCount(2)

    page.close()

})

test("Soft Assertion", async ({page})=>{

    await page.goto("https://www.demoblaze.com/")

    // Assertion 1

    let url= await page.url()
    await expect.soft(url).toHaveURL("https://www.blazemeter.com/")

    let title= await page.title()
    await expect.soft(title).toHaveTitle("Store 123")

    let headerTitle= await page.locator("#nava")
    await expect(headerTitle).toBeVisible()

    await page.close()

})