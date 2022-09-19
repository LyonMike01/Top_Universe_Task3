

const mongoose = require('mongoose');
const {connect} = mongoose;
const connect_db =  process.env.MONGODB_URI;


exports.connectToDB = function () {
                connect(connect_db,() => {
  console.log("Connected to Lyon Mike Database")
      },
      (err) => { console.log(err.message) }

      )};