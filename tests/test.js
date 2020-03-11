const test = require('ava');

const { default: a } = require('../dist/index');

test('通用唯一识别码UUID', (t) => {
	t.not(a(), a());
});
