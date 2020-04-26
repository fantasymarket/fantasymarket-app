import { createGlobalStyle, css } from 'styled-components';

export const styles = css`
	* {
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

	h2,
	h3 {
		color: #d6d6d6;
	}

	p {
		color: #e0e0e0;
	}

	body {
		background-image: linear-gradient(135deg, #00250f 10%, #1a002d 100%);
	}

	a {
		color: white;
		text-decoration-color: #22ff8f;
	}
`;

export const GlobalStyle = createGlobalStyle`${styles}`;
