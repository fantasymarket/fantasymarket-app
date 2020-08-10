import ky from 'ky-universal';
import { ObservableMap } from 'mobx';

interface GameTransport {
	time: () => Promise<TimeResponse>;
}

export interface TimeResponse {
	timestamp: string;
	ticksPerSecond: number;
	gameSecondsPerTick: number;
	startDate: string;
	ticksSinceStart: number;
}

class GameTransport implements GameTransport {
	cfg: ObservableMap;

	constructor({ cfg }: { cfg: ObservableMap }) {
		this.cfg = cfg;
	}

	time = async (): Promise<TimeResponse> =>
		ky
			.get('time', {
				prefixUrl: this.cfg.get('apiBase'),
			})
			.json();
}

export default GameTransport;
