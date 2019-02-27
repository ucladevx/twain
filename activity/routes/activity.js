var express = require("express");
var router = express.Router();

// the ending function for processing POST requests
router.post("/", (req, res) => {
    console.log(req.body); // the JSON body of the POST request

    res.json(req.body);
});

// ensuring that this code can exported to ../server.js
module.exports = router;