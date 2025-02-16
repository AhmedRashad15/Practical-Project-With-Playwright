import {test,expect} from "@playwright/test"
import { ProductDetailsPage } from "../pageObjects/products/ProductDetailsPage"
import { ProductsPage } from "../pageObjects/products/ProductsPage"
import { Product, ProductData } from "../intefaces/Product.interface"
import { JsonFileReader } from "./utilites/JsonFileReader"
import { HomePage } from "../pageObjects/home/HomePage"



test("Verify product details accuracy",async({page})=>
{
const homePage=new HomePage(page)
const productPage= new ProductsPage(page)
const productDetailsPage=new ProductDetailsPage(page)
const jsonFileReader=new JsonFileReader()
const productData:Product=await jsonFileReader.readJsonFile<Product>("./tests/data/productDetails.json")
await homePage.goToHomePage()
await homePage.goToProductsPage()
await expect((await productPage.getProductsHeader())).toBeVisible()
await expect(await((await productPage.getProductsList()).count())).toBeGreaterThan(3)
await productPage.clickOnViewProductBtn(productData.validProduct.productName)
await expect(await productDetailsPage.getProductName()).toContainText(productData.validProduct.productName)
await expect(await productDetailsPage.getProductAvailability()).toContainText(productData.validProduct.availability)

})