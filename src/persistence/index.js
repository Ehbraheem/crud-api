const connection = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql',
  }
};

export const close = knex => knex.destroy();

export default (connect = connection) => require('knex')(connect);
