var express = require("express");
var router = express.Router();

router.post("/test", function (req, res) {
    res.send("successful POST request made to /test route");
    console.log("successful POST request made");
});

// ensuring that this code can exported to ../server.js
module.exports = router;