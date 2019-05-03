// defining the routing
const express = require("express")
const router = express.Router()
const { Activity } = require("./db")
const config = require("./Config")
// including actual CRUD functionality
const activityRoute = require("./routes/activity")

// middleware to create row in activity table
function createItem(user_uuid, activity_type) {
    router.post("/", (req, res) => {
        activityRoute.putItem()
    })
}