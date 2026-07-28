exports.HomePage = class HomePage {

    constructor(page){

        this.page= page
        this.productList= "//div[@id='tbodyid']/div/div/div/h4/a"
        this.addToCartButton= "//a[normalize-space()='Add to cart']"
        this.cart= "#cartur"

    }

    async addProductToCard(productName){

        const productList= await this.page.$$(this.productList)

        for(const product of productList){

            if(productName === await product.textContent()){

                await product.click()
                break

            }

        }

        await this.page.on("Dialog", async dialog=>{

            if(dialog.message().includes("added")){

                await dialog.accept()
            }

        })

        await this.page.waitForTimeout(3000)

        await this.page.locator(this.addToCartButton).click()

    }

    async goToCart(){

        await this.page.locator(this.cart).click()

    }

}