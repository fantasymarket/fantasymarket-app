import ky from 'ky-universal';
import { ObservableMap } from 'mobx';

interface AssetsTransport {
	get: ({
		symbol,
		time,
		tick,
	}: {
		symbol: string;
		time?: string;
		tick?: number;
	}) => Promise<AssetResponse>;

	history: ({
		symbol,
		from,
		to,
		fromTick,
		toTick,
	}: {
		symbol: string;
		from?: string;
		to?: string;
		fromTick?: number;
		toTick?: number;
	}) => Promise<AssetResponse>;

	all: ({
		time,
		tick,
	}: {
		time?: string;
		tick?: number;
	}) => Promise<AssetResponse[]>;
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
	volume?: string;
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
		tick,
	}: {
		symbol: string;
		time?: string;
		tick?: number;
	}): Promise<AssetResponse> =>
		ky
			.get(`assets/${encodeURIComponent(symbol)}`, {
				prefixUrl: this.cfg.get('apiBase'),
				searchParams: { time, tick },
			})
			.json();

	history = async (props: {
		symbol: string;
		from?: string;
		to?: string;
		fromTick?: number;
		toTick?: number;
	}): Promise<AssetResponse> =>
		ky
			.get(`assets/${encodeURIComponent(props.symbol)}/history`, {
				prefixUrl: this.cfg.get('apiBase'),
				searchParams: props,
			})
			.json();

	all = async (props: {
		time?: string;
		tick?: number;
	}): Promise<AssetResponse[]> =>
		ky
			.get('assets', {
				prefixUrl: this.cfg.get('apiBase'),
				searchParams: props,
			})
			.json();
}

export default AssetsTransport;
