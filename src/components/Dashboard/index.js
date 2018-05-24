import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GettingStarted from './GettingStarted'
import { SidebarWrapper, SidebarItem, SidebarText, DashboardHeader, BlockWrapper, BlockHeader, RowBlock, ColumnBlock} from '../Styled'
import RecentMarketingCamp from './RecentMarketingCamp';
import RecentLeadSearches from './RecentLeadSearches'
import OverallStats from './OverallStats'
import LeadBlock from './LeadBlock'
export class Dashboard extends Component {
//   static propTypes = {
//     prop: PropTypes
//   };

  render() {
    return (
      <div>
        <DashboardHeader>Dashboard</DashboardHeader>
				<GettingStarted />
				<RowBlock>
					<RecentMarketingCamp />
					<RecentLeadSearches />
				</RowBlock>
				<RowBlock>
					<ColumnBlock>
						<OverallStats/>
					</ColumnBlock>
					<RowBlock style={{flex: 1}}>
						<LeadBlock count={'1,200'} title={'Leads Available'} first={true} last={true} />
						<LeadBlock count={"1,003"} title={'Leads Remaining'} last={true} />
					</RowBlock>
				</RowBlock>
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  
})

Dashboard.propTypes = {
    // user: PropTypes.shape({}).isRequired,
    // login: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, {})(Dashboard)
