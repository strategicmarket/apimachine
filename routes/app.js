
// demo the use of express api endpoint with ava
const express = 		require('express')
const bodyParser = 	require('body-parser')

const app = express();

app.use(bodyParser.json({
	type: 'application/json',
  extended: true
	}));

const signupHandler = (req, res) => {
	const {method, url, headers, body } = req
	console.log("entered handler")
	console.log("method " + method)
	console.log("url " + url)
	console.log("headers " + JSON.stringify(headers))
	console.log("body " + JSON.stringify(body))
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
