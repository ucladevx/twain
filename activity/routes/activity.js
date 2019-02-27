var express = require("express");
var router = express.Router();

// the ending function for processing POST requests
router.post("/", (request, response) => {
    const { body } = request;
    // if either the "user_id" or "activity_type" field is empty,
    // the request is invalid
    if (!body.user_id || !body.activity_type) {
        response.status(400).send("invalid request: expected fields not found\n");
    }
    else {
        response.status(200).send("valid request. row added to SQL table\n");
    }
    // for debugging purposes
    response.json(req.body);
});

// ensuring that this code can exported to ../server.js
module.exports = router;