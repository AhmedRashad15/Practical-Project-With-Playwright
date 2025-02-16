import { Locator, Page } from "playwright";
import {  PaymentInfo } from "../../intefaces/paymentInfo.interface";


export class PaymentPage{

private readonly nameOnCard:Locator
private readonly cardNumber:Locator
private readonly cvc:Locator
private readonly expirationMonth:Locator
private readonly expirationYear:Locator
private readonly payBtn:Locator
private readonly successAlert:Locator

constructor(page:Page)
{
    this.nameOnCard=page.locator("[name='name_on_card']")
    this.cardNumber=page.locator(".card-number")
    this.cvc=page.locator("[name='cvc']")
    this.expirationMonth=page.getByPlaceholder("MM")
    this.expirationYear=page.getByPlaceholder("YYYY")
    this.payBtn=page.getByRole("button",{name:"Pay and Confirm Order"})
    this.successAlert=page.locator(".title b")
}

async payAndConfirmOrder(paymentInfo:PaymentInfo)
{
    await this.nameOnCard.fill(paymentInfo.cardName)
    await this.cardNumber.fill(paymentInfo.cardNumber)
    await this.cvc.fill(paymentInfo.cardCvc)
    await this.expirationMonth.fill(paymentInfo.expirationMonth)
    await this.expirationYear.fill(paymentInfo.expirationYear)
    await this.payBtn.click()
}

async getOrderSuccessAlert():Promise<Locator>
{
    return this.successAlert
}

}