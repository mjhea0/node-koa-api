const queries = require('../db/queries/users');

function ensureAuthenticated(context) {
  return context.isAuthenticated();
}

function ensureAdmin(context) {
  return new Promise((resolve, reject) => {
    if (context.isAuthenticated()) {
      queries.getSingleUser(context.state.user.id)
      .then((user) => {
        if (user && user[0].admin) resolve(true);
        resolve(false);
      })
      .catch((err) => { reject(false); });
    }
    return false;
  });
}

module.exports = {
  ensureAuthenticated,
  ensureAdmin
};
