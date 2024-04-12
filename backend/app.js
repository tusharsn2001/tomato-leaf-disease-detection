const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./src/routes/userRoutes')
const session = require('express-session')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get Api Data
app.use(cors(
    {
        origin: "*"
    }
));


app.use(
    session({
        secret: process.env.JWT_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            maxAge: 7 * 24 * 60 * 60 * 1000, // Set session timeout to 7 days
        },
    })
);

app.use('/api/users', userRouter)



module.exports = app