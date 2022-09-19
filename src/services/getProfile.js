
const { Profile } = require ("../models/profileModel");


const getProfile = async () => {
  const getProf = await Profile.find({}).select("_id");

  return getProf;
};


module.exports = { getProfile };
