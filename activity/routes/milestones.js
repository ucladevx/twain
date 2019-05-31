// defining the routing
const express = require("express")
const router = express.Router()
const { Milestones } = require("../db")
const config = require("../Config")

// POST request handler
router.post("/", (req, res) => {
    const { body } = req

    // there are three types of milestones:
    // 1) untimed frequency: a certain number of instances of an activity_type so far
    // required fields: milestone_type, activity_type, quantity
    // 2) timed frequency: a certain number of instances of an activity_type over a certain timeframe
    // required fields: milestone_type, activity_type, quantity, n_days
    // 3) purely timed: only looking to see how long the user has been in the activity database
    // required fields: milestone_type

    // looks like the only unconditionally required field is milestone_type, so we'll check
    // for that first
    if (!body.milestone_type || !body.milestone_format) {
        const response = {
            message: "invalid request: missing milestone configuration field(s)"
        }
        return res.status(400).json(response)
    }
    // checks to make sure both milestone_type and milestone_format have expected values
    if (!config.milestoneTypes.includes(body.milestone_type) ||
        !config.milestoneFormats.includes(body.milestone_format)) {
        const response = {
            message: "invalid request: unrecognized milestone configuration"
        }
        return res.status(400).json(response)
    }

    // checking to make sure the right activity formats have the right
    // fields included in the request
    if (body.milestone_format === "UNTIMED_FREQUENCY" || body.milestone_format === "TIMED_FREQUENCY") {
        // this type of milestone requires a valid activity_type
        // check first if the field exists
        if (!body.activity_type) {
            const response = {
                message: "invalid request: this format requires the activity_type field"
            }
            return res.status(400).json(response)
        }
        // or check if it's a valid option
        else if (config.activityTypes.includes(body.activity_type)) {
            const response = {
                message: ""
            }
        }
    }

    // debugging catchall
    const response = {
        message: "success"
    }
    return res.status(200).json(response)
})

// testing GET request handler
router.get("/", (req, res) => {
    response = {
        message: "GET request received"
    }
    res.status(200).json(response)
})

module.exports = router