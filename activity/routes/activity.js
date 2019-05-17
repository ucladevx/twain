// defining the routing
const express = require("express")
const router = express.Router()
const { Activity, db } = require("../db")
const config = require("../Config")

// if you perform a POST request at this endpoint, we'll create a row
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
    Activity
        .create({ user_uuid: body.user_uuid, activity_type: body.activity_type }).then(activity => {
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
})

// if you perform a GET request, we'll read from the table instead
// uuid corresponds to the user's user_uuid for which we want data
router.get("/:user", (req, res) => {
    Activity
        .findAll({
            // using .findAll() to return all entries in the table where
            // user_uuid is the one requsted
            where: {
                user_uuid: req.params.user
            }
        })
        .then(result => {
            const response = {
                entries: result
            }
            return res.status(200).json(response)
        })
        // if there was a problem with querying the database, it's probably
        // because the user tried entering something that wasn't in UUID format
        .catch(() => {
            const response = {
                message: "Invalid user_uuid"
            }
            return res.status(400).json(response)
        })
})

// ensuring that this code can exported to ../server.js
module.exports = router
