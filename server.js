
const app = require('./routes/app.js')

let port = 3100

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});
