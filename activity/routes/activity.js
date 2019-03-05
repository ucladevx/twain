// defining the routing
const express = require("express")
const router = express.Router()
const { Activity } = require("../db")

// the ending function for processing POST requests
router.post("/", (request, response) => {
    const { body } = request
    // if either the "user_id" or "activity_type" field is empty,
    // the request is invalid
    if (!body.user_id || !body.activity_type) {
        response.status(400).send("invalid request: expected fields not found\n")
    }
    else {
        response.status(200).send("valid request. attempting to add row to SQL table\n")
        try {

        }
        catch (error) {
            console.log("error: ", error)
        }
    }
    // for debugging purposes
    response.json(req.body)
});

// ensuring that this code can exported to ../server.js
module.exports = router
