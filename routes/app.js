
// demo the use of express api endpoint
const express = 		require('express')
const bodyParser = 	require('body-parser')

const app = express();

app.use(bodyParser.json({
	type: 'application/json',
  extended: true
	}));

const signupHandler = (req, res) => {
	const {method, url, headers, body } = req
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.write(JSON.stringify({ email: 'admin@strategicmachines.io' }))
	res.end()

}

app.get('/status', (req , res) => {
  res.send({
    status: 'Ok'
  })
})

app.post('/signup', signupHandler);


module.exports = app
