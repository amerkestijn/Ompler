const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const express = require("express");
const apiRoutes = require("./routes/calls");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use("/api", apiRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "db conn established & listening on port " + process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
