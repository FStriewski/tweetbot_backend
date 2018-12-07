const Router = require('express').Router;
// const Sequelize = require('sequelize');
const twit = require('../credentials/twit');
const keywordQuery = require('./transformation');

const router = new Router();

router.get('/tweets', (request, response) => {
  twit.get(
    'search/tweets',
    { q: request.query.keyword, count: request.query.count || 5},
    (err, data, res) => {
      let parsedKeywordQuery = keywordQuery(data);
      response.send(parsedKeywordQuery);
    }
  );
});

module.exports = router;
