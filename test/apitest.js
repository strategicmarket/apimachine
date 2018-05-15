import test 				from 'ava';
import request 			from 'supertest';
import express 			from 'express';
import bodyParser 	from 'body-parser'

const app = express();

const signupHandler = () => {
	resolve()
}

const makeApp = () => {
	const app = express();
	app.use(bodyParser.json());
	app.post('/signup', signupHandler);
	return app;
}

test('signup:Success', async t => {
	t.plan(2);

	const res = await request(makeApp())
		.post('/signup')
		.send({email: 'ava@rocks.com', password: '123123'});

	t.is(res.status, 200);
	t.is(res.body.email, 'ava@rocks.com');
});
