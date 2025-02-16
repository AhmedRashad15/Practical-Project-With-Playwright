import {test,expect, request} from '@playwright/test'
import { faker } from '@faker-js/faker'
import { RegisterUser } from '../intefaces/RegisterUser.Inteface'
import {JsonFileReader} from "./utilites/JsonFileReader"
import { HomePage } from '../pageObjects/home/HomePage'
import { signUpPage } from '../pageObjects/authentication/register/signUpPage'
import { AccountCreatedPage } from '../pageObjects/authentication/AccountCreatedPage'
import { DeleteAccountPage} from '../pageObjects/authentication/DeleteAccountPage'
import { LoginPage } from '../pageObjects/authentication/login/LoginPage'



let existingEmail:string;
// test.beforeAll("Register With API",async({browser})=>
//     {
//         const uniqueEmail = faker.internet.email();
//         existingEmail = uniqueEmail;
//         await console.log(existingEmail)
//         dataFilePath='./tests/data/userData.json'
//         const apiContext=await request.newContext()
//         userData= await reader.readJsonFile<RegisterUser>(dataFilePath)
        
//         const response=await apiContext.post("https://automationexercise.com/api/createAccount",
//             {
//                 data:{
//                 ...userData.users.existingUser,
//                 email:uniqueEmail,
//                 }
//             })    
//             await expect(response.status()).toBe(200);
//             const responseBody = await response.json(); // Parse JSON response
//            await expect(responseBody.message).toBe('User created!');

    
//     })
test.describe.configure({mode:"serial"})
test("SignUp With Valid Credientials",async ({page})=>
    {
        const randomUserName=faker.internet.username()
        const randomEmail=faker.internet.email()
        existingEmail=randomEmail
        await console.log(existingEmail)
        const homePage= new HomePage(page)
        const loginPage= new LoginPage(page)
        const registerPage =new signUpPage(page)

        //read the json file 
        const reader=new JsonFileReader()
       const userData : RegisterUser= await reader.readJsonFile<RegisterUser>('./tests/data/userData.json')
        // save json file into userData Object
        await homePage.goToHomePage()
        await homePage.goToLoginPage()
        await expect((await registerPage.getSignUpHeader())).toHaveText("New User Signup!")
        await loginPage.signUpUser(randomUserName,randomEmail)
        await expect(await registerPage.getAccountInformationHeader()).toBeVisible()
        await registerPage.register(userData);
            
        const accountCreatedPage=new AccountCreatedPage(page)
        await expect(await accountCreatedPage.getAccountCreatedMessage()).toEqual("Account Created!")
        await accountCreatedPage.clickOnContinueBtn()
        await expect(await homePage.getLoggedInLink()).toHaveText(" Logged in as " +randomUserName)
       await homePage.clickOnDeleteAccountBtn()

       const deleteAccountPage=new DeleteAccountPage(page)
       await expect(await deleteAccountPage.getSuccessMessageLocator()).toHaveText("Account Deleted!")
        await deleteAccountPage.clickOnContinueBtn()
       }
    
    )

   