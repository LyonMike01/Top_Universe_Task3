

const { Profile } = require ("../models/profileModel");
const { checkProfile } = require ("./checkProfile");



const updateProfile = async (value) => {

  const { _id, ...others } = await value;

  await checkProfile(Profile, { _id });

  const updatedProfile = await Profile.findByIdAndUpdate(
    _id,
    { ...others },
    { new: true }
  ).select("_id");

  return updatedProfile;

};

module.exports = { updateProfile };
