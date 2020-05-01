import ky from 'ky-universal';
import { ObservableMap } from 'mobx';

interface AssetsTransport {
	get({
		symbol,
	}: {
		symbol: string;
	}): Promise<AssetResponse>;
	all(): Promise<AssetResponse[]>;
}


export type AssetType = "stock" | "crypto" | "etf"
export interface AssetResponse {
	symbol: string;
	type: AssetType,
	name: string;
	description?: string;
	price: number;
	price24h?: number;
	volume?: number;
	volume24h?: number;
}

class AssetsTransport implements AssetsTransport {
	cfg: ObservableMap;

	constructor({ cfg }: { cfg: ObservableMap }) {
		this.cfg = cfg;
	}

	get = ({
		symbol,
	}: {
		symbol: string;
	}): Promise<AssetResponse> =>
		ky
			.get(`stocks/${encodeURIComponent(symbol)}`, {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();

	all = (): Promise<AssetResponse[]> =>
		ky
			.get('stocks', {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();
}

export default AssetsTransport;
