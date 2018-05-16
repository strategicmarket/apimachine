
// test demonstrating integration of supertest with ava
// supertest used to execute an 'api' against embedded server

import test 				from 'ava';
import request 			from 'supertest';
import app 					from '../routes/app.js'


let  api = request('http://localhost:5500');


test('signup:Success', async t => {
	t.plan(2);

	const res = await request(app)
		.post('/signup')
		.send({email: 'ava@rocks.com', password: '123123'});

	t.is(res.status, 200);
	t.is(res.body.email, 'ava@rocks.com');
});
