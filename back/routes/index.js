const express = require("express");

const about = require("./about");

router.use("/about", about);

module.exports = router;
