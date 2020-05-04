import { observable, reaction, action, when } from 'mobx';
import { ignore } from 'mobx-sync';

import jwtDecode from 'jwt-decode';

import { Config, Stores } from '..';
import { User } from 'api/transport/user';
import TransportLayer from 'api/transport';

class UserStore {
	@ignore req: TransportLayer
	@ignore stores: Stores = {}
	@ignore cfg: Config
	@ignore @observable hydrated = false;
	@ignore checkAuthInterval

	// We track the first load, since we
	// always create a new guest account
	// for new users
	@observable firstLoad = true;

	@observable user: User = {};
	@observable token = '';
	@observable authenticated = false;

	// We track past usernames so users
	// don't loose their progress when they forget their username
	// NOTE: only added after user presses logout and can be cleared on the login screen
	@observable pastUsernames = [];

	constructor({ transportLayer, stores, cfg }: {
		transportLayer: TransportLayer;
		stores: Stores;
		cfg: Config;
	}) {
		this.req = transportLayer;
		this.stores = stores;
		this.cfg = cfg;

		// This is only run in the browser
		// since we don't want the server to
		// create guest users for every request
		when(
			() => process.browser && this.hydrated && this.firstLoad,
			() =>
				this.create()
					.then(() => {
						this.firstLoad = false;
					})
					.catch(err => console.error(err))
		)

		reaction(
			() => [this.hydrated, this.token],
			() => this.checkAuthentification(),
		);

		this.checkAuthInterval = global.setInterval(this.checkAuthentification, 30 * 1000)
	}

	// cleanup will clear all currently running intervals
	cleanup = () => clearInterval(this.checkAuthInterval)

	checkAuthentification = () => {
		if (!this.hydrated) return;
		this.authenticated = this.verifyAuthToken(this.token);
		if (!this.authenticated) this.logout();
	}

	verifyAuthToken = (token: string): boolean => {
		if (token === '') return false;

		const t = jwtDecode(token);
		return t?.exp && Date.now() < t.exp * 1000;
	};

	login = (username = '', password = '') =>
		this.req.user.login({ username, password }).then(({ token, user }) => {
			if (!token || !user) {
				throw new Error('invalid server response');
			}

			this.user = user;
			this.token = token;

			return user;
		});

	create = () =>
		this.req.user.create().then(({ token, user }) => {
			if (!token || !user) {
				throw new Error('invalid server response');
			}

			this.user = user;
			this.token = token;

			return user;
		});

	logout = () => {
		if (this.user.username) this.pastUsernames.push(this.user.username);
		this.user = {};
		this.token = '';
		this.authenticated = false;
	};
}

export default UserStore;
