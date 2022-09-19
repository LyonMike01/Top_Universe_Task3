
const { Profile } = require ("../models/profileModel");


const createProfile = async (value) => {
  const newProfile = await Profile.create(value);
return newProfile;
};


module.exports = { createProfile }

