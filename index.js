// start nodemon for server and console, use http localhost:4001/tweets for testing requests.

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const Twit = require('twit')
const app = express()

const twit = new Twit({
  access_token: '863335407362158596-PfixfMsxaGCmeJjnlQvBA755Qe6Y7R4',
  access_token_secret: 'RHk4nXvZCQJKODFQ148fi36KQ5pxrTuA4WO7rZt0ASOvQ',
  consumer_key: 'ViQVPujGb7SUGjGJvuTHsqQjm',
  consumer_secret: 'c0PUaTcxQseew5DPOGlqZKNZmwMk1NcEo1qWWxeh8NHTDA27nX'
});

app.use(cors());
app.use(bodyParser.json());

app.get('/tweets', (request, response) => {
  twit
    .get(
      'search/tweets',
      { q: 'elonmusk', count: 1 },
      (err, data, res) => { response.send(data) }
    )
})

app.get('/followers', (request, response) => {
  twit.get('followers/ids', { screen_name: 'BillGates' }, (err, data, res) => {
    response.send(data);
  });
});

app.listen(4001, () => console.log("API on port 4001"))