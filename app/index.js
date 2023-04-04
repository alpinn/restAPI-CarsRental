const express = require("express");
const cors = require("cors");
const path = require("path");
const dir = path.resolve();
const publicPath = path.join(dir, "public");
const router = require("../config/routes.js");
const app = express();

app.use(cors());
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
