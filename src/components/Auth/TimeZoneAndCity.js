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
	{value: 'pt', label: 'Pacific Time'},
	{value: 'mt', label: 'Mountain Time'},
	{value: 'ct', label: 'Central Time'},
	{value: 'et', label: 'Eastern Time'}
]
let cities = {
	pt: [
		{value: 'losAngeles',label: 'Los Angeles'},
		{value: 'sanJose', label: 'San Jose'},
		{value: 'phoenix', label: 'Phoenix'},
	],
	mt: [
		{value: 'denver', label: 'Denver'}
	],
	ct: [
		{value: 'dallas', label: 'Dallas'},
		{value: 'chicago', label: 'Chicago'}
	],
	et: [
		{value: 'atlanta', label: 'Atlanta'},
		{value: 'washington', label: 'Washington'},
		{value: 'ashburn', label: 'Ashburn'},
		{value: 'boston', label: 'Boston'},
		{value: 'detroit', label: 'Detroit'},
		{value: 'miami', label: 'Miami'},
		{value: 'newJersey', label: 'New Jersey'}
	]
}

class TimeZoneAndCity extends Component {
	state = {
		timezone: '',
		city: '',
	}
	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			showProgressBar: true
		})
		this.props.history.push('/verification-code')
	}
	handleTimezoneChange = (selectedOption) => {
		console.log('select', selectedOption)
		this.setState({
			timezone: selectedOption.value
		})
	}

	handleCitySelect = (selectedOption) => {
		this.setState({
			city: selectedOption.value
		})
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}


  render() {
    return (
			<div>
				<Logo/>
				<FormWrapper>
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
							disabled={this.state.timezone.length === 0 ? true : false}
							className="select-input"
							name="city"
							value={this.state.city}
							placeholder="This is the nearest city"
							onChange={this.handleCitySelect}
							options={cities[this.state.timezone]}
						/>
					</div>
						<Submit type="submit" value="Continue" />
					</form>
					</div> 
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