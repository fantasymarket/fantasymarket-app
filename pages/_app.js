import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import PropTypes from 'prop-types';
import 'modern-normalize/modern-normalize.css';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Space Grotesk';
		src: url('/static/fonts/space-grotesk/SpaceGrotesk-Light.woff2') format('woff2'),
			url('/static/fonts/space-grotesk/SpaceGrotesk-Light.woff') format('woff');
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: 'Space Grotesk';
		src: url('/static/fonts/space-grotesk/SpaceGrotesk-Regular.woff2') format('woff2'),
			url('/static/fonts/space-grotesk/SpaceGrotesk-Regular.woff') format('woff');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Space Grotesk';
		src: url('/static/fonts/space-grotesk/SpaceGrotesk-Medium.woff2') format('woff2'),
			url('/static/fonts/space-grotesk/SpaceGrotesk-Medium.woff') format('woff');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'Space Grotesk';
		src: url('/static/fonts/space-grotesk/SpaceGrotesk-SemiBold.woff2') format('woff2'),
			url('/static/fonts/space-grotesk/SpaceGrotesk-SemiBold.woff') format('woff');
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: 'Space Grotesk';
		src: url('/static/fonts/space-grotesk/SpaceGrotesk-Bold.woff2') format('woff2'),
			url('/static/fonts/space-grotesk/SpaceGrotesk-Bold.woff') format('woff');
		font-weight: 700;
		font-style: normal;
	}


	* {
		font-display: optional;
		font-family: 'Space Grotesk', monospace;
	}

	h1,
	h2,
	h3,
	h4 {
		margin: 0;
	}

	h1 {
		color: white;
	}

	h2, h3 {
		color: #d6d6d6;
	}

	p {
		color: #e0e0e0;
	}

	body {
		background-image: linear-gradient( 135deg, #00250f 10%, #1a002d 100%);
	}

	a {
		text-decoration-color: #22ff8f;
	}
`;

function CustomApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={{}}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

CustomApp.propTypes = {
	Component: PropTypes.any.isRequired,
	pageProps: PropTypes.object.isRequired,
};

CustomApp.displayName = 'App';

export default CustomApp;
