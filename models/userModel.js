const mongoose = require('mongoose');
const crypto = require('crypto');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true})

userSchema.plugin(passportLocalMongoose)

// Create a userSchema methods for isPasswordSame when registering

const User = mongoose.model('User', userSchema);
module.exports = User;