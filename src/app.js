const express = require("express");
const app = express();

const healthCheck = require("./routes/healthCheck")
const authRoute = require("./routes/authRoute");
const notesRoute = require("./routes/notesRoute");
app.use(express.json());

app.use("/", healthCheck);
app.use("/auth", authRoute);
app.use("/notes", notesRoute);

module.exports = app;
