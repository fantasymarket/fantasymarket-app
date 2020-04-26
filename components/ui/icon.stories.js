import React from 'react';

import { withKnobs, color } from '@storybook/addon-knobs';

import Icon from './icon';
import { FiSettings } from 'react-icons/fi';

export default {
	component: Icon,
	title: 'Icon',
	decorators: [withKnobs],
};

export const withSVG = () => (
	<Icon>
		<FiSettings />
	</Icon>
);

export const withColor = () => (
	<Icon color={color('color', 'white')}>
		<FiSettings />
	</Icon>
);
