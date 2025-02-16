import { Locator, Page } from "playwright";

export class AccountCreatedPage
{

    private readonly page:Page
    private readonly accountCreated:Locator
    private readonly continueBtn:Locator

    constructor(page:Page)
    {
        this.page=page
        this.accountCreated=page.locator(".title b")
        this.continueBtn=page.getByRole("link",{name:"Continue"})
    }

    async getAccountCreatedMessage() :Promise<string|null>
    {
        return  await this.accountCreated.textContent()
    }

    async clickOnContinueBtn():Promise<void>
    {
        await this.continueBtn.click()
    }


}