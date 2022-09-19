
const express = require  ("express");
const app = express();
const router = express.Router();
const profileValidate = require ("../models/joiModel");
const {validate} = require ("express-validation");
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan')
const _ = require("lodash");


app.use(cors());

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 10, 
    standardHeaders: true, 
    legacyHeaders: false, 
})

app.use(limiter)  
app.use(morgan('combined'))



const {
    createProf,
    updateProf,
    deleteProf,
    getProf,
    searchProf,
    veryProf,
    findAndSort
    } = require  ("../controller/profileController");


// profile routes

router.post("/profile", validate(profileValidate.profVal), limiter, createProf);
router.post("/profile/:_id", limiter, deleteProf);
router.get("/profiles", limiter, getProf);
router.get("/search", searchProf);
router.get("/profile/verify", veryProf);
router.get("/profiles_sort", findAndSort)
router.put("/profile/:_id", limiter, updateProf);


module.exports = router;


// /search?key=firstName&value=john
// ?sort=firstName:ASC&page=1&pageSize=10


