const express = require('express')
const app = express()
const Sequelize = require('sequelize')

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
        res.send("Successful authentication")
      })
      .catch(err => {
        console.error("Error: ", err)
        res.send("faild to authenticate")
      })
})

const server = app.listen(8000, () => {
  console.log('listening on port 8080')
})
