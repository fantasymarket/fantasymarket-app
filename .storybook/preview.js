import { addDecorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { GlobalStyle } from '@components/css';

const GlobalOverrides = createGlobalStyle`
body {
	background-image: none !important;
}
`

import 'modern-normalize/modern-normalize.css';
import '../public/static/fonts/space-grotesk/styles.css';

addDecorator(storyFn => (
	<ThemeProvider theme={{}}>
		<GlobalStyle />
		<GlobalOverrides/>
		{storyFn()}
	</ThemeProvider>
));
