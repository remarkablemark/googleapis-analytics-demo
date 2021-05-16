const { auth } = require('@googleapis/analytics');
const { CLIENT_EMAIL, PRIVATE_KEY } = require('./env');

const scopes = 'https://www.googleapis.com/auth/analytics.readonly';

exports.jwt = new auth.JWT(CLIENT_EMAIL, null, PRIVATE_KEY, scopes);
