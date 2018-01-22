const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex('users').del()
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('johnson', salt);
    return Promise.join(
      knex('users').insert({
        username: 'jeremy',
        password: hash,
        admin: false
      })
    );
  })
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('88776655443322', salt);
    return Promise.join(
      knex('users').insert({
        username: 'hank',
        password: hash,
        admin: true
      })
    );
  });
};
