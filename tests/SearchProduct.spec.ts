import {test,expect} from "@playwright/test"
import { HomePage } from "../pageObjects/home/HomePage"
import { ProductsPage } from "../pageObjects/products/ProductsPage"
import { ProductData,Product } from "../intefaces/Product.interface"
import { JsonFileReader } from "./utilites/JsonFileReader"


test("Verify Search for existing product name",async({page})=>
    {
        const homePage=new HomePage(page)
        const productPage=new ProductsPage(page)
        await homePage.goToHomePage()
        await homePage.goToProductsPage()
        const jsonReader=new JsonFileReader()
        const productData:Product=await jsonReader.readJsonFile<Product>("./tests/data/productDetails.json")
        await productPage.searchProduct(productData.validProduct.productName)
        const productNames=await (await productPage.getProductsList()).locator(".productinfo p").allTextContents()
        console.log(productNames)
        for (const productName of productNames){
         await expect(productName.toLowerCase()).toContain(productData.validProduct.productName.toLowerCase())
        }




    })

    test("Verify Search for not existing product",async ({page})=>
        {

        const homePage=new HomePage(page)
        const productPage=new ProductsPage(page)
        await homePage.goToHomePage()
        await homePage.goToProductsPage()
        const jsonReader=new JsonFileReader()
        const productData:Product=await jsonReader.readJsonFile<Product>("./tests/data/productDetails.json")
        await productPage.searchProduct(productData.invalidProduct.productName)
        const productsList= await productPage.getProductsList();
        await expect(productsList).toBeHidden()



        })