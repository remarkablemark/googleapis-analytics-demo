const { analytics } = require('@googleapis/analytics');
const { jwt } = require('./auth');
const { VIEW_ID } = require('./env');

/**
 * @see {@link https://developers.google.com/analytics/devguides/reporting/realtime/v3/reference/data/realtime/get}
 *
 * @return {Promise<number>}
 */
exports.getActiveUsers = async () => {
  await jwt.authorize();

  const client = analytics({
    auth: jwt,
    version: 'v3',
  });

  const { data } = await client.data.realtime.get({
    ids: `ga:${VIEW_ID}`,
    metrics: 'rt:activeUsers',
  });

  const activeUsers = data.totalsForAllResults['rt:activeUsers'];
  return Number(activeUsers);
};
