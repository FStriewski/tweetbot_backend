const model = {
  created_at: 'string', // date time
  coordinates: '?', // ?
  text: 'string', // tweet body
  retweetCount: 'number',
  id: 'number', //userid
  name: 'string', // user name
  screen_name: 'string', // profile name
  activeSince: '', // user created at
  location: 'string', // country
  followersCount: 'number'
};

const keywordQuery = function(input) {
  return input.statuses.map(message => ({
    createdAt: message.created_at,
    coordinates: message.coordinates,
    text: message.text,
    retweetCount: message.retweet_count,
    id: message.user.id,
    name: message.user.name,
    screen_name: message.user.screen_name,
    activeSince: message.user.created_at,
    location: message.user.location,
    followersCount: message.followers_count
  }));
};

module.exports = keywordQuery;
