// start nodemon for server and console, use http localhost:4001/tweets for testing requests.

const express = require('express')
var cors = require('cors');
const Twit = require('twit')
const app = express()

const twit = new Twit({
  access_token: '863335407362158596-PfixfMsxaGCmeJjnlQvBA755Qe6Y7R4',
  access_token_secret: 'RHk4nXvZCQJKODFQ148fi36KQ5pxrTuA4WO7rZt0ASOvQ',
  consumer_key: 'ViQVPujGb7SUGjGJvuTHsqQjm',
  consumer_secret: 'c0PUaTcxQseew5DPOGlqZKNZmwMk1NcEo1qWWxeh8NHTDA27nX'
});

app.use(cors());

// app.get('/test', (request, response) => {
//   console.log('test successfull')
//   response.end()
// })



app.get('/tweets', (request, response) => {
  twit
    .get('search/tweets', { q: 'elonmusk', count: 1 })
    .then(response => {
      const result = response.data.statuses[0].text
      console.log(result)
      return result
    });

response.end()
})

// app.get('/followers', (request, response) => {
//   twit.get(
//     'followers/id',
//     { screen_name: 'superfakecat'},
//     data => console.log(data)
//   ).then(data => console.log(data))
// response.end()
// })

app.listen(4001, ()=> console.log("API on port 4001"))