import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../../actions'

import { FormTitle, FooterLink, FormWrapper, TextLabel, TextField, Submit } from '../Styled'
import Form from './Form'
import Logo from '../Logo'

const Login = ({ user, login }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    // login({ email, password })
  }

  return (
    <div>
      <Logo />
      <FormWrapper>
      <FormTitle>Sign In</FormTitle>
      <form onSubmit={this.handleSubmit}>
        <TextLabel >Email Address</TextLabel>
        <TextField
          type="email"
          name="email"
          title="Email"
          required
        />
        
        <TextLabel >Password</TextLabel>
        <TextField
          type="password"
          name="password"
          title="Password"          
          required
        />
        <Submit type="submit" value="Continue" />
      </form>
      </FormWrapper>
      {/* <FooterLink to="/signup">{"You don't have an account ?"}</FooterLink> */}
      {user.token && <Redirect to="/" />}
    </div>
  )
}

Login.propTypes = {
  user: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { login })(Login)
