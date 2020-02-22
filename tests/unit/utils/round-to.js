import test from 'ava';
import roundTo from 'utils/round-to';

test('rounding actually works', t => {
	t.is(roundTo(5, 314.1592653), 315);
	t.is(roundTo(5, 314.1592653, Math.floor), 310);
	t.is(roundTo(0.1, 314.1592653), 314.2);
	t.is(roundTo(0.05, 314.1592653), 314.15);
	t.is(roundTo(2, 314.1592653), 314);
	t.is(roundTo(1000, 514.1592653), 1000);
	t.is(roundTo(13, 314.1592653), 312);
	t.is(roundTo(10, Infinity), Infinity);
	t.is(roundTo(Infinity, 10), NaN);
	t.throws(() => roundTo(0, 314));
	t.throws(() => roundTo('20', '139.1'));
	t.throws(() => roundTo('JeööpWpröd'));
	t.is(roundTo(5, -23), -25);
	t.is(roundTo(-20, 100), 100);
});
