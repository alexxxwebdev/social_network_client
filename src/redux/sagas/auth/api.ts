import axios from 'axios'
import {ILogin, ISignUp} from 'types/auth'
import {signInURL, signUpURL} from 'redux/constants/auth/auth'

export enum ContentTypes {
    APPLICATION_JSON = 'application/json',
    MULTIPART_FORM_DATA = 'multipart/form-data',
}

export function signIn (data: ILogin){
  return axios({
    url: signInURL,
    method: 'POST',
    headers: {
      'Content-Type': ContentTypes.APPLICATION_JSON
    },
    data
  })
}

export function signUp (data: ISignUp) {
  return axios({
    url: signUpURL,
    method: 'POST',
    headers: {
      'Content-Type': ContentTypes.MULTIPART_FORM_DATA
    },
    data
  })
}