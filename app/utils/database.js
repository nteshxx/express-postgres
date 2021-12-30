const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.PSQL_DB,
    process.env.PSQL_USER,
    process.env.PSQL_PASSWORD,
    {
        host: process.env.PSQL_HOST,
        dialect: 'postgres',
    }
);

module.exports = {
    sequelize,
};
