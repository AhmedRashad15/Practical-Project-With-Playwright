export interface ProductData
{
    productName:string
    productCategory:string
    price:string
    availability:string
    brand:string


}

export interface Product
{
    
    validProduct:ProductData,
    invalidProduct:ProductData
    

}