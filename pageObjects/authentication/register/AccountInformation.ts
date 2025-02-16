import { Locator, Page } from "playwright/test"

export class AccountInformation {
    private readonly page: Page
    private readonly signUpHeader: Locator
    private readonly accountInformationHeader: Locator
    private readonly titleType: Locator
    private readonly name: Locator
    private readonly password: Locator
    private readonly dayOfDateOfBirth: Locator
    private readonly monthOfDateOfBirth: Locator
    private readonly yearOfDateOfBirth
    private readonly signUpForNewsletterCheckBox: Locator
    private readonly receiveSpecialOffersCheckBox: Locator


    constructor(page: Page) {
        this.page=page
        this.signUpHeader = page.getByRole("heading", { name: "New User Signup!" })
        this.accountInformationHeader = page.getByText("Enter Account Information")
        this.titleType = page.locator(".radio-inline")
        this.name = page.locator("#name")
        this.password = page.locator("#password")
        this.dayOfDateOfBirth = page.locator("#days")
        this.monthOfDateOfBirth = page.locator("#months")
        this.yearOfDateOfBirth = page.locator("#years")
        this.signUpForNewsletterCheckBox = page.locator("#newsletter")
        this.receiveSpecialOffersCheckBox = page.locator("#optin")
    }


    /**
     * Retrieves the text content of the sign-up header element.
     *
     * @returns {Promise<string>} - A Promise that resolves with the text content of the sign-up header.
     *
     * @throws {Error} - If the sign-up header element is not found.
     */
    async getSignUpHeader() {
        return this.signUpHeader
    }

    /**
     * Retrieves the account information header element.
     *
     * @returns {Promise<ElementHandle>} - A Promise that resolves with the account information header element handle.
     *
     * @throws {Error} - If the account information header element is not found.
     */
    async getAccountInformationHeader() {
        return this.accountInformationHeader;
    }

    /**
     * Selects the specified title type option in the title type dropdown.
     *
     * @param {string} titleTypeOption - The label of the title type option to select.
     * @returns {Promise<void>} - Resolves when the title type option is selected.
     *
     * @throws {Error} - If the title type option is not found.
     */
    async fillTitleType(titleTypeOption: string): Promise<void> {
      await  this.titleType.getByLabel(titleTypeOption).click()
    }

    /**
     * Fills the name input field with the provided username.
     *
     * @param {string} userName - The username to enter in the name field.
     * @returns {Promise<void>} - Resolves when the name field is filled.
     *
     * @throws {Error} - If the name input field is not found.
     */
    async fillName(userName: string): Promise<void> {
        await this.name.fill(userName)
    }


    /**
     * Fills the password input field with the provided password.
     *
     * @param {string} password - The password to enter in the password field.
     * @returns {Promise<void>} - Resolves when the password field is filled.
     *
     * @throws {Error} - If the password input field is not found.
     */
    async fillPassword(password: string): Promise<void> {
        await this.password.fill(password)
    }

    /**
     * Selects the specified day from the date of birth dropdown.
     *
     * @param {string} value - The value of the day to be selected (e.g., "01", "15", "31").
     * @returns {Promise<void>} - Resolves when the day is selected.
     *
     * @throws {Error} - If the day of birth dropdown or the specified day option is not found.
     */
    async selectDay(value: string): Promise<void> {
        await this.dayOfDateOfBirth.selectOption({ value: value })
    }


    /**
     * Selects the specified month from the date of birth dropdown.
     *
     * @param {string} value - The value of the month to be selected (e.g., "01", "02", "12").
     * @returns {Promise<void>} - Resolves when the month is selected.
     *
     * @throws {Error} - If the month of birth dropdown or the specified month option is not found.
     */
    async selectMonth(value: string): Promise<void> {
        await this.monthOfDateOfBirth.selectOption({ value: value })
    }

    /**
     * Selects the specified year from the date of birth dropdown.
     *
     * @param {string} value - The value of the year to be selected (e.g., "1990", "2000", "2023").
     * @returns {Promise<void>} - Resolves when the year is selected.
     *
     * @throws {Error} - If the year of birth dropdown or the specified year option is not found.
     */
    async selectYear(value: string): Promise<void> {
        await this.yearOfDateOfBirth.selectOption({ value: value })
    }

    /**
     * Checks the "Sign Up for Newsletter" checkbox.
     *
     * @returns {Promise<void>} - Resolves when the checkbox is checked.
     *
     * @throws {Error} - If the "Sign Up for Newsletter" checkbox is not found.
     */
    async checkNewsletter(): Promise<void> {
       await this.signUpForNewsletterCheckBox.check()
    }

    /**
     * Checks the "Receive Special Offers" checkbox.
     *
     * @returns {Promise<void>} - Resolves when the checkbox is checked.
     *
     * @throws {Error} - If the "Receive Special Offers" checkbox is not found.
     */
    async checkReceiveSpecialOffers(): Promise<void> {
        await this.receiveSpecialOffersCheckBox.check()
    }

}