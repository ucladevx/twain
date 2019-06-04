// defining the routing
const express = require("express")
const router = express.Router()
const { Milestones } = require("../db")
const config = require("../Config")

// POST request handler
router.post("/", (req, res) => {
    const { body } = req

    // milestones can either be TIMED or UNTIMED
    // for UNTIMED, we don't need to require the n_days field
    // for TIMED, we need to require it

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