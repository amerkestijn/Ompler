const Pronouns = require("../models/callModel");
const mongoose = require("mongoose");

// manually add username
const manualUsernameAdd = (req, res) => {
  const { username, pronouns } = req.body;

  try {
    const newPronoun = Pronouns.create({
      username,
      pronouns,
    });
    res.status(200).json(newPronoun);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
  test;
};

// find by username
const getPronounByUsername = async (req, res) => {
  const { username, pronouns } = req.params;

  //   if (!mongoose.Types.username.isValid(username)) {
  //     return res.status(404).json({ err: "unknown user" });
  //   }
  console.log(username);

  const findUsername = await Pronouns.findOne({ username: username });
  if (!findUsername) {
    return res.status(404).json({ err: "not found" });
  } else {
    res.status(200).json(findUsername);
  }
};

module.exports = {
  manualUsernameAdd,
  getPronounByUsername,
};
