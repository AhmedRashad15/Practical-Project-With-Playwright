import { Locator, Page } from "playwright"
import { AccountInformation } from "./AccountInformation"
import { AddressInformation } from "./AddressInformation"
import { RegisterUser } from "../../../intefaces/RegisterUser.Inteface"

export class signUpPage {

    private readonly page: Page
    // The Following Locator related to the "Acoount Information" in the signUp Form
    private accountInformation: AccountInformation
    // The Followin Locator related to the "Address Information" in the signUp Form
    private addressInformation: AddressInformation




    constructor(page: Page) {
        this.page=page
        // The Followin Locators related to the "Account Infomtion" in the signUp Form
        this.accountInformation = new AccountInformation(page)
        // The Followin Locators related to the "Address Information" in the signUp Form
        this.addressInformation = new AddressInformation(page)
    }

    

    /**
     * Signs up a new user on the current page.
     *
     * @param {string} userNameValue - The username value to enter in the username field.
     * @param {string} emailAddress - The email address to use for signup.
     * @returns {Promise<void>} - Resolves when the signup process is complete.
     *
     * @throws {Error} - If any of the input fields are not found or the signup fails.
     */


    /**
     * Registers a new user with the provided user data.
    
     * This function fills out the registration form with the provided user information, 
     * including account information, address information, and submits the form.
    
     * @param {User} userData - An object containing the user's information for registration. 
     *   The object should have the following properties:
     *   - `titleType`: The user's title type (e.g., "Mr.", "Ms.").
     *   - `name`: The user's full name.
     *   - `password`: The user's password.
     *   - `day`: The user's day of birth.
     *   - `month`: The user's month of birth.
     *   - `year`: The user's year of birth.
     *   - `firstName`: The user's first name. 
     *   - `lastName`: The user's last name.
     *   - `company`: The user's company name (optional).
     *   - `address`: The user's full address.
     *   - `country`: The user's country.
     *   - `state`: The user's state/province (optional).
     *   - `city`: The user's city.
     *   - `zipCode`: The user's ZIP code.
     *   - `mobileNumber`: The user's mobile phone number.
    
     * @returns {Promise<void>} - Resolves when the registration form is successfully submitted.
     *
     * @throws {Error} - If any of the form fields fail to be filled or the form submission fails.
     */
    async register(userData: RegisterUser): Promise<void> {
        //fill data related to account information section
        await this.accountInformation.fillTitleType(userData.users.validUser.titleType)
        await this.accountInformation.fillPassword(userData.users.validUser.password)
        await this.accountInformation.selectDay(userData.users.validUser.day)
        await this.accountInformation.selectMonth(userData.users.validUser.month)
        await this.accountInformation.selectYear(userData.users.validUser.year)
        await this.accountInformation.checkNewsletter()
        await this.accountInformation.checkReceiveSpecialOffers()

        //fill data related to address information section 

        await this.addressInformation.fillFirstName(userData.users.validUser.firstName)
        await this.addressInformation.fillLastName(userData.users.validUser.lastName)
        if (userData.users.validUser.company) {
            await this.addressInformation.fillCompany(userData.users.validUser.company)

        }

        await this.addressInformation.fillAddress(userData.users.validUser.address)
        await this.addressInformation.chooseCountry(userData.users.validUser.country)
        if (userData.users.validUser.state) {
            await this.addressInformation.fillState(userData.users.validUser.state)
        }
        await this.addressInformation.fillCity(userData.users.validUser.city)
        await this.addressInformation.fillZipCode(userData.users.validUser.zipCode)
        await this.addressInformation.fillMobileNumber(userData.users.validUser.mobileNumber)
        await this.addressInformation.clickOnCreateAccountBtn()

    }

    
    async getSignUpHeader() {
        return await this.accountInformation.getSignUpHeader()
    }

   
    async getAccountInformationHeader() {
        return this.accountInformation.getAccountInformationHeader();
    }

   
    async fillTitleType(titleTypeOption: string): Promise<void> {
      await  this.accountInformation.fillTitleType(titleTypeOption)
    }

   
    async fillName(userName: string): Promise<void> {
        await this.accountInformation.fillName(userName)

    }


   
    async fillPassword(password: string): Promise<void> {
        await this.accountInformation.fillPassword(password)
    }

   
    async selectDay(value: string): Promise<void> {
        await this.accountInformation.selectDay(value)
    }


   
    async selectMonth(value: string): Promise<void> {
        await this.accountInformation.selectMonth(value)
    }

   
    async selectYear(value: string): Promise<void> {
        await this.accountInformation.selectYear(value)
    }

   
    async checkNewsletter(): Promise<void> {
       await this.accountInformation.checkNewsletter()
    }

    
    async checkReceiveSpecialOffers(): Promise<void> {
        await this.accountInformation.checkReceiveSpecialOffers()
    }


    //end of calling account infomation section

   
      async fillFirstName(firstName: string): Promise<void> {
        await  this.addressInformation.fillFirstName(firstName)
      }
  
     
      async fillLastName(lastName: string): Promise<void> {
         await this.addressInformation.fillLastName(lastName)
      }
  
     
      async fillCompany(company: string): Promise<void> {
         await this.addressInformation.fillCompany(company)
      }
  
      
      async fillAddress(address: string): Promise<void> {
        await  this.addressInformation.fillAddress(address)
      }
  
     
      async chooseCountry(value: string): Promise<void> {
         await this.addressInformation.chooseCountry(value)
      }
  
      
      async fillState(state: string): Promise<void> {
        await  this.addressInformation.fillState(state)
  
      }
  
      
      async fillCity(city: string): Promise<void> {
         await this.addressInformation.fillCity(city)
      }
  
      
      async fillZipCode(zipCode: string): Promise<void> {
         await this.addressInformation.fillZipCode(zipCode)
      }
  
      
      async fillMobileNumber(mobileNumber: string): Promise<void> {
        await  this.addressInformation.fillMobileNumber(mobileNumber)
      }
  
      async clickOnCreateAccountBtn(): Promise<void> {
         await this.addressInformation.clickOnCreateAccountBtn()
      }
      //end of calling the address information info
    
}