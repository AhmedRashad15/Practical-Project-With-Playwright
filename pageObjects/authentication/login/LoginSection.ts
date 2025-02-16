import { Locator, Page } from "playwright";
export class LoginSection
{

    private readonly page:Page
    private readonly emailAddressField :Locator;
    private readonly loginPasswordField : Locator;
    private readonly loginBtn:Locator
    private readonly loginHeaderText:Locator
    private readonly loginErrMessage:Locator
    constructor(page:Page)
    {
        this.page=page
        this.emailAddressField=page.locator("[data-qa='login-email']")
        this.loginPasswordField=page.locator("[data-qa='login-password']")
        this.loginBtn=page.getByRole("button",{name:"Login"})
        this.loginHeaderText=page.locator(".login-form h2")
        this.loginErrMessage=page.getByText("Your email or password is incorrect!")
    }

    async login(emailAddress:string,password:string) :Promise<void>
    {
        await this.emailAddressField.fill(emailAddress)
        await this.loginPasswordField.fill(password)
        await this.loginBtn.click()
    }
    async getLoginHeaderTextLoc()
    {
        return this.loginHeaderText
    }
    async getErrorMessageLoc()
    {
        return this.loginErrMessage
    }
}