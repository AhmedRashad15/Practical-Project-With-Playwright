import { Locator, Page } from "playwright";

export class ProductDetailsPage
{

private readonly page:Page
private readonly productInformation:Locator
private readonly productName:Locator
private readonly productPrice:Locator
private readonly productCategory:Locator
private readonly productAvailablity:Locator
private readonly productCondition:Locator
private readonly productBrand:Locator




constructor(page:Page)
{
    this.page=page
    this.productInformation=page.locator(".product-information")
    this.productName=this.productInformation.getByRole("heading")
    this.productCategory=this.productInformation.getByRole("paragraph").nth(1)
    this.productPrice=this.productInformation.locator("span span")
    this.productAvailablity=this.productInformation.locator("p").filter({hasText:"Availability"})
    this.productCondition=this.productInformation.locator("p").filter({hasText:"Condition"})
    this.productBrand=this.productInformation.locator("p").filter({hasText:"Brand"})
}

/**
 * Returns a Promise that resolves to the Locator for the element containing all product information.
 * @returns A Promise that resolves to the Locator for the product information container.
 */
async getAllProductInformationElement(): Promise<Locator> {
    return this.productInformation;
}

/**
 * Returns a Promise that resolves to the Locator for the product name element.
 * @returns A Promise that resolves to the Locator for the product name.
 */
async getProductName(): Promise<Locator> {
    return this.productName;
}

/**
 * Returns a Promise that resolves to the Locator for the product price element.
 * @returns A Promise that resolves to the Locator for the product price.
 */
async getProductPrice(): Promise<Locator> {
    return this.productPrice;
}

/**
 * Returns a Promise that resolves to the Locator for the product availability element.
 * @returns A Promise that resolves to the Locator for the product availability.
 */
async getProductAvailability(): Promise<Locator> {
    return this.productAvailablity;
}

/**
 * Returns a Promise that resolves to the Locator for the product condition element.
 * @returns A Promise that resolves to the Locator for the product condition.
 */
async getProductCondition(): Promise<Locator> {
    return this.productCondition;
}

/**
 * Returns a Promise that resolves to the Locator for the product brand element.
 * @returns A Promise that resolves to the Locator for the product brand.
 */
async getProductBrand(): Promise<Locator> {
    return this.productBrand;
}


}