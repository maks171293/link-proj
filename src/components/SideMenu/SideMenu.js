import React, { Component } from 'react'
import SidebarBG from '../../../assets/sidebar_bg.png'

import { SidebarWrapper, SidebarItem, SidebarText} from '../Styled'

export default class SideMenu extends Component {
  render() {
    return (
      <SidebarWrapper>
        <SidebarItem to="/">
          Dashboard
        </SidebarItem>
        <SidebarItem to="/manage-search">
          Manage Lead Search Criteria
        </SidebarItem>
        <SidebarItem to="/manage-campaigns">
          Manage Marketing Campaigns
        </SidebarItem>
      </SidebarWrapper>
    )
  }
};
