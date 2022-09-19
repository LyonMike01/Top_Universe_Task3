const { checkProfile } = require ("./checkProfile");
const { Profile } = require ("../models/profileModel");


const verifyProfile = async (value) =>{

    const verify = await checkProfile(Profile, value)

    if(!verify) {
        let err = new Error("Profile not verified");
        err.status = 404;
        throw err
       }
       return true;
    }

module.exports = { verifyProfile }