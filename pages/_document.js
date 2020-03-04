import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="application-name" content="FantasyMarket" />
					<meta
						name="description"
						content="YOUR road to success in the stock market! No signup required, start learning RIGHT AWAY!"
					/>
					<link rel="manifest" href="manifest.json" />
					<meta name="theme-color" content="#22ff8f" />
					<meta name="msapplication-navbutton-color" content="#22ff8f" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="black-translucent"
					/>
					<meta name="msapplication-starturl" content="/" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="application-name" content="FantasyMarket" />
					<meta name="apple-mobile-web-app-title" content="FantasyMarket" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
