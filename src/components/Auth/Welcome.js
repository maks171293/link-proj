import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from '../Logo'

import { FormTitle, FooterLink, TextField, Submit, FormWrapper, TextLabel, FormDescr} from '../Styled'

const Welcome = ({location, history}) => {
    const handleSubmit = e => {
      e.preventDefault()
      history.push('/')
    }
    
    return (
      <div>
      <Logo/>
      <FormWrapper>
        <FormTitle>Welcome, {location.state.user || 'aaaa'}</FormTitle>
        <FormDescr style={{marginBottom: '0px', marginTop: '25px',}}>Get ready to make LinkedIn work for you.</FormDescr>
        <FormDescr style={{marginBottom: '0px', marginTop: '23px',}}>On the Dashboard you can watch an introduction video to get familiar with ClickedIn.</FormDescr>
        <FormDescr style={{marginBottom: '10px', marginTop: '23px',}}>Start connecting and building your network today. See you inside.</FormDescr>
        <form onSubmit={handleSubmit}>
          <Submit type="submit" value="Continue" />
        </form>
        {/* {user.token && <Redirect to="linkedin-connect" />} */}
      </FormWrapper>
      </div>
    )
  }

  export default Welcome;