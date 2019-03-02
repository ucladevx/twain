const Sequelize = require('sequelize')
const activityTable = require("./schema/activityTable")

// creating a new Sequelize instance with
// database: postgres
// username: postgres
// password: example

const setup = () => {
  const db = new Sequelize('postgres', 'postgres', 'example', {
    host: 'activity-db',
    port: 5432, // postgres's default port
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  })

  // Create Tables
  const ActivityTable = activityTable(Sequelize, db)
  ActivityTable.sync().catch(error => {
    console.error('error: ', error)
  })
}

module.exports = setup
