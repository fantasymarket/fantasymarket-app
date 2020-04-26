import React from 'react';
import Button from './button';

import { withKnobs, text } from '@storybook/addon-knobs';

export default {
	component: Button,
	title: 'Button',
	decorators: [withKnobs],
};

export const withText = () => <Button>{text('Text', 'Hello Button')}</Button>;

export const withEmoji = () => (
	<Button>
		<span role="img" aria-label="so cool">
			😀 😎 👍 💯
		</span>
	</Button>
);
