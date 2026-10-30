const express = require("express");
const app = express();
const port = 5050;
const jobsRoute = require("./routes/jobs")

app.get("/", (req, res) => {
  res.send("Hello world! root node");
});



app.use('/jobs', jobsRoute)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
