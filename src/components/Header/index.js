import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from '../../../assets/Logo.png'
import menuArrow from '../../../assets/header_arrow.png'

import { HeaderWrapp, HeaderMenu, HeaderMenuText } from '../Styled'

class Header extends React.Component {
  
  state = {}

  componentDidMount(){
    
  }

  render(){
    let { user, location, match } = this.props;
    return (
        <HeaderWrapp>
            <img style={{maxHeight: 64, width: 'auto'}} src={Logo} alt="ClickedIn"/>
            <HeaderMenu>
              <HeaderMenuText>Albert</HeaderMenuText>
              <img style={{width: '100%', height: '100%'}} src={menuArrow} />
            </HeaderMenu>
        </HeaderWrapp>
    )
  }
}


Header.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { })(Header)
