import {PartialPath} from 'history'
import {RouterAction} from 'react-router-redux'

export type pushType = (payload: PartialPath) => RouterAction