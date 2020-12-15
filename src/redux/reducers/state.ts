import { IAuth } from 'types/auth'

export interface IRootReducer {
    router: any,
    auth: IAuth,
    form: any
}