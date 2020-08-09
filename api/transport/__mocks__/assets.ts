import { AssetResponse, AssetData } from '../assets';

export const sampleAsset: AssetResponse = {
	type: 'stock',
	symbol: 'GOOG',
	name: 'BigCorp Inc.',
	description: '',
	price: '1000',
};

export const samplePrices: AssetData[] = [
	{
		date: '2020-01-05T20:00:00Z',
		index: '62135',
	},
	{
		date: '2020-01-05T21:00:00Z',
		index: '62171',
	},
];

export const mockGet = jest.fn(async symbol =>
	Promise.resolve({
		...sampleAsset,
		symbol,
	}),
);

export const mockHistory = jest.fn(async symbol =>
	Promise.resolve({
		...sampleAsset,
		...samplePrices,
		symbol,
	}),
);

export const mockAll = jest.fn(async () => Promise.resolve([sampleAsset]));

const mock = jest.fn().mockImplementation(() => {
	return {
		get: mockGet,
		history: mockHistory,
		all: mockAll,
	};
});

export default mock;
