
// demo the use of express api endpoint with ava
const express = 		require('express')
const bodyParser = 	require('body-parser')

const app = express();

app.use(bodyParser.json());


const signupHandler = (req, res) => {
	console.log("entered handler")
	console.log(req.body)
	//res.send({status: 200})
	res.writeHead(200, {'Content-Type': 'application/json'})
	res.write(JSON.stringify({ email: 'ava@rocks.com' }))
	res.end()
	//res.status = 200
//	res.body = { email: 'ava@rocks.com' }
	///resolve(res)
//	return new Promise ((resolve, reject) => {
//		resolve(res)
//	})
}

app.get('/status', (req , res) => {
  res.send({
    status: 'Ok'
  })
})

app.post('/signup', signupHandler);


module.exports = app
