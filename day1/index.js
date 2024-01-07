const express = require("express");
const app = express();
const PORT = 3000;
const { main, MovieModel } = require("./db");

app.get("/movie", async (req, res) => {
  const { Title, Year, limit = 20, page = 1, orderBy = -1 } = req.query;
  let queryObject = {};

  
  if (Title) {
    queryObject.Title = Title; 
  }
  if (Year) {
    queryObject.Year = { $gte: Year };
  }

  const skipCount = (page - 1) * limit;

  try {
    const movies = await MovieModel.find(queryObject)
      .skip(skipCount)
      .limit(limit)
      .sort({ Year: orderBy });

    res.json(movies);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, async () => {
  try {
    await main();
    console.log(`Server is running on ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
