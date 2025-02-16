import { Locator, Page } from "playwright"

export class AddressInformation {
    private readonly page: Page
    private readonly firstName: Locator
    private readonly lastName: Locator
    private readonly company: Locator
    private readonly address: Locator
    private readonly country: Locator
    private readonly state: Locator
    private readonly city: Locator
    private readonly zipCode: Locator
    private readonly mobileNumber: Locator
    private readonly createAccountBtn: Locator

    constructor(page: Page) {
        this.page=page
        this.firstName = page.locator("#first_name")
        this.lastName = page.locator("#last_name")
        this.company = page.locator("#company")
        this.address = page.locator("#address1")
        this.country = page.locator("#country")
        this.state = page.locator("#state")
        this.city=page.locator("#city")
        this.zipCode = page.locator("#zipcode")
        this.mobileNumber = page.locator("#mobile_number")
        this.createAccountBtn = page.getByRole("button", { name: "Create Account" })
    }

    /**
 * Fills the first name input field with the provided name.
 *
 * @param {string} firstName - The user's first name to be entered.
 * @returns {Promise<void>} - Resolves when the first name field is filled.
 *
 * @throws {Error} - If the first name input field is not found.
 */
    async fillFirstName(firstName: string): Promise<void> {
      await  this.firstName.fill(firstName)
    }

    /**
 * Fills the last name input field with the provided name.
 *
 * @param {string} lastName - The user's last name to be entered.
 * @returns {Promise<void>} - Resolves when the last name field is filled.
 *
 * @throws {Error} - If the last name input field is not found.
 */
    async fillLastName(lastName: string): Promise<void> {
       await this.lastName.fill(lastName)
    }

    /**
 * Fills the company input field with the provided company name (if applicable).
 *
 * @param {string} company - The user's company name to be entered (optional).
 * @returns {Promise<void>} - Resolves when the company field is filled.
 *
 * @throws {Error} - If the company input field is not found.
 */
    async fillCompany(company: string): Promise<void> {
       await this.company.fill(company)
    }

    /**
 * Fills the address input field with the provided address.
 *
 * @param {string} address - The user's complete address to be entered.
 * @returns {Promise<void>} - Resolves when the address field is filled.
 *
 * @throws {Error} - If the address input field is not found.
 */
    async fillAddress(address: string): Promise<void> {
      await  this.address.fill(address)
    }

    /**
 * Selects the specified country from the country dropdown.
 *
 * @param {string} value - The value of the country option to be selected (e.g., "US", "GB", "FR").
 * @returns {Promise<void>} - Resolves when the country is selected.
 *
 * @throws {Error} - If the country dropdown or the specified country option is not found.
 */
    async chooseCountry(value: string): Promise<void> {
       await this.country.selectOption({ value: value })
    }

    /**
 * Fills the state input field with the provided state (if applicable).
 *
 * @param {string} state - The user's state or province to be entered (optional).
 * @returns {Promise<void>} - Resolves when the state field is filled.
 *
 * @throws {Error} - If the state input field is not found.
 */
    async fillState(state: string): Promise<void> {
      await  this.state.fill(state)

    }

    /**
 * Fills the city input field with the provided city.
 *
 * @param {string} city - The user's city to be entered.
 * @returns {Promise<void>} - Resolves when the city field is filled.
 *
 * @throws {Error} - If the city input field is not found.
 */
    async fillCity(city: string): Promise<void> {
       await this.city.fill(city)
    }

    /**
 * Fills the ZIP code input field with the provided ZIP code.
 *
 * @param {string} zipCode - The user's ZIP code to be entered.
 * @returns {Promise<void>} - Resolves when the ZIP code field is filled.
 *
 * @throws {Error} - If the ZIP code input field is not found.
 */
    async fillZipCode(zipCode: string): Promise<void> {
       await this.zipCode.fill(zipCode)
    }

    /**
 * Fills the mobile number input field with the provided number.
 *
 * @param {string} mobileNumber - The user's mobile number to be entered.
 * @returns {Promise<void>} - Resolves when the mobile number field is filled.
 *
 * @throws {Error} - If the mobile number input field is not found.
 */
    async fillMobileNumber(mobileNumber: string): Promise<void> {
      await  this.mobileNumber.fill(mobileNumber)
    }

    /**
 * Clicks the "Create Account" button to submit the registration form.
 *
 * @returns {Promise<void>} - Resolves when the "Create Account" button is clicked.
 *
 * @throws {Error} - If the "Create Account" button is not found.
 */
    async clickOnCreateAccountBtn(): Promise<void> {
       await this.createAccountBtn.click()
    }
}