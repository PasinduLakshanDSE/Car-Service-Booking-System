const express = require("express");

const app = express();

const dbConfig = require('./db.jsx')
const technicianRoute= require('./routes/technicianRoute.jsx')


app.use('/api/technicians',technicianRoute)
const port = process.env.PORT || 5000;

app.listen(port,() => console.log('Node Server Started using nodemon'));