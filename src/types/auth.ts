export interface IAuth {
    userId: string | number
    token: string
}

export interface IAuthError {
    message: string
    error: boolean
}

export interface ILogin {
    email: string
    password: string
}

export interface ISignUp {
    firstName: string
    lastName: string
    email: string
    password: string
}

export type signInType = (payload: ILogin) => { payload: ILogin, type: string }
export type signUpType = (payload: ISignUp) => { payload: ISignUp, type: string }