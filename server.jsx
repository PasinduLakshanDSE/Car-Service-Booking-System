const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Parse incoming JSON data
// Middleware

const cors = require("cors");

// Enable CORS
app.use(cors());



const dbConfig = require('./db.jsx')
const technicianRoute= require('./routes/technicianRoute.jsx')
const usersRoute = require('./routes/usersRoute.jsx')
const bookingsRoute = require('./routes/bookingRoute.jsx')


app.use('/api/technicians',technicianRoute)
app.use('/api/users',usersRoute)
app.use('/api/bookings',bookingsRoute)
const port = process.env.PORT || 5000;

app.listen(port,() => console.log('Node Server Started using nodemon'));