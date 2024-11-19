const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Parse incoming JSON data

const dbConfig = require('./db.jsx')
const technicianRoute= require('./routes/technicianRoute.jsx')
const usersRoute = require('./routes/usersRoute.jsx')


app.use('/api/technicians',technicianRoute)
app.use('/api/users',usersRoute)
const port = process.env.PORT || 5000;

app.listen(port,() => console.log('Node Server Started using nodemon'));