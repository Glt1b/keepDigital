const express = require("express");

const { getDetails
} = require("./controllers/controllers.js");

const cors = require("cors");
const app = express();

app.use(cors({origin: '*'}));
app.use(express.json({limit: '5mb'}));

app.get("/api/details", getDetails);



app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Path not found" });
});

module.exports = app;
