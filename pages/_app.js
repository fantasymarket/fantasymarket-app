import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import './../public/static/fonts/space-grotesk/styles.css';
import 'modern-normalize/modern-normalize.css';

import NextNprogress from 'nextjs-progressbar';

import { GlobalStyle } from '@components/css';
import { APIProvider, init } from '@api';

const CustomApp = ({ Component, pageProps }) => {
	const [api] = useState(() => init());

	return (
		<APIProvider value={api}>
			<NextNprogress
				options={{
					showSpinner: false,
					easing: 'ease',
					speed: 500,
					trickleSpeed: 200,
				}}
			/>
			<ThemeProvider theme={{}}>
				<Head>
					<title>FantasyMarket</title>
				</Head>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</APIProvider>
	);
};

CustomApp.propTypes = {
	Component: PropTypes.any.isRequired,
	pageProps: PropTypes.object.isRequired,
};

CustomApp.displayName = 'App';

export default CustomApp;
