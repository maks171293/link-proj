import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {Line} from 'rc-progress'

import Select from 'react-select'
import Logo from '../Logo'

import 'react-select/dist/react-select.css'
import '../styles.css'

import { signup } from '../../actions'

import { FormTitle, FooterLink, TextField, Submit, FormWrapper, TextLabel } from '../Styled'

let timezone = [
	{value: 'one', label: 'One'},
	{value: 'two', label: 'Two'}
]

let city = [
	{value: 'city',label: 'City'},
	{value: 'city1', label: 'city 2'}
]

class TimeZoneAndCity extends Component {
	state = {
		timezone: '',
		city: '',
		showProgressBar: false,
		progressBarStatus: '0'
	}
	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			showProgressBar: true
		})
		this.progressBarHandle()
	}
	handleTimezoneChange = (selectedOption) => {
		
	}

	handleCitySelect = (selectedOption) => {

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

  render() {
    return (
			<div>
			<Logo/>
      <FormWrapper>
			{!this.state.showProgressBar ?
				<div>
				<FormTitle>Let's setup your timezone and city</FormTitle>
        <form onSubmit={this.handleSubmit}>
				<TextLabel>Timezone</TextLabel>
				<div style={{width: '400px'}}>
					<Select
						className="select-input"
						name="timezone"
						value={this.state.timezone}
						placeholder="This is my best timezone"
						onChange={this.handleTimezoneChange}
						options={timezone}
					/>
				</div>
				<TextLabel>City</TextLabel>
				<div style={{width: '400px'}}>
					<Select
						className="select-input"
						name="city"
						value={this.state.city}
						placeholder="This is the nearest city"
						onChange={this.handleCitySelect}
						options={city}
					/>
				</div>
					<Submit type="submit" value="Continue" />
				</form>
				</div> : 
				<div style={{marginTop: '50px', marginBottom: '90px'}}>
					<TextLabel style={{fontSize: '20px', marginBottom: '14px'}}>We’re creating your AI powered ClickedIn profile</TextLabel>
					<Line percent={this.state.progressBarStatus} strokeWidth="4" strokeColor="#65e57b" trailWidth="5" strokeLinecap="square" trailColor="#a6a6a6" style={{borderRadius: '6px'}}/>
				</div>
	}
      </FormWrapper>
			</div>
    )
  }
};

TimeZoneAndCity.propTypes = {
    user: PropTypes.shape({}).isRequired,
    signup: PropTypes.func.isRequired,
  }
  
const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { signup })(TimeZoneAndCity)