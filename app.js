const express = require("express");

const { getDetails,
        patchDetails,
        getImage,
        postImage } = require("./controllers/controllers.js");

// const cors = require("cors");
const app = express();

// app.use(cors({origin: '*'}));
app.use(express.json({limit: '5mb'}));

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get("/api/details", getDetails);
app.patch("/api/details", patchDetails);

app.get("/api/image/:url", getImage);
app.post("/api/image/:url", postImage);


app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Path not found" });
});

module.exports = app;
