var express = require("express");
var router = express.Router();

router.post("/", function (req, res) {
    res.send("POST handler for /test route");
});

module.exports = router;