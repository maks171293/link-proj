import React, { Component } from 'react';
import styled from 'emotion/react'
import { SidebarWrapper, SidebarItem, SidebarText, Button, DashboardHeader, BlockWrapper, BlockHeader, BlockHeaderWrapper, BlockHeaderLink} from '../Styled'


export default (props) => {
  return (
    <BlockWrapper style={{flex: 1, marginRight: props.first ? '5px' : '0px', marginLeft: props.last ? '5px' : '0px'}}>
			<Column>
                    <LeadCount>
                        {props.count}
                    </LeadCount>
                    <BlockHeader>
                        {props.title}
                    </BlockHeader>
				    <BlockText>
                        from your ClickedIn Package
                    </BlockText>
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

const LeadCount = styled.p`
    font-size: 36px;
    font-family: sans-serif;
	font-weight: 400;
    text-align: left;
    margin: 0px;
    padding: 0px;
`
