require('dotenv').config();

let { CLIENT_EMAIL, PRIVATE_KEY, VIEW_ID } = process.env;

if (!CLIENT_EMAIL || !PRIVATE_KEY) {
  const { client_email, private_key } = require('../auth.json');
  CLIENT_EMAIL = client_email;
  PRIVATE_KEY = private_key;
}

module.exports = {
  CLIENT_EMAIL,
  PRIVATE_KEY,
  VIEW_ID,
};
