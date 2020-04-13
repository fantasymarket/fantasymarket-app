import 'mobx-react-lite/batchingOptOut';

import React, { useContext } from 'react';
import { AsyncTrunk } from 'mobx-sync';
import { observable } from 'mobx';
import UserStore from './user';

export const init = () => {
	const cfg = observable.map({
		hydrated: false,
		apiBase: process.env.apiBase,
	});

	const stores = {};
	stores.user = new UserStore(stores, cfg);

	if (process.browser) {
		Promise.all(
			Object.entries(stores).map(([name, store]) => {
				return new AsyncTrunk(store, {
					storage: global.localStorage,
					delay: 0,
					storageKey: name,
				}).init();
			}),
		)
			.then(() => {
				cfg.set('hydrated', true);
			})
			.catch(err => console.error(err));
	} else {
		cfg.set('hydrated', true);
	}

	if (process.env.NODE_ENV !== 'production' && process.browser) {
		global.api = stores;
	}

	return { ...stores, cfg };
};

export const APIContext = React.createContext();
export const APIProvider = APIContext.Provider;
export const APIConsumer = APIContext.Consumer;
export const useAPI = () => {
	return useContext(APIContext);
};
