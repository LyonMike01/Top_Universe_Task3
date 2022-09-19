
const path = require('path');
const dotenv =require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const express = require('express');
const { Profile } = require('./src/models/profileModel');
const bodyParser = require('body-parser');
const {connectToDB} = require("./src/db/mongodb");
const profileRoute = require("./src/routers/profileRouter");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const PORT = process.env.PORT || 7070
const app = express();
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 10, 
  standardHeaders: true, 
  legacyHeaders: false, 
});

connectToDB();


app.set("view engine", "ejs");
app.use(cors())
app.use(
    helmet({
      referrerPolicy: { policy: "no-referrer" },
    })
  );

app.use(limiter)  
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", limiter, profileRoute);
app.get("/", (req, res) => {
    res.send("SEE THE USER PROFILE");
  });


  app.get("*", (req, res) => {
    res.status(404).json({
        status: 'failed',
        message: 'Not Found',
        data: 'Route does not exist'
    })
    })

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    })


  module.exports = app