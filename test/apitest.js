
// test to pulse a route the micromachine server, running on port 5500
// this demonstrates the use of supertest test runner -- with ava -- for this api call 

import test 				from 'ava';
import request 			from 'supertest';

let  api = request('http://localhost:5500');

test('signup:Success', async t => {
	t.plan(2);

	const res = await api
		.get('/api/ship');

	t.is(res.status, 200);
	t.is(res.body.message, 'Ship!');
});
