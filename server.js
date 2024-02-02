const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const path = require("path");
dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));

// static files acces
app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});
