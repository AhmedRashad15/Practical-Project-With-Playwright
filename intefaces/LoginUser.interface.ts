export interface LoginCredentials {
    emailAddress: string;
    password: string;
}

export interface LoginTestData {
    validLogin: LoginCredentials;
    invalidLogin: LoginCredentials;
    emptyCredentials: LoginCredentials;
    lockedAccount: LoginCredentials;
}