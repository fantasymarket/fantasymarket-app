import { observable, computed, reaction } from 'mobx';
import ky from 'ky-universal';
import jwtDecode from 'jwt-decode';

class UserStore {
	constructor(stores, cfg) {
		this.stores = stores;
		this.cfg = cfg;

		// This is only run in the browser
		// since we don't want the server to
		// create guest users for every request
		if (process.browser) {
			reaction(
				() => [cfg.get('hydrated'), this.firstLoad],
				() => cfg.get('hydrated') && this.firstLoad && this.create(),
			);
		}
	}

	// We track the first load, since we
	// always create a new guest account
	// for new users
	@observable firstLoad = false;

	@observable user = {};
	@observable token = '';

	// We track past usernames so users
	// don't loose their progress when they forget their username
	// NOTE: only added after user presses logout and can be cleared on the login screen
	@observable pastUsernames = [];

	@computed authenticated = () => {
		const token = jwtDecode(this.token);
		return token?.exp && Date.now() > token.exp * 1000;
	};

	login = (username = '', password = '') =>
		ky
			.post('/user/login', {
				prefixURL: this.cfg.get('apiBase'),
				body: { username, password },
			})
			.json()
			.then(({ token, user }) => {
				if (!token || !user) {
					throw new Error('invalid server response');
				}

				this.user = user;
				this.token = token;

				return user;
			});

	create = () =>
		ky
			.put('/user', {
				prefixURL: this.cfg.get('apiBase'),
			})
			.then(({ token, user }) => {
				if (!token || !user) {
					throw new Error('invalid server response');
				}

				this.user = user;
				this.token = token;

				return user;
			});

	logout = () => {
		this.pastUsernames.push(this.user.username);
		this.user = {};
		this.token = '';
	};
}
export default UserStore;
