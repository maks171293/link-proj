import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from '../Logo'


import { signup, changePassword } from '../../actions'

import { Body, FormTitle, FooterLink, TextField, Submit, FormWrapper, TextLabel } from '../Styled'
import Form from './Form'

const Signup = ({ user, signup, location, match, changePassword }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const {password1: {value: password1}, password2: {value: password2}} = e.target;
    if(password1 !== password2){
      alert('Passwords not match');
      return;
    }
    let searchString = location.search;
    let email = decodeURIComponent(searchString.slice(searchString.indexOf('e=') + 2));
    console.log('aaa');
    changePassword({email: email, password: password2});
  }
  
  return (
    <div>
    <Logo/>
    <FormWrapper>
      <FormTitle>Please setup your ClickedIn password</FormTitle>
      <form onSubmit={handleSubmit}>
        <TextLabel >New Password</TextLabel>
        <TextField
          type="password"
          name="password1"
          title="New Password"
          required
        />
        <TextLabel >Confirm New Password</TextLabel>
        <TextField
          type="password"
          name="password2"
          title="Confirm New Password"
          required
        />
        <Submit type="submit" value="Continue" />
      </form>
      {/* <FooterLink to="/login">Already have an account ?</FooterLink> */}
      {user.token && <Redirect to="linkedin-connect" />}
    </FormWrapper>
    </div>
  )
}

Signup.propTypes = {
  user: PropTypes.shape({}).isRequired,
  signup: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { signup, changePassword })(Signup)
