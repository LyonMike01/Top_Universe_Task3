

const { Profile } = require ("../models/profileModel");


const searchProfile = async (value) => {

  const Fname = await Profile.findOne({firstName: value});
  
    if (  !Fname ) {
      return ("FirstName not found")
    }
      return Fname

};


module.exports = { searchProfile }
