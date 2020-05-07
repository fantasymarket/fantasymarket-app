import React, { useState } from 'react';
import Tab from './tab';

export default {
	component: Tab,
	title: 'Tab',
};

const SampleTab = () => {
	const [tabValue, setTabValue] = useState('tab-1');

	return (
		<Tab
			value={tabValue}
			onChange={setTabValue}
			items={[
				{
					key: 'tab-1',
					value: 'TAB 1',
					activeBackground: '#22ff8f',
					activeColor: 'black',
				},
				{
					key: 'tab-2',
					value: 'TAB 2',
					activeBackground: 'rgba(255, 0, 0, 0.8)',
					activeColor: 'white',
				},
			]}
		/>
	);
};

export const withColor = () => <SampleTab />;
