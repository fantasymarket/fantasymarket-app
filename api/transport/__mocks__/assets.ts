import { AssetResponse } from "../assets"

export const sampleAsset: AssetResponse = {
	type: "stock",
	symbol: "GOOG",
	name: "BigCorp Inc.",
	description: '',
	price: 1000,
}

export const mockGet = jest.fn((symbol) => Promise.resolve({
	...sampleAsset,
	symbol,
}))

export const mockAll = jest.fn(() => Promise.resolve([sampleAsset]))

const mock = jest.fn().mockImplementation(() => {
	return {
		get: mockGet,
		all: mockAll,
	};
});

export default mock;