const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const callPronounSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    pronouns: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pronouns", callPronounSchema);
