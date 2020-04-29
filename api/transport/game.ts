import ky from 'ky-universal';
import { ObservableMap } from 'mobx';
import { AssetType } from './assets';
import { string } from 'prop-types';

interface GameTransport {
	time(): Promise<TimeResponse>
}

export interface TimeResponse {
	timestamp: string;
	tickesPerSecond: string;
	timePerTick: string;
}

class GameTransport implements GameTransport {
	cfg: ObservableMap;

	constructor({ cfg }: { cfg: ObservableMap }) {
		this.cfg = cfg;
	}

	time = (): Promise<TimeResponse> =>
		ky
			.get('game/time', {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();


}

export default GameTransport;
