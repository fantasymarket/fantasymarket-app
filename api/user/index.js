import { observable, reaction } from 'mobx';
import jwtDecode from 'jwt-decode';
import { ignore } from 'mobx-sync';

class UserStore {
	@ignore
	cfg = {};

	@ignore
	stores = {};

	constructor({ transportLayer, stores, cfg }) {
		this.req = transportLayer;
		this.stores = stores;
		this.cfg = cfg;

		// This is only run in the browser
		// since we don't want the server to
		// create guest users for every request
		if (process.browser) {
			const disposer = reaction(
				() => [cfg.get('hydrated'), this.firstLoad],
				() => {
					if (!cfg.get('hydrated') || !this.firstLoad) return;

					this.create()
						.then(() => {
							this.firstLoad = false;
							disposer();
						})
						.catch(err => console.error(err));
				},
			);
		}

		reaction(
			() => [cfg.get('hydrated'), this.token],
			() => {
				if (!cfg.get('hydrated')) return;
				this.authenticated = this.verifyAuthToken(this.token);
				if (!this.authenticated) this.logout();
			},
		);
	}

	verifyAuthToken = token => {
		if (token === '') return false;

		const t = jwtDecode(token);
		return t?.exp && Date.now() < t.exp * 1000;
	};

	// We track the first load, since we
	// always create a new guest account
	// for new users
	@observable firstLoad = true;

	@observable user = {};
	@observable token = '';
	@observable authenticated = false;

	// We track past usernames so users
	// don't loose their progress when they forget their username
	// NOTE: only added after user presses logout and can be cleared on the login screen
	@observable pastUsernames = [];

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
