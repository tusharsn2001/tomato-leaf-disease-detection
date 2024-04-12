const mongoose = require('mongoose')
// schema 
const bcrypt = require('bcryptjs')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,


    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email']

    },
    password: {
        type: String,
        required: [true, 'A user must provide a password'],
        minlength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'please confirm your password'],
        validate: {
            // This only works on CREATE ans SAVE!!
            validator: function (el) {
                return !this.isModified('password') || el === this.password;
            },
            message: 'Password are not the same'
        }
    },

    pastResults: [{

        class_name: {
            type: String
        },
        confidence: { type: String },
        date: { type: Date },


    }]


}, {
    timestamps: true
})
userSchema.pre('save', async function (next) {

    // Only run this function if password was modified
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12)

    this.confirmPassword = undefined;
    next();

})

//a instance method

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User', userSchema)

module.exports = User;