import { User, PortfolioItem, Portfolio } from '../user';

export const sampleToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6eyJ1c2VybmFtZSI6ImV4YW1wbGUiLCJ1c2VySUQiOiIxMjMifSwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjkwMDAwMDAwMDB9.VtmEiR1igdvU84AucOjVWl_C-UNX0_zosUs84FK32fc';
export const sampleError = 'some error';

export const sampleUser: User = {
	username: 'example',
	userID: '123',
};

export const samplePortfolioItem: PortfolioItem = {
	portfolioItemID: '123',
	portfolioID: '123',
	assetType: 'stock',
	assetSymbol: 'GOOG',
	amount: 100,
};

export const samplePortfolio: Portfolio = {
	portfolioID: '123',
	userID: '123',
	items: [samplePortfolioItem],
	balance: 10000000,
};

export const mockLogin = jest.fn(
	async ({ username }: { username: string; password: string }) =>
		Promise.resolve({
			token: sampleToken,
			user: { ...sampleUser, username },
			error: username === '' && sampleError,
		}),
);

export const mockCreate = jest.fn(async () =>
	Promise.resolve({
		token: sampleToken,
		user: sampleUser,
	}),
);

export const mockGet = jest.fn(async (userID: string) =>
	Promise.resolve({
		...sampleUser,
		userID,
	}),
);

export const mockPortfolio = jest.fn(async (userID: string) =>
	Promise.resolve({
		...samplePortfolio,
		userID,
	}),
);

const mock = jest.fn().mockImplementation(() => {
	return {
		login: mockLogin,
		create: mockCreate,
		get: mockGet,
		portfolio: mockPortfolio,
	};
});

export default mock;
