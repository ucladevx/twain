const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// middleware to parse JSON data
app.use(bodyParser.json());

// the service we'll use to make SQL queries
const Sequelize = require('sequelize')

// for including activity.js and its route
const activity = require("./routes/activity")

// creating a new Sequelize instance with
// database: postgres
// username: postgres
// password: example
const sequelize = new Sequelize('postgres', 'postgres', 'example', {
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

// if we try to access 
app.get('/', (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.send("successful authentication")
    })
    .catch(err => {
      console.error("Error: ", err)
      res.send("failed to authenticate")
    })
})

// telling the app that localhost:8080/activity
// will use the code in the activity.js file
app.use("/activity", activity);

// serving at port 8000
const server = app.listen(8000, () => {
  console.log('listening on port 8000')
})
