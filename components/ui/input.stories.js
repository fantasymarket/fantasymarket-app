import React from 'react';
import Input from './input';

import { withKnobs, text } from '@storybook/addon-knobs';

export default {
	component: Input,
	title: 'Input',
	decorators: [withKnobs],
};

export const withText = () => <Input label="Text" hiddenLabel />;
export const withEmoji = () => (
	<Input label="Emojis" hiddenLabel value="😀 😎 👍 💯" />
);
export const withLabel = () => <Input label={text('Label', 'Some Label')} />;
export const withPlaceholder = () => (
	<Input placeholder={text('Placeholder', 'Some Placeholder')} />
);
