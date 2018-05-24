import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, withRouter, Switch } from 'react-router-dom'
import SideMenu from './SideMenu/SideMenu'
import Dashboard from './Dashboard'

import { Message, Blue, Content, ContentWrapper, SidebarWrapper } from './Styled'

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Dashboard />,
  },
  {
    path: "/manage-search",
    sidebar: () => <div>bubblegum!</div>,
  },
  {
    path: "/manage-campaigns",
    sidebar: () => <div>shoelaces!</div>,
  }
]

const Home = ({ user }) =>
  user.token ? (
    <Router>
      <ContentWrapper>
          <SideMenu/>
          <Content>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
           ))} 
           </Content>
      </ContentWrapper>
    </Router>
  ) : (
    <Redirect to="/login" />
  )

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(Home)
