const { createProfile } = require ("../services/createProfile");
const { verifyProfile } = require ("../services/verify");
const { deleteProfile }  = require ("../services/deleteProfile");
const { getProfile }  = require ("../services/getProfile");
const { findandSort }  = require ("../services/findAndSort");

const { updateProfile }  = require  ("../services/updateProfile");
const {searchProfile} = require("../services/search")
const { encrypt, decrypt, qrCode } = require('../crypt/index');
const qr = require("qrcode");


exports.getProf = async (req, res, next) => {
  try {
    const profile = await getProfile();
    return res.status(200).json({
       data: profile 
     });
  } catch (err) {
    return res.status(500).json({ err, message: "Invalide, Please Try again" });
  }
};



exports.createProf = async (req, res, next) => {
  try {
    const newProfile = await createProfile(req.body);
    const newProf = JSON.stringify(newProfile);
    const key = await encrypt(newProf);
    const keyCode = await JSON.stringify(key);
     const QR = await qrCode(keyCode);
     res.status(200).json({
         msg: "Profile Created",
         data: key,
         QRcode: QR
       });

  } catch (err) {
    return res.status(500).json({ err, message: "OOps!!! Unable to create Profile" });
  }};




  exports.findAndSort = async (req, res, next) => {
    try {

       const key = req.query;
       console.log (key);
      const profile = await findandSort(key);
      res.status(200).json({ msg: "SUCCESS: Profile found", data: profile });
      } catch (err) {
        return res.status(500).json({ msg: "Failed: Profile Not Found" });

      }};


      
exports.updateProf = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const body = req.body;
    const details = {
      _id,
      ...body
    };
    const profile = await updateProfile(details);
    return res.json({ msg: "Profile Updated Successfyully", data: profile });
  } catch (err) {
    return res.status(500).json({ err, message: "Seems your Inputs are invalid" });
  }
};


exports.deleteProf = async (req, res, next) => {
  try {
    const { _id } = req.params;
    await deleteProfile({ _id });
    return res.status(200).json({ message: "Profile Deleted" });
  } catch (err) {
    return res.status(500).json({ err, message: "Profile not found" });
  }
};



exports.searchProf = async (req, res, next) => {
  try {

    const key = req.query.firstName;
  const profile=  await searchProfile(key);
   return res.status(201).json({
    message: "Profile Seen",
    data: profile 
   });
  
  } catch (err) {
    return res.status(500).json({ err, message: err.message });
  }
};


exports.veryProf = async (req, res, next) => {
  try {
      const key = req.body
     const decryptData = await decrypt(key);
     const profile = JSON.parse(decryptData);
     await verifyProfile(profile)
    return res.status(201).send({
      message: "Profile verified",
     data: profile
    });
  
  } catch (err) {
    return res.status(500).json({ msg: "Provide the encryted data {iV & Content } with the qrcode in exemption" });
  }};

