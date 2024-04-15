const express = require("express");
const cors = require("cors");
const infoController = require("./controller/infocontroller");
const imageController = require("./controller/imagecontroller");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
// GET INFO
app.get("/parcel/:passcode", infoController.getInfo);

// // STORE INFO
app.post("/parcel", imageController.uploadinfo, infoController.storeInfo);

module.exports = app;
