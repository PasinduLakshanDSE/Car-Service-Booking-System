const express = require("express");

const app = express();

const dbConfig = require('./db.jsx')

const port = process.env.PORT || 3000;

app.listen(port,() => console.log('Node Server Started using nodemon'));