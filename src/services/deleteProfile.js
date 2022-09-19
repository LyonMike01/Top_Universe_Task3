

const { Profile } = require ("../models/profileModel");
const { checkProfile } = require ("./checkProfile");

const deleteProfile = async (value) => {
  
  const { _id } = value;

  await checkProfile(Profile, { _id });
  
  await Profile.deleteOne({ _id });
};


module.exports = { deleteProfile }