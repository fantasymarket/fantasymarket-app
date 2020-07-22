import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layout';

import { useAPI } from '@api';

const SettingsWrapper = styled(Layout)`
	pre {
		color: white;
	}
`;

const Settings = () => {
	const api = useAPI();
	return (
		<SettingsWrapper>
			<h1>Settings (WIP)</h1>
			<pre>{JSON.stringify(api.user, null, 2)}</pre>
		</SettingsWrapper>
	);
};

export default Settings;
