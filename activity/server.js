const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { setup } = require('./db')

// middleware to parse JSON data
app.use(bodyParser.json())

// setting up /activity route
const activity = require("./routes/activity")
app.use("/activity", activity)

// setting up /dump route
const dump = require("./routes/dump")
app.use("/dump", dump)

// Initialize Database
setup()

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

// serving at port 8000
const server = app.listen(8000, () => {
  console.log('listening on port 8000')
})
