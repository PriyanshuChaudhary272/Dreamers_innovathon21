const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    recruirement: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        max: 500,
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilePicture: {
        type: String,
        default: "",
    },
    active: {
        type: String,
    },
    about: {
        type: String,
    },
    education: {
        type: String,
    },
    interests: {
        type: String,
    },


    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin:
    {
        type: Boolean,
        default: false
    },
    desc:
    {
        type: String,
        max: 100

    },
    city:
    {
        type: String,
        max: 50

    }

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;