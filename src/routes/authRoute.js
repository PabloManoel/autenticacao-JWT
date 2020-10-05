const authController = require("../controllers/authController");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/login', authController.login);
app.post('/logout', authController.logout);

module.exports = app;
