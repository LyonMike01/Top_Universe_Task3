
const { Profile } = require ("../models/profileModel");


const findandSort = async(value )=>{

   const { page = 1, pageSize = 10} = value

   const find = await Profile
                           .find({})
                           .limit(pageSize * 1)
                           .sort({firstName: 1})
                           .skip((page - 1) * pageSize)
                           .select("_id")
   return find
}

module.exports = { findandSort };

// '/proifles?sort=firstName:ASC&page=1&pageSize=10'