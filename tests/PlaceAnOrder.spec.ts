import {test,expect} from "@playwright/test"
import { HomePage } from "../pageObjects/home/HomePage"
import { LoginPage } from "../pageObjects/authentication/login/LoginPage"
import { JsonFileReader } from "./utilites/JsonFileReader"
import { LoginTestData } from "../intefaces/LoginUser.interface"
import { ProductsPage } from "../pageObjects/products/ProductsPage"
import { ProductData } from "../intefaces/Product.interface"
import { CartPage } from "../pageObjects/checkOut/CartPage"
import exp = require("constants")
import {  PaymentInfo } from "../intefaces/paymentInfo.interface"
import { PaymentPage } from "../pageObjects/checkOut/PaymentPage"

test ("Place Order : Login Before Checkout",async({page})=>
    {
        const jsonReader=new JsonFileReader()
        const homePage=new HomePage(page)
        const loginPage=new LoginPage(page)
        const productPage=new ProductsPage(page)
        const cartPage=new CartPage(page)
        const paymentPage=new PaymentPage(page)
        const comment ="Place An Order"
        await homePage.goToHomePage()
        await homePage.goToLoginPage()
        const loginData:LoginTestData=await jsonReader.readJsonFile<LoginTestData>("./tests/data/LoginData.json")
        await loginPage.login(loginData.validLogin.emailAddress,loginData.validLogin.password)
        await expect(await homePage.getLoggedInLink()).toBeVisible()
        await homePage.goToProductsPage()
        const productData:ProductData=await jsonReader.readJsonFile<ProductData>("./tests/data/productDetails.json")
        await expect(await productPage.getSpecificProduct(productData.productName)).toBeVisible()
        await productPage.addProductToCart(productData.productName)
        await homePage.goToCartPage()
        await expect(await cartPage.getShoppingCartBreadCrumb()).toBeVisible()
        await cartPage.clickOnProceedToCheckOut()
        await cartPage.writeCommentOnOrder(comment)
        await cartPage.clickOnPlaceOrderBtn()
        const paymentInfo:PaymentInfo=await jsonReader.readJsonFile<PaymentInfo>("./tests/data/cardDetails.json")
        await paymentPage.payAndConfirmOrder(paymentInfo)
        await expect((await paymentPage.getOrderSuccessAlert())).toHaveText("Order Placed!")
        await page.pause()








    })