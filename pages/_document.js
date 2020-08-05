import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export const customHead = (
	<Head>
		<meta charSet="utf-8" />
		<meta name="application-name" content="FantasyMarket" />
		<meta
			name="description"
			content="YOUR road to success in the stock market! No signup required, start learning RIGHT AWAY!"
		/>
		<link rel="manifest" href="/manifest.json" />
		<meta name="theme-color" content="#7bffc5" />
		<meta name="msapplication-navbutton-color" content="#22ff8f" />
		<meta name="msapplication-TileColor" content="#00aba9" />
		<meta
			name="apple-mobile-web-app-status-bar-style"
			content="black-translucent"
		/>
		<meta name="msapplication-starturl" content="/" />
		<meta name="mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="application-name" content="FantasyMarket" />
		<meta name="apple-mobile-web-app-title" content="FantasyMarket" />

		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00fcc9" />
	</Head>
);

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				{customHead}
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
