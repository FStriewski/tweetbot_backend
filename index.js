// start nodemon for server and console, use http localhost:4001/tweets for testing requests.

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

const twit = require('./credentials/twit');

app.use(cors());
app.use(bodyParser.json());


const statusRouter = require('./status/router')
app.use(statusRouter)


app.get('/status', (request, response) => {
  twit
  .get('statuses/sample', 
  (err, data, res) => {
    response.send(data);
  });
});

app.listen(4001, () => console.log("API on port 4001"))