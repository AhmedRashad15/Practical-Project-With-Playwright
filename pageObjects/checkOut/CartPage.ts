import { V } from "@faker-js/faker/dist/airline-D6ksJFwG";
import { promises } from "dns";
import { Locator, Page } from "playwright";

export class CartPage
{

private readonly shoppingCartBreadCrumb:Locator
private readonly proceedToCheckOutBtn:Locator
private readonly commentTextArea:Locator
private readonly placeAnOrderBtn:Locator

constructor(page:Page)
{
    this.shoppingCartBreadCrumb=page.locator(".breadcrumb .active")
    this.proceedToCheckOutBtn=page.locator("div .check_out")
    this.commentTextArea=page.locator(".form-control")
    this.placeAnOrderBtn=page.getByRole("link",{name:"Place Order"})
}

async getShoppingCartBreadCrumb():Promise<Locator>
{
return this.shoppingCartBreadCrumb
}

async clickOnProceedToCheckOut():Promise<void>
{
    await this.proceedToCheckOutBtn.click()
}

async writeCommentOnOrder(comment:string):Promise<void>
{
    await this.commentTextArea.fill(comment)
}

async clickOnPlaceOrderBtn():Promise<void>
{
    await this.placeAnOrderBtn.click()
}

}