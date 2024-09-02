//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");


const app = express();
const port = 3000;

const DataRouter = require("./Routes/Data");

app.use("/Data", DataRouter);

app.listen(port, function () {
    console.log(`server started at port ${port}.`);
});