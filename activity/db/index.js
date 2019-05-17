const Sequelize = require('sequelize')

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

// exporting the schemas of the different tables
const Activity = require('./schema/activityTableSchema')(Sequelize, db)
const Milestones = require("./schema/milestoneTableSchema")(Sequelize, db)

// creating a new Sequelize instance with
// database: postgres
// username: postgres
// password: example
const setup = () => {
    // Create Tables
    Activity
        .sync()
        .catch(error => {
            console.error('error: ', error)
        })

    Milestones
        .sync()
        .catch(error => {
            console.error("error: ", error)
        })
}

module.exports = { Activity, Milestones, setup }
