import { Page } from "@playwright/test";
import { LoginSection } from "./LoginSection";
import { SignUpSection } from "./SignUpSection";

export class LoginPage
{
    private readonly loginSection: LoginSection;
    private readonly signUpSection: SignUpSection;
    private readonly page:Page
constructor(page:Page)
{
 this.page=page
 this.loginSection=new LoginSection(page)
 this.signUpSection=new SignUpSection(page)
}


async login(email:string,password:string)
{
await this.loginSection.login(email,password)
}

async signUpUser(username:string,email:string)
{
    await this.signUpSection.signUpUser(username,email)
    await this.page.waitForLoadState("networkidle")
}
async getLoginHeaderTextLoc()
{
     return await this.loginSection.getLoginHeaderTextLoc()
}
async getErrorMessageLoc()
{
    return await this.loginSection.getErrorMessageLoc()
}



}