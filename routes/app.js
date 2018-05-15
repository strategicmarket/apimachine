
// demo the use of express api endpoint with ava
const express = 		require('express')
const bodyParser = 	require('body-parser')

const app = express();

app.use(bodyParser.json());


const signupHandler = (req, res) => {
	console.log("entered handler")
	res.status = 200
	res.body = { email: 'ava@rocks.com' }
	return res
}

app.post('/signup', signupHandler);


module.exports = app
