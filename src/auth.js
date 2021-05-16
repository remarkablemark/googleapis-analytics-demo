const { auth } = require('@googleapis/analytics');

const { client_email, private_key } = require('../auth.json');

const scopes = 'https://www.googleapis.com/auth/analytics.readonly';

const jwt = new auth.JWT(client_email, null, private_key, scopes);

module.exports = {
  jwt,
};
