// defining the routing
const express = require("express")
const router = express.Router()
const { Activity } = require("../db")
const config = require("../Config")

router.get("/", (req, res) => {
    Activity
        .findAll() // a simple .findAll() returns the entire table
        .then(result => {
            return res.status(200).json(result)
        })
        .catch(error => {
            const response = {
                message: error
            }
            return res.status(500).json(response)
        })
})