const express = require("express");
const {
  getPronounByUsername,
  manualUsernameAdd,
} = require("../controllers/callController");

const router = express.Router();

router.post("/", manualUsernameAdd);

router.get("/:username", getPronounByUsername);

module.exports = router;
