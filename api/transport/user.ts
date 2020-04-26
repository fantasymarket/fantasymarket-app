import ky from 'ky-universal';
import { ObservableMap } from 'mobx';

interface UserTransport {
	login({
		username,
		password,
	}: {
		username: string;
		password: string;
	}): Promise<LoginResponse>;
	create(): Promise<LoginResponse>;
}

export interface LoginResponse {
	token: string;
	user?: object;
	error?: object | string;
}

class UserTransport implements UserTransport {
	cfg: ObservableMap;

	constructor({ cfg }: { cfg: ObservableMap }) {
		this.cfg = cfg;
	}

	login = ({
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

	create = (): Promise<LoginResponse> =>
		ky
			.post('user/login', {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();
}

export default UserTransport;
