
// test to pulse a route the micromachine server, running on port 5500
// this demonstrates the use of supertest test runner -- with ava -- for this api call

// this test pulses a microservice that has ben configured for openwhisk, sending
// a test data object

import test 				from 'ava';
import request 			from 'supertest';
import data   		  from '../db/data.json'

let  api = request('http://localhost:5500');

test('openwhiskapi', async t => {
	t.plan(1);

	const res = await api
		.post('/api/ibm')
		.send(data);

	t.is(res.status, 200);
	// refactoring needed to figure out how to test individual fields on data object returned
	//t.is(res.body.message.Body, 'hello world');
});
