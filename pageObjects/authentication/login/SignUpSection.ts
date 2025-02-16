import { Locator, Page } from "playwright/test"


export class SignUpSection {
    private readonly page: Page
    private readonly userNameField: Locator
    private readonly emailAddress: Locator
    private readonly signUpBtn: Locator

    constructor(page: Page) {

        this.page = page
        this.userNameField = page.getByPlaceholder("Name")
        this.emailAddress = page.locator("[data-qa='signup-email']")
        this.signUpBtn = page.getByRole('button', { name: "Signup" })
    }



   
    /**
     
     * Initiates the user signup process by filling in the username and email fields and clicking the signup button.
     * @param {string} emailAddress - The email address to be entered in the email field.
    
     * @returns {Promise<void>} - Resolves when the username and email fields are filled and the signup button is clicked.
    
     * @throws {Error} - If any of the input fields or the signup button are not found, or if an error occurs during interaction with the page elements.
     */

    async signUpUser(userNameValue: string, emailAddress: string): Promise<void> {
        await this.userNameField.fill(userNameValue)
        await this.emailAddress.fill(emailAddress)
        await this.signUpBtn.click()
    }


}