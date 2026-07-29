exports.CartPage = class CartPage {

    constructor(page){

        this.page = page
        this.noOfProducts= "//tbody//tr//td"

    }

    async checkProductInCart(productName){

        const productList= await this.page.$$(this.noOfProducts)

        for(const product of productList){

            console.log(await product.textContent())

            if(productName === await product.textContent()){
                return true
                break
            }

        }

    }

}