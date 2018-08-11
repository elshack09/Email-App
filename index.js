const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require("./models/User");

mongoose.connect(keys.mongoURI);

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Hi Erica" });
});
require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT);
