import ky from 'ky-universal';
import { ObservableMap } from 'mobx';

interface AssetsTransport {
	get: ({
		symbol,
		time,
	}: {
		symbol: string;
		time?: string;
	}) => Promise<AssetResponse>;

	history: ({
		symbol,
		from,
		to,
	}: {
		symbol: string;
		from?: string;
		to?: string;
	}) => Promise<AssetResponse>;

	all: () => Promise<AssetResponse[]>;
}

export type AssetType = 'stock' | 'crypto' | 'etf';
export interface AssetResponse {
	symbol: string;
	type: AssetType;
	name: string;
	description?: string;
	tick?: string;
	date?: string;
	price: string;
	price24h?: string;
	volume?: string;
	volume24h?: string;
	from?: string;
	to?: string;
	prices?: AssetData[];
}

export interface AssetData {
	date: string;
	index: string;
}

class AssetsTransport implements AssetsTransport {
	cfg: ObservableMap;

	constructor({ cfg }: { cfg: ObservableMap }) {
		this.cfg = cfg;
	}

	get = async ({
		symbol,
		time,
	}: {
		symbol: string;
		time?: string;
	}): Promise<AssetResponse> =>
		ky
			.get(`assets/${encodeURIComponent(symbol)}`, {
				prefixUrl: this.cfg.get('apiBase'),
				searchParams: { time },
			})
			.json();

	history = async ({
		symbol,
		from,
		to,
	}: {
		symbol: string;
		from?: string;
		to?: string;
	}): Promise<AssetResponse> =>
		ky
			.get(`assets/${encodeURIComponent(symbol)}/history`, {
				prefixUrl: this.cfg.get('apiBase'),
				searchParams: { from, to },
			})
			.json();

	all = async (): Promise<AssetResponse[]> =>
		ky
			.get('assets', {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();
}

export default AssetsTransport;
