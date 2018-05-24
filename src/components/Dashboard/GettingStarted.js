import React, { Component } from 'react';
import styled from 'emotion/react'
import { SidebarWrapper, SidebarItem, SidebarText, Button, DashboardHeader, BlockWrapper, BlockHeader} from '../Styled'


export default (props) => {
  return (
    <BlockWrapper row>
			<Column style={{height: '100%'}}>
				<BlockHeader>
						Getting Started
				</BlockHeader>
				<BlockText>Placeholder text for a message to go here</BlockText>
			</Column>
			<Column>
				<Button>Create a New Search</Button>
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
	width: 50%;
	align-items: flex-start;
`
