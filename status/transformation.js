
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
