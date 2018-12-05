const Router = require('express').Router;
// const Sequelize = require('sequelize');
// const Events = require('./model');
const twit = require('../credentials/twit')

;
const router = new Router();

router.get('/tweets', (request, response) => {
  twit.get('search/tweets', { q: 'elonmusk', count: 1 }, (err, data, res) => {
    response.send(data);
  });
});

module.exports = router;
