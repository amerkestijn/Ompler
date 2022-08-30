const express = require("express");
const {
  getPronounByUsername,
  manualUsernameAdd,
  getPronounRemotely,
} = require("../controllers/callController");

const router = express.Router();

router.post("/", manualUsernameAdd);

router.get("/:username", getPronounByUsername);

router.get("/remoteget/:username", getPronounRemotely);

module.exports = router;
