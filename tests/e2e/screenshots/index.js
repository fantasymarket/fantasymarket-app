import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const beforeScreenshot = () => {
	return new Promise(resolve => {
		setTimeout(resolve, 1000);
	});
};

const getScreenshotOptions = () => {
	return {
		encoding: 'base64',
		fullPage: true,
		omitBackground: true,
	};
};

initStoryshots({
	suite: 'Image storyshots',
	configPath: './.storybook',
	test: imageSnapshot({
		storybookUrl: __STORYBOOK_URL__,
		beforeScreenshot,
		getScreenshotOptions,
	}),
});
