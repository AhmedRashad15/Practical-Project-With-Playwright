import { Locator, Page } from "@playwright/test"
import { ProductData } from "../../intefaces/Product.interface"

export class ProductsPage
{
    private readonly page:Page
    private readonly productsHeader:Locator
    private readonly allProducts:Locator 
    private readonly productSearchField:Locator  
    private readonly searchBtn:Locator 

    constructor(page:Page)
    {
        this.page=page
        this.productsHeader=page.getByRole("heading",{name:"All Products"})
        this.allProducts=page.locator(".product-image-wrapper")
        this.productSearchField=page.getByPlaceholder("Search Product")
        this.searchBtn=page.locator("#submit_search")
  
    }

  /**
     * Returns a Locator for the products header element.
     *
     * @return The Locator for the products header.
     */
  async  getProductsHeader():Promise<Locator> {
    return this.productsHeader;
}

/**
 * Returns a Locator for the list of all products.
 *
 * @return The Locator for the list of all products.
 */
 async getProductsList():Promise<Locator> {
    return this.allProducts
}

/**
 * Clicks the "View Product" button for a specific product.
 *
 * @param productName An object containing the product name used to identify the correct button.
 * @returns A Promise that resolves when the click action is complete.
 * @throws Error If no matching product is found.
 */
  async clickOnViewProductBtn( productName:string):Promise<void> {
     await (await this.getSpecificProduct(productName)).getByRole("link",{name:"View Product"
    }).click()
}


async getSpecificProduct(productName:string)
{
  return await this.allProducts.filter({hasText:productName})
}
async searchProduct(productName:string):Promise<void>
{
  await this.productSearchField.fill(productName)
  await this.searchBtn.click()
}

async addProductToCart(productName:string):Promise<void>
{
  await (this.allProducts.filter({hasText:productName}).locator(".productinfo .add-to-cart").click())
}}




