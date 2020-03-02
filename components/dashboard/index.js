import React from 'react';
import styled from 'styled-components';

const DashboardWrapper = styled.div``;

const Dashboard = ({ ...rest }) => {
	return (
		<DashboardWrapper {...rest}>
			<h1>Dashboard (WIP)</h1>
		</DashboardWrapper>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
