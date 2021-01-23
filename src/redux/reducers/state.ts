import { IAuth, IAuthError } from 'types/auth'

export interface IRootReducer {
    router: any,
    auth: IAuth & IAuthError,
    form: any
}