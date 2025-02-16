import { sign } from "crypto";
import { Locator, Page } from "playwright";

export class HomePage
{
    private readonly page:Page
    private readonly loggedInLink:any
    private readonly deleteAccBtn:Locator
    private readonly logOutLink:Locator
    private readonly signUp_LoginLink:Locator
    private readonly productsLink:Locator
    private readonly login_SignUpLink:Locator
    private readonly cartLink:Locator
    
    constructor(page:any)
    {
        this.page=page
        this.loggedInLink=page.locator("//I[@class='fa fa-user']/parent::a")
        this.deleteAccBtn=page.getByRole("link",{name:" Delete Account"})
        this.logOutLink=page.getByRole("link",{name:" Logout"})
        this.signUp_LoginLink=page.locator("[href='/login']")
        this.productsLink=page.getByRole("link",{name:" Products"})
        this.login_SignUpLink=page.getByRole("link",{name:" Signup / Login"})
        this.cartLink=page.getByRole("link",{name:"Cart"})
    }


    async goToHomePage():Promise<void>
    {
        await this.page.goto("/")
        await this.page.waitForLoadState("networkidle")

    }
    async goToCartPage():Promise<void>
    {
        await this.cartLink.click()
        await this.page.waitForLoadState("networkidle")
    }
    async goToProductsPage():Promise<void>
    {
        await this.productsLink.click()
    }
    async goToLoginPage(): Promise<void> {
        await this.login_SignUpLink.click()
        await this.page.waitForLoadState("networkidle")
    }

    async getLoggedInLink():Promise<Locator>
    {
        return this.loggedInLink
    }

    async clickOnDeleteAccountBtn()
    {
        await this.deleteAccBtn.click()
    }

    async getDeleteAccountBtn():Promise<Locator>
    {
        return this.deleteAccBtn
    }
    
    async logOut(){
        await this.logOutLink.click()
    }

    async getLogin_SignUPLink():Promise<Locator>
    {
        return this.signUp_LoginLink
    }

    
}