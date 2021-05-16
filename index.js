const { getActiveUsers } = require('./src/realtime');

(async () => {
  console.log('Real Time Data: get active users:', await getActiveUsers());
})();
