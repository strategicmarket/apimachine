
// test demonstrating integration of supertest with ava
// supertest used to execute an 'moack api' against the routes of this same server -- running port 3100

import test 				from 'ava';
import request 			from 'supertest';
import app 					from '../routes/app.js'

test('signup:Success', async t => {
	t.plan(2);

	// note that supertest is used by ava to issue a request against the
	// route that is resident on this server 

	const res = await request(app)
		.post('/signup')
		.send({email: 'admin@strategicmachines.io', password: '123123'});

	t.is(res.status, 200);
	t.is(res.body.email, 'admin@strategicmachines.io');
});
