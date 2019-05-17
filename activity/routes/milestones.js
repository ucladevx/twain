// defining the routing
const express = require("express")
const router = express.Router()
const { Activity } = require("../db")
const config = require("../Config")

// testing GET request handler
router.get("/", (req, res) => {
    response = {
        message: "GET request received"
    }
    res.status(200).json(response)
})

module.exports = router