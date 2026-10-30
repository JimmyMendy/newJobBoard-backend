const express = require("express");
const cors = require("cors")
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5050;

//Routes
const jobsRoute = require("./routes/jobs");

app.use(cors({
  origin: "*"
}))

app.get("/", (req, res) => {
  res.send("Hello world! root node");
});

app.use("/jobs", jobsRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
