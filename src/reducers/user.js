import { actionTypes as types } from '../constants'

const user = (state = {}, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return action.data
    case types.CHANGE_PASSWORD_SUCCESS:
      console.log('change pass success', action.data)
      return {...action.data.user}
    case types.CHANGE_PASSWORD_FAILURE:
    console.log('change pass failure', action.data)    
      return {}
    case types.LOGIN_FAILURE:
      return {}
    default:
      return state
  }
}

export default user
