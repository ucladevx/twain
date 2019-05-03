// defining the routing
const express = require("express")
const router = express.Router()
const { Activity } = require("../db")
const config = require("../Config")

// the backend code to create a row in the activity server table
function putItem() {
    // the code for making a POST request to localhost:8000/activity
    router.post("/", (req, res) => {
        const { body } = req

        // if either the "user_id" or "activity_type" field is empty, the request is invalid
        if (!body.user_uuid || !body.activity_type) {
            const response = {
                message: "invalid request: expected fields not found"
            }
            return res.status(400).json(response)
        }
        // confirming that the activity_type provided is an existing activity type
        if (!config.activityTypes.includes(body.activity_type)) {
            const response = {
                message: "invalid request: unrecognized activity type"
            }
            return res.status(400).json(response)
        }

        // code for valid request
        Activity.create({ user_uuid: body.user_uuid, activity_type: body.activity_type }).then(activity => {
            // creating our response object if row is successfully created
            const response = {
                id: activity.get("id"),
                activity_type: activity.get("activity_type"),
                createdAt: activity.get("createdAt")
            }
            return res.status(200).json(response)
        }).catch(error => {
            const response = {
                message: error
            }
            return res.status(500).json(response)
        })
    });
}

putItem()

// ensuring that this code can exported to ../server.js
module.exports = {
    router: router,
    putItem: putItem()
}
