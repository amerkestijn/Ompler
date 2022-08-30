const Pronouns = require("../models/callModel");
const mongoose = require("mongoose");
const axios = require("axios");

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
};

// find by username
const getPronounByUsername = async (req, res) => {
  const { username } = req.params;

  const findUsername = await Pronouns.findOne({ username: username });
  if (!findUsername) {
    return res.status(404).json({ err: "not found" });
  } else {
    res.status(200).json(findUsername);
  }
};

const getPronounRemotely = async (req, res) => {
  const { username } = req.params;

  const alejoUrl = axios.create({
    baseURL: "https://pronouns.alejo.io/api/users/",
    timeout: 60000,
  });

  let { output } = await alejoUrl.get(username);
  if (!output) {
    console.log(username);
    return res.status(404).json({ err: "not found" });
  }
  res.status(200).json(output);
};

module.exports = {
  manualUsernameAdd,
  getPronounByUsername,
  getPronounRemotely,
};
