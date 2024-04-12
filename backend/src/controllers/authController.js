const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const AppError = require('../utility/AppError')
const signToken = id => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.signup = async (req, res, next) => {
    const newUser = await User.create(req.body);
    const token = signToken(newUser._id)
    try {
        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail'
        })
    }

}


// login
exports.login = async (req, res, next) => {

    try {
        const { email, password } = req.body;

        // 1) Check if email and password exist
        if (!email || !password) {
            return next(new AppError('please provide email and password', 400));
        }

        // 2) check if user exist && password is correct
        const user = await User.findOne({ email }).select('+password');

        if (!user || !(await user.correctPassword(password, user.password))) {
            return next(new AppError('Incorrect email or password', 401))
        }
        // 3) If everything ok, send token to client
        const token = signToken(user._id)
        res.status(200).json({
            status: 'success',
            token,
            user: {
                _id: user._id,
                name: user.name,
            }
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error
        })
    }

}

// exports.createUser = async (req, res) => {
//     try {
//         const newUser = await User.create(req.body);

//         res.status(201).json({
//             status: 'success',
//             data: {
//                 user: newUser
//             }
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(400).json({
//             status: 'fail',
//             message: 'Error creating user'
//         });
//     }
