import React from 'react';
import PropTypes from 'prop-types';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import './../public/static/fonts/space-grotesk/styles.css';
import 'modern-normalize/modern-normalize.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

const GlobalStyle = createGlobalStyle`

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
		color: white;
		text-decoration-color: #22ff8f;
	}
`;

const CustomApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={{}}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

CustomApp.propTypes = {
	Component: PropTypes.any.isRequired,
	pageProps: PropTypes.object.isRequired,
};

CustomApp.displayName = 'App';

export default CustomApp;
