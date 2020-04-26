import UserTransport from './user';
import { ObservableMap } from 'mobx';

export default class TransportLayer {
	cfg: ObservableMap;
	user: UserTransport;

	constructor({ cfg }: { cfg: ObservableMap }) {
		this.cfg = cfg;

		this.user = new UserTransport({ cfg });
	}
}
