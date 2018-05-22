import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from '../Logo'

import { HeaderWrapp } from '../Styled'

class Header extends React.Component {
  
  state = {}

  componentDidMount(){
    
  }

  render(){
    let { user, location, match } = this.props;
    return (
        <HeaderWrapp>
            <Logo/>
        </HeaderWrapp>
    )
  }
}


Header.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { })(Header)
