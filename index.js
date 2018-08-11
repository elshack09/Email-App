const express = require("express");
require("./services/passport");


const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Hi Erica" });
});
require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT);

