import { actionTypes as types, urls } from '../constants'
import { post, postNA, get } from '../helpers'

export const signup = ({ email, password }) => dispatch => {
  dispatch({ type: types.SIGNUP_REQUEST })
  post({
    url: urls.SIGNUP,
    body: { email, password },
    success: types.SIGNUP_SUCCESS,
    failure: types.SIGNUP_FAILURE,
    dispatch,
  })
}

export const changePassword = ({ email, password }) => dispatch => {
  dispatch({ type: types.CHANGE_PASSWORD_REQUEST })
  console.log('change password action', email, password)
  postNA({
    url: urls.CHANGE_PASSWORD,
    body: { email, password },
    success: types.CHANGE_PASSWORD_SUCCESS,
    failure: types.CHANGE_PASSWORD_FAILURE,
    dispatch,
  })
}

export const linkedinConnect = ({ email, password, token }) => dispatch => {
  dispatch({ type: types.LINKEDIN_CONNECT_REQUEST })
  post({
    url: urls.LINKEDIN_CREDS,
    body: { linkedin_email: email, linkedin_password: password },
    token: token,
    success: types.LINKEDIN_CONNECT_SUCCESS,
    failure: types.LINKEDIN_CONNECT_FAILURE,
    dispatch,
  })
}


export const login = ({ email, password }) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST })
  post({
    url: urls.LOGIN,
    body: { email, password },
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
    dispatch,
  })
}

export const loginWithToken = () => (dispatch, getState) => {
  const token = getState().user.token

  if (typeof token === 'undefined') return

  dispatch({ type: types.LOGIN_REQUEST })
  post({
    url: urls.LOGIN_WITH_TOKEN,
    body: { token },
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
    dispatch,
  })
}
