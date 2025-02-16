export interface userData
{
    titleType: string;
    name: string;
    password: string;
    day: string
    month: string
    year: string
    firstName: string;
    lastName: string;
    company?: string; // Optional fields can be marked as optional
    address: string;
    country: string;
    state?: string; // Optional fields can be marked as optional
    city: string;
    zipCode: string;
    mobileNumber: string;
}


export interface RegisterUser
{
    users :{
    validUser:userData,
    existingUser:userData,
    invalidUser:userData
}


}