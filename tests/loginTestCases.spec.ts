import {test,expect} from "@playwright/test"
import path = require("path")
import * as fs from "fs/promises"
import { LoginTestData } from "../intefaces/LoginUser.interface";
import { HomePage} from "../pageObjects/home/HomePage";
import { LoginSection } from "../pageObjects/authentication/login/LoginSection";
import { JsonFileReader } from "./utilites/JsonFileReader";
import { LoginPage } from "../pageObjects/authentication/login/LoginPage";
import { log } from "util";


let loginUserData: LoginTestData;
test.beforeAll("Navigate to Login Page and Read Login JSON File",async({})=>
    {
        
        const dataFilePath =  "./tests/data/LoginData.json"; 
        const reader = new JsonFileReader()
        loginUserData = await reader.readJsonFile<LoginTestData>(dataFilePath); 
       

        


    })
test("Login With Valid Credentials",async({page})=>
    {
       const homePage= new HomePage(page)
       const loginPage=new LoginPage(page)
        await homePage.goToLoginPage()
        await loginPage.login(loginUserData.validLogin.emailAddress,loginUserData.validLogin.password)
        await expect(await homePage.getDeleteAccountBtn()).toBeVisible()
    })

    test("Login With Invalid Credentials",async({page})=>
        {
            const homePage=new HomePage(page)
           const loginPage=new LoginPage(page)
            await homePage.goToLoginPage()
            await expect(await loginPage.getLoginHeaderTextLoc()).toHaveText("Login to your account")
            await loginPage.login(loginUserData.invalidLogin.emailAddress,loginUserData.invalidLogin.password)            
            await expect(await loginPage.getErrorMessageLoc()).toBeVisible()
        })


        test("Login With Empty Credentials",async({page})=>
            {
               const  homePage=await new HomePage(page)
               const loginPage=new LoginPage(page)
                await homePage.goToLoginPage()
                await expect(await loginPage.getLoginHeaderTextLoc()).toHaveText("Login to your account")
                await loginPage.login(loginUserData.emptyCredentials.emailAddress,loginUserData.emptyCredentials.password)            
                await expect(await homePage.getLogin_SignUPLink()).toBeVisible()
            })



