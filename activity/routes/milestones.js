// defining the routing
const express = require("express")
const router = express.Router()
const { Activity } = require("../db")
const config = require("../Config")

// testing POST request handler
router.post("/", (req, res) => {
    console.log("POST request received")
})