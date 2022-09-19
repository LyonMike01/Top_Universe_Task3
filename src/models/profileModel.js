
const mongoose = require('mongoose');


const ProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        uppercase: true,

    },
    lastName: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },

    __iv : {
        defdault: false
    }
});


const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = { Profile };