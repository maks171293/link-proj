import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from '../Logo'
import { linkedinConnect } from '../../actions'

import { FormTitle, FooterLink, TextField, Submit, FormWrapper, TextLabel, CheckBox, SignInLinkedin, FormDescr } from '../Styled'

class LinkConnect extends React.Component {
  
  state = {
    isVerCodeSend: false,
    isCheckboxChecked: false
  }

  handleSubmit = e => {
    e.preventDefault()
    const {email: {value: email}, password: {value: password}} = e.target;
    const token = this.props.user.token;
    this.props.linkedinConnect({email, password, token})
      setTimeout(()=>{
        this.props.history.push('timezone-and-city');
      }, 200)
  }

  toggleCheckbox = e => {
    this.setState({
      isCheckboxChecked: e.target.checked
    })
  }

  componentDidMount(){
    
  }

  render(){
    let { user, signup, location, match } = this.props;
    return (
      <div>
      <Logo />
      <FormWrapper>
        <FormTitle>Lets connect to your LinkedIn account</FormTitle>
        <form onSubmit={this.handleSubmit}>
          <TextLabel checkbox for="linked">
          <CheckBox onChange={this.toggleCheckbox} type="checkbox" id="linked" name="checkbox"   />
          I have a LinkedIn Sales Navigator account</TextLabel>
          <TextLabel >LinkedIn Email Address</TextLabel>
          <TextField
            type="email"
            name="email"
            title="Email"
            disabled={this.state.isCheckboxChecked ? false : true}
            required
          />
          
          <TextLabel >LinkedIn Password</TextLabel>
          <TextField
            type="password"
            name="password"
            title="Password"
            disabled={this.state.isCheckboxChecked ? false : true}            
            required
          />
          <SignInLinkedin disabled={this.state.isCheckboxChecked ? false : true} type="submit" value="Sign in with LinkedIn"/>
          {/* <Submit type="submit" value="Continue" /> */}
        </form>
        {/* <FooterLink to="/login">Already have an account ?</FooterLink> */}
        {/* {user.token && <Redirect to="/signup/linkedin" />} */}
      </FormWrapper>
      </div>
    )
  }
}


LinkConnect.propTypes = {
  user: PropTypes.shape({}).isRequired,
  linkedinConnect: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { linkedinConnect })(LinkConnect)
