const User = require('../models/userModel')


// exports.getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find()

//         res.status(200).json({
//             status: 'success',
//             results: users.length,
//             data: {
//                 users
//             }

//         });
//     } catch (err) {
//         res.status(404).json({
//             status: "fail",
//             message: err
//         })
//     }

// }

exports.getUser = async (req, res) => {
    try {

        const user = await User.findById(req.params.id)

        if (user) {
            res.status(200).json({
                status: 'success',
                data: {
                    user
                }

            });
        }

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }

}

// update pastResults

exports.updateRes = async (req, res) => {
    try {

        const { class_name, confidence } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, {
            $push: {
                pastResults: {
                    class_name,
                    confidence,
                    date: new Date() // Assuming you want to include the current date
                }
            }
        },
            { new: true }
        );
        // await user.save();
        res.status(200).json({
            status: 'success',
            data: user
        });

    } catch (error) {
        console.error('Error adding/updating predictions:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}