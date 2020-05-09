import { OrderResponse, OrderRequest } from '../orders';

export const sampleOrder: OrderResponse = {
	type: 'market',
	assetSymbol: 'GOOG',
	assetType: 'stock',
	side: 'buy',
	status: 'waiting',
	quantity: 100,
	orderID: '123',
	userID: '123',
	createdAt: new Date('Mon Jan 01 2001').toISOString(),
};

export const mockGet = jest.fn(async (orderID: string) =>
	Promise.resolve({
		...sampleOrder,
		orderID,
	}),
);

export const mockAll = jest.fn(async () => Promise.resolve([sampleOrder]));
export const mockCancel = jest.fn(async (orderID: string) =>
	Promise.resolve({
		...sampleOrder,
		orderID,
		status: 'canceled',
		canceledAt: new Date('Mon Jan 01 2001'),
	}),
);

export const mockCreate = jest.fn(async (orderRequest: OrderRequest) =>
	Promise.resolve({
		...orderRequest,
		createdAt: new Date('Mon Jan 01 2001'),
		status: 'waiting',
	}),
);

const mock = jest.fn().mockImplementation(() => {
	return {
		get: mockGet,
		all: mockAll,
		cancel: mockCancel,
		create: mockCreate,
	};
});

export default mock;
