const express = require("express");
const router = express.Router();
const axios = require("axios");

//Jobs route
router.get("/", async (req, res) => {
  try {
    const { title, location } = req.query;

    const appId = process.env.ADZUNA_APP_ID;
    const appKey = process.env.ADZUNA_APP_KEY;
    const country = process.env.ADZUNA_COUNTRY || 'gb';

    const response = await axios(`https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${appId}&app_key=${appKey}
    `);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .res.json({ message: "failed to fetch jobs from Adzuna API" });
  }
  const data = res.send("Hello I am job route");
});

module.exports = router;
