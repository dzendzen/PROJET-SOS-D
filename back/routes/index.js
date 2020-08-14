const express = require("express");

const about = require("./about");
const contact = require("./contact");
//
const router = express.Router();
//

router.use("/about", about);
router.use("/contact", contact);

module.exports = router;
