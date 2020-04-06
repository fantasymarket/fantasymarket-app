import React, { useContext } from 'react';
import UserStore from './user';

export const init = () => {
	const stores = {
		user: new UserStore(),
	};

	return stores;
};

export const APIContext = React.createContext();
export const APIProvider = APIContext.Provider;
export const APIConsumer = APIContext.Consumer;
export const useAPI = () => {
	return useContext(APIContext);
};
