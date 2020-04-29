import ky from 'ky-universal';
import { ObservableMap } from 'mobx';

interface OrdersTransport {
	get({
		orderID,
	}: {
		orderID: string;
	}): Promise<OrderResponse>;
	all(): Promise<OrderResponse[]>;
	cancel({
		orderID,
	}: {
		orderID: string;
	}): Promise<OrderResponse>;
	create(order: OrderRequest): Promise<OrderResponse>;
}

export type OrderType = "market" | "limit" | "stop" | "stop-loss";
export type OrderSide = "buy" | "sell";
export interface OrderRequest {
	orderID: string;
	type: OrderType;
	side: OrderSide;
	symbol: string;
	quantity: number;
	limitPrice: number;
	stopPrice: number,
}

export type OrderStatus = "filled" | "canceled" | "waiting";
export interface OrderResponse extends OrderRequest {
	createdAt: string;
	filledAt?: string;
	canceledAt?: string;
	status: OrderStatus;
}


class OrdersTransport implements OrdersTransport {
	cfg: ObservableMap;

	constructor({ cfg }: { cfg: ObservableMap }) {
		this.cfg = cfg;
	}

	get = ({
		orderID,
	}: {
		orderID: string;
	}): Promise<OrderResponse> =>
		ky
			.get(`orders/${encodeURIComponent(orderID)}`, {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();

	all = (): Promise<OrderResponse[]> =>
		ky
			.get('orders', {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();

	cancel = ({
		orderID,
	}: {
		orderID: string;
	}): Promise<OrderResponse> =>
		ky
			.get('orders', {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();

	create = (order: OrderRequest): Promise<OrderResponse> =>
		ky
			.put('orders', {
				prefixUrl: this.cfg.get('apiBase'),
				body: JSON.stringify(order),
			})
			.json();

}

export default OrdersTransport;
