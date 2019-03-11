// defining the routing
const express = require("express")
const router = express.Router()
const { Activity } = require("../db")
const config = require("../Config")

// the ending function for processing POST requests
router.post("/", (request, response) => {
    const { body } = request

    // if either the "user_id" or "activity_type" field is empty, the request is invalid
    if (!body.user_uuid || !body.activity_type) {
        const response = {
            message: "invalid request: expected fields not found\n"
        }
        return response.status(400).json(response)
    }
    // confirming that the activity_type provided is an existing activity type
    if (!config.activityTypes.includes(body.activity_type)) {
        const response = {
            message: "invalid request: unrecognized activity type\n"
        }
        return response.status(400).json(response)
    }

    // code for valid request
    Activity.create({ user_uuid: body.user_uuid, activity_type: body.activity_type }).then(activity => {
        // creating our response object if row is successfully created
        const response = {
            id: activity.get("id"),
            activity_type: activity.get("activity_type"),
            createdAt: activity.get("createdAt")
        }
        return response.status(200).json(response)
    }).catch(error => {
        const response = {
            message: error
        }
        return response.status(500).json(response)
    })
});

// ensuring that this code can exported to ../server.js
module.exports = router
