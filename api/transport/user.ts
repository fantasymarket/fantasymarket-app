import ky from 'ky-universal';
import { ObservableMap } from 'mobx';
import { AssetType } from './assets';

interface UserTransport {
	login: ({
		username,
		password,
	}: {
		username: string;
		password: string;
	}) => Promise<LoginResponse>;
	create: () => Promise<LoginResponse>;
	get: (userID: string) => Promise<User>;
	portfolio: (userID: string) => Promise<Portfolio>;
}

export interface Portfolio {
	portfolioID: string;
	userID: string;

	items: PortfolioItem[];
	balance: number;
}

export interface PortfolioItem {
	portfolioItemID: string;
	portfolioID: string;
	assetSymbol: string;
	assetType: AssetType;
	amount: number;
}

export interface User {
	userID?: string;
	username?: string;
}

export interface LoginResponse {
	token: string;
	user?: User;
	error?: Record<string, unknown> | string;
}

class UserTransport implements UserTransport {
	cfg: ObservableMap;

	constructor({ cfg }: { cfg: ObservableMap }) {
		this.cfg = cfg;
	}

	login = async ({
		username,
		password,
	}: {
		username: string;
		password: string;
	}): Promise<LoginResponse> =>
		ky
			.post('user/login', {
				prefixUrl: this.cfg.get('apiBase'),
				body: JSON.stringify({ username, password }),
			})
			.json();

	create = async (): Promise<LoginResponse> =>
		ky
			.post('user/login', {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();

	get = async (userID: string): Promise<User> =>
		ky
			.get(`user/${encodeURIComponent(userID)}`, {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();

	portfolio = async (userID: string): Promise<Portfolio> =>
		ky
			.get(`user/${encodeURIComponent(userID)}/portfolio`, {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();
}

export default UserTransport;
