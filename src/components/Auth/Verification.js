import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {Line} from 'rc-progress'
import Logo from '../Logo'
import { linkedinConnect } from '../../actions'


import { FormTitle, FooterLink, TextField, Submit, FormWrapper, TextLabel, CheckBox, SignInLinkedin, FormDescr } from '../Styled'

class Verification extends React.Component {
  state = {
    showProgressBar: false,   
		progressBarStatus: '0'     
  }

  verificationSubmit = e => {
    console.log('verificationCode submit');
    e.preventDefault()
    this.setState({
			showProgressBar: true
		})
		this.progressBarHandle()
  }

  componentWillUnmount(){
		clearInterval(this.timer)    
  }

  progressBarHandle = () => {
		let a = true;
		let seconds = 1000;
		this.timer = setInterval(()=>{
			let progressBarStatus = +this.state.progressBarStatus;
			a = !a;
			seconds = a === true ? 3000 : 5000;
			let step = a === true ? 15 : 10;
			this.setState({
				progressBarStatus: progressBarStatus + step + ''
			}, ()=>{
				if(this.state.progressBarStatus >= 100){
					clearInterval(this.timer);
					this.props.history.push('/welcome', {user: 'Makson'})
				}
			})
		}, seconds)
	}

  render(){
    let { user, signup, location, match } = this.props;
    return (
      <div>
      <Logo />
      <FormWrapper>
      {!this.state.showProgressBar ?
        <div>
        <FormTitle>LinkedIn: Verification Code</FormTitle>
        <FormDescr>LinkedIn has sent you a verification code to your LinkedIn primary <br/> email address.</FormDescr>
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
        </div>
        :
        <div style={{marginTop: '50px', marginBottom: '90px'}}>
        <TextLabel style={{fontSize: '20px', marginBottom: '14px'}}>We’re creating your AI powered ClickedIn profile</TextLabel>
        <Line percent={this.state.progressBarStatus} strokeWidth="4" strokeColor="#65e57b" trailWidth="5" strokeLinecap="square" trailColor="#a6a6a6" style={{borderRadius: '6px'}}/>
      </div>}
        {/* <FooterLink to="/login">Already have an account ?</FooterLink> */}
        {/* {user.token && <Redirect to="/signup/linkedin" />} */}
      </FormWrapper>
      </div>
    )
  }
}


Verification.propTypes = {
  user: PropTypes.shape({}).isRequired,
  linkedinConnect: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { linkedinConnect })(Verification)
