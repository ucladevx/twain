const express = require('express')
const app = express()

// the service we'll use to make SQL queries
const Sequelize = require('sequelize')

// for including activity.js and its route
const activity = require("./routes/activity");

const sequelize = new Sequelize('postgres', 'postgres', 'example', {
  host: 'activity-db',
  port: 5432,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

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

<<<<<<< HEAD
const server = app.listen(8000, () => {
=======
// telling the app that localhost:8080/activity 
// will use the code in the activity.js file
app.use("/activity", activity);

const server = app.listen(8080, () => {
>>>>>>> created /routes folder, testing /activity route
  console.log('listening on port 8080')
})
