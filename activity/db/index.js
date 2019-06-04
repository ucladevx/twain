const Config = require('../Config')
const Sequelize = require('sequelize')

const db = new Sequelize(Config.DB.DATABASE_URL)

const Activity = require('./schema/activityTableSchema')(Sequelize, db)

// creating a new Sequelize instance with
// database: postgres
// username: postgres
// password: example
const setup = () => {
    // Create Tables
    Activity.sync().catch(error => {
        console.error('error: ', error)
    })
}

module.exports = { Activity, setup }
