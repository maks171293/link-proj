import { actionTypes as types } from '../constants'


const linkedinClient = (state = {}, action) => {
  switch (action.type) {
    case types.LINKEDIN_CONNECT_SUCCESS:
        console.log('link connect success', action.data)
        return {...action.data.linkedin_client}
    case types.LINKEDIN_CONNECT_FAILURE:
        console.log('link connect failure', action.data)    
        return {}
    default:
      return state
  }
}

export default linkedinClient
