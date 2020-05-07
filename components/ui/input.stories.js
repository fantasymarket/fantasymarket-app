import React from 'react';
import Input from './input';

import { withKnobs, text } from '@storybook/addon-knobs';

export default {
	component: Input,
	title: 'Input',
	decorators: [withKnobs],
};

export const withText = () => <Input />;
export const withEmoji = () => <Input value="😀 😎 👍 💯" />;
export const withLabel = () => <Input label={text('label')} />;
export const withPlaceholder = () => <Input placeholder={text('label')} />;
