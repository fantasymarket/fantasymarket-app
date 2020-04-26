import 'mobx-react-lite/batchingOptOut';

import React, { useContext } from 'react';
import { AsyncTrunk } from 'mobx-sync';
import { observable, ObservableMap } from 'mobx';
import UserStore from './user';

import * as transportLayer from './transport';

export type Config = ObservableMap<string, ConfigKey>;
export type ConfigKey = string | number | boolean | object;
export interface API {
	user?: UserStore;
	cfg?: Config;
	[key: string]: object;
}

export const init = (): API => {
	const cfg = observable.map({
		hydrated: false,
		apiBase: process.env.apiBase,
	});

	const stores: API = {};
	stores.user = new UserStore({ transportLayer, stores, cfg });

	if (process.browser) {
		Promise.all(
			Object.entries(stores).map(([name, store]) => {
				return new AsyncTrunk(store, {
					storage: localStorage,
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
		// Stores don't need to be hydrated on the serverside,
		// so we just pretend they were successfully hydrated
		cfg.set('hydrated', true);
	}

	const api: API = { ...stores, cfg };

	if (process.env.NODE_ENV !== 'production' && process.browser) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(window as any).api = api;
	}

	return api;
};

export const APIContext = React.createContext<API>({});
export const APIProvider = APIContext.Provider;
export const APIConsumer = APIContext.Consumer;
export const useAPI = (): API => {
	return useContext(APIContext);
};
