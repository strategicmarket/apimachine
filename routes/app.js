
// demo the use of express api endpoint
const express = 		require('express')
const bodyParser = 	require('body-parser')
const request =     require('request')

const app = express();

// simple test function returning static data
const signupHandler = (req, res) => {
	const {method, url, headers, body } = req
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.write(JSON.stringify({ email: 'admin@strategicmachines.io' }))
	res.end()
}

// test micromachine platform hosts microservices and several test routes
let  api = 'http://localhost:5500'

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

//  function issues http call to server and returns static response
async function shipHandler(req, res) {
	const {method, url, headers, body } = req
	const result = await fetch(url)
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.write(result)
	res.end()
}

const fetch = (route) => {
	return new Promise((resolve, reject) => {
	   request.get( api + route, function (error, response, body) {
	       if (error) {
	          console.log("Error encountered in microservices http call - Ship")
	          console.log(error)
	          reject(error) }
	       resolve(body)
	    });
	  })
}


module.exports = app
