const Sequelize = require("sequelize");

const sequelize = new Sequelize('test-db-new', 'postgres', 'argusadmin', {
    host: 'localhost',
    dialect: 'postgres'
});

const db = {
    Registration: sequelize.import('./registration'),
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;