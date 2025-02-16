import {test,expect} from "@playwright/test"
import { LoginPage } from "../pageObjects/authentication/login/LoginPage"
import {JsonFileReader} from "./utilites/JsonFileReader"
import { LoginTestData } from "../intefaces/LoginUser.interface"
import { HomePage } from "../pageObjects/home/HomePage"
import { base } from "@faker-js/faker/."

const  jsonFilePath="./tests/data/LoginData.json"
const jsonReader=new JsonFileReader()

test.beforeEach("Login Before Logout",async ({page})=>
    {
        const homePage=new HomePage(page)
        const loginPage=new LoginPage(page)
        const loginData:LoginTestData=await jsonReader.readJsonFile<LoginTestData>(jsonFilePath)
        await homePage.goToLoginPage()
        await loginPage.login(loginData.validLogin.emailAddress,loginData.validLogin.password)


    })
test("Verify that SignUp/Login Link Appears after logout",async({page},testInfo)=>
    {
        const homePage=new HomePage(page)
        await homePage.logOut()
        await expect(await homePage.getLogin_SignUPLink()).toBeVisible()
        const baseUrl=testInfo.project.use.baseURL;;
        await expect(await page.waitForURL(`${baseUrl}/login`)).toBeTruthy
    })


