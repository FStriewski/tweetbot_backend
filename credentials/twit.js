const Twit = require('twit');

const twit = new Twit({
  access_token: '863335407362158596-PfixfMsxaGCmeJjnlQvBA755Qe6Y7R4',
  access_token_secret: 'RHk4nXvZCQJKODFQ148fi36KQ5pxrTuA4WO7rZt0ASOvQ',
  consumer_key: 'ViQVPujGb7SUGjGJvuTHsqQjm',
  consumer_secret: 'c0PUaTcxQseew5DPOGlqZKNZmwMk1NcEo1qWWxeh8NHTDA27nX'
});

module.exports = twit;