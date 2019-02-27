var express = require("express");
var router = express.Router();

// the ending function for processing POST requests
router.post("/", (request, response) => {
    // if fields "user_id" and "activity_type" are both present, the request is valid
    if (request.body.user_id != null && request.body.activity_type != null) {
        response.send("valid request. adding row to SQL table\n");
    }
    // else, the request is invalid
    else {
        response.send("invalid request: all requests must include 'user_id' and 'activity_type' fields\n");
    }
    // for debugging purposes
    response.json(req.body);
});

// ensuring that this code can exported to ../server.js
module.exports = router;