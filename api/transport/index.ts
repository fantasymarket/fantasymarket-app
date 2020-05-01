import AssetsTransport from './assets';
import GameTransport from './game';
import OrdersTransport from './orders';
import UserTransport from './user';

import { ObservableMap } from 'mobx';

export default class TransportLayer {
	cfg: ObservableMap;

	assets: AssetsTransport;
	game: GameTransport;
	orders: OrdersTransport;
	user: UserTransport;

	constructor({ cfg }: { cfg: ObservableMap }) {
		this.cfg = cfg;

		this.assets = new AssetsTransport({ cfg });
		this.game = new GameTransport({ cfg });
		this.orders = new OrdersTransport({ cfg });
		this.user = new UserTransport({ cfg });
	}
}

export interface PaginatedRequest {
	limit?: number;
	offset?: number;
	sortBy?: string;
	order?: "ascending" | "descending"
}

export interface PaginatedResponse {
	count: number;
	total: number;
}
