const output = {
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

const searchParams = {
  q: 'string', // querystring, max 500, including operators, REQUIRED
  geocode: 'string', //latitude, longitude, radius mi/km
  lang: 'string', // ISO 639-1 code, e.g. en de
  result_type: 'string', // mixed|recent|popular
  count: 'number', // max 100
  until: 'date', // y days limit
  since_id: 'number', // more recent then id
  max_id: 'number', // less or equal id

}