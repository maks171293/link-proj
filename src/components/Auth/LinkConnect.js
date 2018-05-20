import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from '../Logo'
import { signup } from '../../actions'

import { FormTitle, FooterLink, TextField, Submit, FormWrapper, TextLabel, CheckBox, SignInLinkedin, FormDescr } from '../Styled'

class LinkConnect extends React.Component {
  
  state = {
    isVerCodeSend: false
  }

  handleSubmit = e => {
    e.preventDefault()
    const {email: {value: email}, password: {value: password}} = e.target;
    // const { email: { value: email }, password: { value: password } } = e.target
    //Create action for linkedin connect with email and password
    // signup({ email, password })
    sessionStorage.setItem('isCodeSend', JSON.stringify(true))
    this.setState({
      isVerCodeSend: true
    })
  }

  componentDidMount(){
    let isCodeSend = JSON.parse(sessionStorage.getItem('isCodeSend'))
    if(isCodeSend === true){
      this.setState({
        isVerCodeSend: true
      })
    }
  }

  verificationSubmit = e => {
    console.log('verificationCode submit');
    this.props.history.push('timezone-and-city');
  }

  render(){
    let { user, signup, location, match } = this.props;
    return (
      <div>
      <Logo />
      <FormWrapper>
        {!this.state.isVerCodeSend ?
        <FormTitle>Lets connect to your LinkedIn account</FormTitle>
        :
        <div>
          <FormTitle>LinkedIn: Verification Code</FormTitle>
          <FormDescr>LinkedIn has sent you a verification code to your LinkedIn primary <br/> email address.</FormDescr>
        </div>
        }
        {!this.state.isVerCodeSend ?
        <form onSubmit={this.handleSubmit}>
          <CheckBox type="checkbox" id="linked" name="checkbox" value="checkbox" />
          <TextLabel checkbox for="linked">I have a LinkedIn Sales Navigator account</TextLabel>
          <TextLabel >LinkedIn Email Address</TextLabel>
          <TextField
            type="email"
            name="email"
            title="Email"
            required
          />
          
          <TextLabel >LinkedIn Password</TextLabel>
          <TextField
            type="password"
            name="password"
            title="Password"
            required
          />
          <SignInLinkedin type="submit" value="Sign in with LinkedIn"/>
          {/* <Submit type="submit" value="Continue" /> */}
        </form>
        :
        <form onSubmit={this.verificationSubmit}>
        <div style={{width: '300px', textAlign: 'center', margin: 'auto'}}>
          <TextLabel >Verification Code</TextLabel>
          <TextField 
            center
            type="text"
            name="code"
            title="Code"
            required
          />
          </div>
          <Submit type="submit" value="Continue" />
        </form>
      }
        {/* <FooterLink to="/login">Already have an account ?</FooterLink> */}
        {/* {user.token && <Redirect to="/signup/linkedin" />} */}
      </FormWrapper>
      </div>
    )
  }
}


LinkConnect.propTypes = {
  user: PropTypes.shape({}).isRequired,
  signup: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { signup })(LinkConnect)
