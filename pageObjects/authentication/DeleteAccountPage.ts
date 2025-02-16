import { Locator, Page } from "playwright";

export class DeleteAccountPage
{

    private readonly page:Page
    private readonly deleteAccHeader:Locator
    private readonly continueBtn:Locator

    constructor(page:Page)
    {
        this.page=page
        this.deleteAccHeader=page.locator("[data-qa='account-deleted'] b")
        this.continueBtn=page.getByRole("link",{name:"Continue"})
    }

    async getSuccessMessageLocator() :Promise<Locator>
    {
        return this.deleteAccHeader
    }

    async clickOnContinueBtn():Promise<void>
    {
        await this.continueBtn.click()
    }
}