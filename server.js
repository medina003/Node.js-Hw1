const express = require("express");
const cors = require("cors");
const apartmentsData = require("./data");
const app = express();
app.use(cors());
const PORT = 5000;

app.get("/apartments", (req, res) => {
  const { city } = req.query;
  console.log(city);

  const filteredApartments = apartmentsData[city] || [];
  res.json(filteredApartments);
  res.send(filteredApartments);
  console.log(filteredApartments);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
