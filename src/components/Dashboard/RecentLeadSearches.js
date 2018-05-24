import React, { Component } from 'react';
import styled from 'emotion/react'
import { SidebarWrapper, SidebarItem, SidebarText, Button, DashboardHeader, BlockWrapper, BlockHeader, BlockHeaderWrapper, BlockHeaderLink} from '../Styled'


export default (props) => {
  return (
    <BlockWrapper style={{flex: 1, marginLeft: '5px',}}>
			<Column>
                <BlockHeaderWrapper>
                    <BlockHeader>
                            Recent Lead Search
                    </BlockHeader>
                    <BlockHeaderLink>
                            Manage Lead Searches
                    </BlockHeaderLink>
                </BlockHeaderWrapper>
				<BlockText>Table will be here</BlockText>
			</Column>
    </BlockWrapper>
  )
};

const BlockText = styled.p`
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 400;
	text-align: left;
	margin: 8px 0px;
`

const Column = styled.div`
    width: 100%;
    justify-content: center;
	align-items: flex-start;
`
