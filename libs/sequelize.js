const { Sequelize } = require('sequelize');

const { config } = require("../config/config")
const setupModels = require("../db/models/index")



const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
})


setupModels(sequelize)
sequelize.sync({ force: false }).then(() => {
  console.log('Database sync')
})

module.exports = sequelize;
