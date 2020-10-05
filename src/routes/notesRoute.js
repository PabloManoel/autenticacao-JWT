const notesController = require("../controllers/notesController");
const jwtMid = require("../middlewares/jwtMiddleware");

const express = require('express');
const app = express();

app.use(express.json());

app.get("/", jwtMid, notesController.getAll);

module.exports = app;

