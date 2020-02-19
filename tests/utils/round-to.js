import test from 'ava';
import roundTo from 'utils/round-to';

test('rounding actually works', t => {
	t.is(roundTo(5, 314), 315);
	t.is(roundTo(2, 314), 314);
	t.is(roundTo(10, 314), 310);
	t.is(roundTo(13, 314), 312);
	t.throws(() => roundTo(0, 314));
});
