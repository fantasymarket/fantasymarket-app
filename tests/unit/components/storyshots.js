import ReactDOM from 'react';
import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

beforeAll(() => {
	ReactDOM.createPortal = jest.fn(element => {
		return element;
	});
});

initStoryshots({
	suite: 'Component Snapshots',
	configPath: './.storybook',
	renderer: render,
});
