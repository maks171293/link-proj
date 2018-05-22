import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Login from './Auth/Login'
import Signup from './Auth/Signup'
import LinkConnect from './Auth/LinkConnect'
import TimeZoneAndCity from './Auth/TimeZoneAndCity'
import Verification from './Auth/Verification';
import Welcome from './Auth/Welcome'
import Header from './Header'
import { Body } from './Styled'

const Home = () => <Async load={import('./Home')} />

class App extends React.Component{

  render(){
    let searchString = "/signup" + this.props.location.search;
    return (
      <Body>
        <Header />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/linkedin-connect" component={LinkConnect} />
          <Route path="/timezone-and-city" component={TimeZoneAndCity} />
          <Route path="/verification-code" component={Verification} />
          <Route path="/welcome" component={Welcome} />
          {this.props.user.token && <Route path="/" component={Home} />}
          {this.props.location.search.indexOf('=e') !== -1 ? <Redirect to={searchString} /> : <Redirect to="/login" /> }
        </Switch>
      </Body>
    )
  }
} 



App.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default withRouter(connect(state => ({ user: state.user }))(App))
