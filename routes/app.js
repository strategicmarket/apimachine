
// demo the use of express api endpoint
const express = 		require('express')
const bodyParser = 	require('body-parser')

const app = express();

// test micromachine platform hosts microservices and several test routes
let  api = request('http://localhost:5500');

app.use(bodyParser.json({
	type: 'application/json',
  extended: true
	}));

app.get('/status', (req , res) => {
  res.send({
    status: 'Ok'
  })
})

// return static response
app.post('/signup', signupHandler);

// pulse micromachine and return static response
app.get('/api/ship', shipHandler);


// simple function returns static data
const signupHandler = (req, res) => {
	const {method, url, headers, body } = req
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.write(JSON.stringify({ email: 'admin@strategicmachines.io' }))
	res.end()
}

//  function issues http call to server and returns static response
const shipHandler = (req, res) => {
	const {method, url, headers, body } = req
	const result = await api.get('/api/ship');
	console.log(result)
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.write(JSON.stringify({ message: 'making progress' }))
	res.end()
}


module.exports = app
