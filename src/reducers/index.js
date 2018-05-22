import { combineReducers } from 'redux'

import user from './user'
import linkedinClient from './linkedinClient'

const rootReducer = combineReducers({
  user,
  linkedinClient
})

export default rootReducer
